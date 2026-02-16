/**
 * Runtime Translation Layer for PoE2 Temple Planner
 * Translates English strings to Russian after page render
 * Handles dynamic content including tooltips and modals
 */

(function() {
  'use strict';

  // Translation mappings loaded from JSON files
  let TRANSLATIONS = {};
  let translationPattern = null;

  // Translation version - update when translations change
  const TRANSLATION_VERSION = '1.6'; // User-managed version

  // Configuration for ignoring specific elements
  const IGNORE_CONFIG = {
    classes: ['no-translate', 'code-block', 'item-name'], // Classes to ignore
    attributes: ['data-no-translate'], // Attributes to ignore
    tags: ['CODE', 'PRE', 'SCRIPT', 'STYLE'] // Tags to ignore
  };

  // Error tracking and statistics
  let translationStats = {
    totalTranslations: 0,
    uniqueTranslations: {},
    startTime: Date.now(),
    errors: 0,
    warnings: 0
  };

  /**
   * Custom error class for translation errors
   */
  class TranslationError extends Error {
    constructor(message, type, details) {
      super(message);
      this.name = 'TranslationError';
      this.type = type;
      this.details = details;
      this.timestamp = new Date().toISOString();
    }
  }

  /**
   * Register Service Worker for caching translations
   */
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/atziri-temple/assets/service-worker.js')
          .then((registration) => {
            console.log('PoE2 Translator: Service Worker registered successfully');
            
            // Check for updates when page loads
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('PoE2 Translator: New translation updates available!');
                }
              });
            });
          })
          .catch((error) => {
            console.warn('PoE2 Translator: Service Worker registration failed:', error);
          });
      });
    } else {
      console.log('PoE2 Translator: Service Worker not supported by this browser');
    }
  }

  /**
   * Load JSON translation file with enhanced error handling
   */
  async function loadTranslationFile(path) {
    try {
      const response = await fetch(path);
      
      if (!response.ok) {
        throw new TranslationError(
          `Failed to load translation file: ${path}`,
          'FETCH_ERROR',
          { 
            status: response.status, 
            statusText: response.statusText,
            url: path
          }
        );
      }
      
      const data = await response.json();
      
      // Validate data format
      if (typeof data !== 'object' || data === null) {
        throw new TranslationError(
          `Invalid translation data format: ${path}`,
          'INVALID_DATA',
          { 
            type: typeof data,
            url: path
          }
        );
      }
      
      // Validate that data is not empty
      if (Object.keys(data).length === 0) {
        console.warn(`PoE2 Translator: Translation file is empty: ${path}`);
        translationStats.warnings++;
      }
      
      return data;
    } catch (error) {
      translationStats.errors++;
      
      if (error instanceof TranslationError) {
        console.error('PoE2 Translator:', {
          message: error.message,
          type: error.type,
          details: error.details,
          timestamp: error.timestamp
        });
      } else if (error instanceof SyntaxError) {
        console.error('PoE2 Translator: JSON parsing error:', {
          message: error.message,
          url: path,
          timestamp: new Date().toISOString()
        });
      } else {
        console.error('PoE2 Translator: Unexpected error loading translation file:', {
          error: error.message,
          url: path,
          timestamp: new Date().toISOString()
        });
      }
      
      // Return empty object to prevent complete failure
      return {};
    }
  }

  /**
   * Load all translation files and merge them
   */
  async function loadTranslations() {
    const translationFiles = [
      `/atziri-temple/assets/translations/temple-rooms.json?v=${TRANSLATION_VERSION}`,
      `/atziri-temple/assets/translations/medallions.json?v=${TRANSLATION_VERSION}`,
      `/atziri-temple/assets/translations/ui-terms.json?v=${TRANSLATION_VERSION}`,
      `/atziri-temple/assets/translations/modifiers.json?v=${TRANSLATION_VERSION}`
    ];

    const translations = await Promise.all(
      translationFiles.map(file => loadTranslationFile(file))
    );

    // Merge all translation objects
    TRANSLATIONS = Object.assign({}, ...translations);

    // Validate translations
    if (Object.keys(TRANSLATIONS).length === 0) {
      console.warn('PoE2 Translator: WARNING - No translations loaded!');
    }

    // Create a regex pattern for efficient matching
    // IMPORTANT: Case-sensitive matching is REQUIRED (no 'i' flag)
    // Translations must match exact case to prevent incorrect translations
    // 
    // LONGEST MATCH PRIORITY: Keys are sorted by length (longest first) to ensure
    // longer phrases match before shorter ones. For example:
    // "60% increased number of Magic Monsters" matches before "Monsters"
    // 
    // Performance: Pattern is compiled once at initialization for O(1) lookup speed
    translationPattern = new RegExp(
      Object.keys(TRANSLATIONS)
        .sort((a, b) => b.length - a.length) // Sort by length (longest first) - ensures longest match priority
        .map(key => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // Escape special regex characters
        .join('|'),
      'g' // Case-sensitive (no 'i' flag) - DO NOT ADD 'i' flag here
    );
    
    // Validate that the pattern is case-sensitive
    // This is defensive programming to prevent accidental modification in the future
    if (translationPattern.flags.includes('i')) {
      console.error('PoE2 Translator: ERROR - Translation pattern must be case-sensitive!');
      throw new Error('Translation pattern must not have the case-insensitive flag');
    }

    console.log('PoE2 Translator: Loaded', Object.keys(TRANSLATIONS).length, 'translations (case-sensitive matching)');
  }

  /**
   * Translates text content using strict case-sensitive matching rules
   * with statistics tracking
   */
  function translateText(text) {
    if (!text || typeof text !== 'string' || !translationPattern) return text;
    
    return text.replace(translationPattern, (match) => {
      // Track statistics
      translationStats.totalTranslations++;
      translationStats.uniqueTranslations[match] = 
        (translationStats.uniqueTranslations[match] || 0) + 1;
      
      return TRANSLATIONS[match] || match;
    });
  }

  /**
   * Translate a single text node
   */
  function translateTextNode(node) {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()) {
      const originalText = node.nodeValue;
      const translatedText = translateText(originalText);
      if (originalText !== translatedText) {
        node.nodeValue = translatedText;
      }
    }
  }

  /**
   * Translate all text nodes in an element
   * with support for ignoring specific elements
   */
  function translateElement(element) {
    if (!element) return;

    // Skip ignored tags
    if (IGNORE_CONFIG.tags.includes(element.tagName)) return;

    // Skip elements with ignored classes
    if (element.classList) {
      for (const className of IGNORE_CONFIG.classes) {
        if (element.classList.contains(className)) {
          return;
        }
      }
    }

    // Skip elements with ignored attributes
    for (const attr of IGNORE_CONFIG.attributes) {
      if (element.hasAttribute(attr)) {
        return;
      }
    }

    // Translate element's own text nodes
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while (node = walker.nextNode()) {
      translateTextNode(node);
    }

    // Translate common attributes
    ['title', 'placeholder', 'alt', 'aria-label'].forEach(attr => {
      if (element.hasAttribute(attr)) {
        const originalValue = element.getAttribute(attr);
        const translatedValue = translateText(originalValue);
        if (originalValue !== translatedValue) {
          element.setAttribute(attr, translatedValue);
        }
      }
    });
  }

  /**
   * Translate the entire document
   */
  function translateDocument() {
    translateElement(document.body);
  }

  /**
   * Set up mutation observer to handle dynamic content
   */
  function setupObserver() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        // Handle added nodes
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            translateElement(node);
          } else if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node);
          }
        });

        // Handle attribute changes
        if (mutation.type === 'attributes' && mutation.target.nodeType === Node.ELEMENT_NODE) {
          const element = mutation.target;
          const attrName = mutation.attributeName;
          if (['title', 'placeholder', 'alt', 'aria-label'].includes(attrName)) {
            const originalValue = element.getAttribute(attrName);
            if (originalValue) {
              const translatedValue = translateText(originalValue);
              if (originalValue !== translatedValue) {
                element.setAttribute(attrName, translatedValue);
              }
            }
          }
        }

        // Handle character data changes (text content)
        if (mutation.type === 'characterData') {
          translateTextNode(mutation.target);
        }
      });
    });

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['title', 'placeholder', 'alt', 'aria-label'],
      characterData: true,
      characterDataOldValue: false
    });

    return observer;
  }

  /**
   * Initialize the translator with enhanced error handling
   */
  async function init() {
    try {
      // Load translations first
      await loadTranslations();

      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          try {
            translateDocument();
            setupObserver();
          } catch (error) {
            translationStats.errors++;
            console.error('PoE2 Translator: Error during DOM translation:', {
              message: error.message,
              stack: error.stack,
              timestamp: new Date().toISOString()
            });
          }
        });
      } else {
        // DOM is already ready
        try {
          translateDocument();
          setupObserver();
        } catch (error) {
          translationStats.errors++;
          console.error('PoE2 Translator: Error during immediate translation:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
          });
        }
      }

      // Also translate after a short delay to catch any late-rendering content
      setTimeout(() => {
        try {
          translateDocument();
        } catch (error) {
          translationStats.errors++;
          console.error('PoE2 Translator: Error during delayed translation:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
          });
        }
      }, 500);

      setTimeout(() => {
        try {
          translateDocument();
        } catch (error) {
          translationStats.errors++;
          console.error('PoE2 Translator: Error during second delayed translation:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
          });
        }
      }, 1500);

    } catch (error) {
      translationStats.errors++;
      console.error('PoE2 Translator: Fatal error during initialization:', {
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
      
      // Still set up observer to handle any content that appears later
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          try {
            setupObserver();
          } catch (error) {
            console.error('PoE2 Translator: Error setting up observer:', error);
          }
        });
      } else {
        try {
          setupObserver();
        } catch (error) {
          console.error('PoE2 Translator: Error setting up observer:', error);
        }
      }
    }
  }

  // Periodic statistics logging
  setInterval(() => {
    if (translationStats.totalTranslations > 0 || translationStats.errors > 0) {
      console.log('PoE2 Translator Stats:', {
        totalTranslations: translationStats.totalTranslations,
        uniqueTranslations: Object.keys(translationStats.uniqueTranslations).length,
        errors: translationStats.errors,
        warnings: translationStats.warnings,
        uptime: Math.round((Date.now() - translationStats.startTime) / 1000) + 's'
      });
    }
  }, 30000); // Log every 30 seconds

  // Register Service Worker for caching
  registerServiceWorker();

  // Start the translator
  init();

  console.log('PoE2 Translator initialized - Включено');
})();