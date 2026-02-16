/**
 * Service Worker for PoE2 Temple Planner Translations
 * Provides offline support and instant loading of translations
 */

// ============================================
// VERSION - UPDATE WHEN TRANSLATIONS CHANGE
// ============================================
const TRANSLATION_VERSION = '1.6'; // User-managed version
const CACHE_NAME = `poe2-translations-v${TRANSLATION_VERSION}`;
const CACHE_DURATION = 86400000; // 24 hours in milliseconds

// Translation files to cache
const TRANSLATION_FILES = [
  `/atziri-temple/assets/translations/temple-rooms.json?v=${TRANSLATION_VERSION}`,
  `/atziri-temple/assets/translations/medallions.json?v=${TRANSLATION_VERSION}`,
  `/atziri-temple/assets/translations/ui-terms.json?v=${TRANSLATION_VERSION}`,
  `/atziri-temple/assets/translations/modifiers.json?v=${TRANSLATION_VERSION}`
];

// Error tracking for Service Worker
let errorCount = 0;
const MAX_ERRORS = 10; // Maximum errors before giving up

// Install event - cache translation files
self.addEventListener('install', (event) => {
  console.log('PoE2 Translator Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('PoE2 Translator Service Worker: Caching translation files');
      return cache.addAll(TRANSLATION_FILES).then(() => {
        console.log('PoE2 Translator Service Worker: Translation files cached successfully');
        self.skipWaiting(); // Activate immediately
      }).catch((error) => {
        errorCount++;
        console.error('PoE2 Translator Service Worker: Failed to cache files:', {
          message: error.message,
          timestamp: new Date().toISOString(),
          errorCount: errorCount
        });
        
        // Don't fail installation if caching fails
        // Service Worker will still activate and try again later
        return Promise.resolve();
      });
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('PoE2 Translator Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('PoE2 Translator Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('PoE2 Translator Service Worker: Activation complete');
      return self.clients.claim(); // Take control of all pages immediately
    })
  );
});

// Fetch event - intercept requests for translations
self.addEventListener('fetch', (event) => {
  const requestUrl = event.request.url;
  
  // Check if this is a request for translation files
  const isTranslationRequest = TRANSLATION_FILES.some(file => {
    // Compare URLs without query parameters for matching
    const fileUrl = new URL(file, self.location.origin).pathname;
    const requestPath = new URL(requestUrl).pathname;
    return requestPath === fileUrl;
  });
  
  if (isTranslationRequest) {
    event.respondWith(
      handleTranslationRequest(event.request)
    );
  }
});

/**
 * Handle translation file requests with cache-first strategy
 * and enhanced error handling
 */
async function handleTranslationRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // Try to get from cache first
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Check if cache is still fresh (less than 24 hours old)
      const cacheTime = await getCacheTimestamp(request.url);
      const isFresh = cacheTime && (Date.now() - cacheTime < CACHE_DURATION);
      
      if (isFresh) {
        console.log('PoE2 Translator Service Worker: Serving from cache (fresh):', request.url);
        return cachedResponse;
      }
      
      console.log('PoE2 Translator Service Worker: Cache expired, refreshing:', request.url);
    }
    
    // Cache miss or stale - fetch from network
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Clone response because it can only be consumed once
      const responseClone = networkResponse.clone();
      
      // Update cache with new response
      await cache.put(request, responseClone);
      
      // Save timestamp for cache validation
      await saveCacheTimestamp(request.url);
      
      console.log('PoE2 Translator Service Worker: Fetched and cached:', request.url);
    } else {
      // Network returned error status
      console.warn('PoE2 Translator Service Worker: Network returned error status:', {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        url: request.url
      });
      
      // Try to return cached version if available
      if (cachedResponse) {
        console.log('PoE2 Translator Service Worker: Returning stale cache due to network error');
        return cachedResponse;
      }
    }
    
    return networkResponse;
    
  } catch (error) {
    errorCount++;
    
    console.warn('PoE2 Translator Service Worker: Network error, trying cache:', {
      message: error.message,
      url: request.url,
      timestamp: new Date().toISOString(),
      errorCount: errorCount
    });
    
    // Fallback to cache if network fails
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      console.log('PoE2 Translator Service Worker: Serving stale cache (offline mode):', request.url);
      return cachedResponse;
    }
    
    // No cache and no network - return empty object instead of failing
    console.error('PoE2 Translator Service Worker: No cache and no network, returning empty object');
    
    return new Response(JSON.stringify({}), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'X-Translation-Error': 'No cache and no network available'
      }
    });
  }
}

/**
 * Save timestamp when a file was cached
 */
async function saveCacheTimestamp(url) {
  try {
    const timestampStore = await caches.open('timestamps-v1');
    const timestamp = new Response(JSON.stringify({ timestamp: Date.now() }), {
      headers: { 'Content-Type': 'application/json' }
    });
    await timestampStore.put(url, timestamp);
  } catch (error) {
    console.warn('PoE2 Translator Service Worker: Error saving cache timestamp:', error);
  }
}

/**
 * Get timestamp when a file was cached
 */
async function getCacheTimestamp(url) {
  try {
    const timestampStore = await caches.open('timestamps-v1');
    const response = await timestampStore.match(url);
    if (response) {
      const data = await response.json();
      return data.timestamp;
    }
  } catch (error) {
    console.warn('PoE2 Translator Service Worker: Error reading cache timestamp:', error);
  }
  return null;
}

/**
 * Message handler for manual cache updates
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('PoE2 Translator Service Worker: Clearing cache requested');
    caches.delete(CACHE_NAME).then(() => {
      console.log('PoE2 Translator Service Worker: Cache cleared');
      if (event.ports && event.ports[0]) {
        event.ports[0].postMessage({ success: true });
      }
    }).catch((error) => {
      console.error('PoE2 Translator Service Worker: Error clearing cache:', error);
      if (event.ports && event.ports[0]) {
        event.ports[0].postMessage({ success: false, error: error.message });
      }
    });
  }
});