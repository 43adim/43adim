// ===============================
// 43 ADIM - Service Worker
// Caching and Offline Support for GitHub Pages
// ===============================

const CACHE_NAME = '43adim-v2.0.0';
const STATIC_CACHE = '43adim-static-v2.0.0';
const DYNAMIC_CACHE = '43adim-dynamic-v2.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/proje.html',
  '/monitor.html',
  '/assets/css/main.css',
  '/assets/css/proje.css',
  '/assets/css/critical.css',
  '/assets/js/main.js',
  '/assets/js/proje.js',
  '/assets/js/performance.js',
  '/assets/js/timeline.js',
  '/assets/js/monitor.js',
  '/assets/js/footer.js',
  '/assets/data/projects.json',
  '/assets/images/common/logo-placeholder.svg',
  'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.3/dist/tailwind.min.css'
];

// Files to cache on demand
const DYNAMIC_FILES = [
  '/assets/data/',
  '/assets/images/',
  'https://fonts.googleapis.com/',
  'https://fonts.gstatic.com/'
];

// Install event - cache static files
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Static files cached');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Error caching static files', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(request)
          .then(networkResponse => {
            // Don't cache if not a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Determine which cache to use
            const shouldCacheDynamic = DYNAMIC_FILES.some(pattern => 
              request.url.includes(pattern)
            );

            if (shouldCacheDynamic) {
              // Cache dynamic files
              const responseClone = networkResponse.clone();
              caches.open(DYNAMIC_CACHE)
                .then(cache => {
                  console.log('Service Worker: Caching dynamic file', request.url);
                  cache.put(request, responseClone);
                });
            }

            return networkResponse;
          })
          .catch(error => {
            console.error('Service Worker: Fetch failed', error);
            
            // Return offline fallback for HTML pages
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
            
            // Return placeholder for images
            if (request.headers.get('accept').includes('image')) {
              return caches.match('/assets/images/common/logo-placeholder.svg');
            }
            
            throw error;
          });
      })
  );
});

// Background sync for analytics data
self.addEventListener('sync', event => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalyticsData());
  }
});

// Sync analytics data when online
async function syncAnalyticsData() {
  try {
    const analyticsData = await getStoredAnalyticsData();
    if (analyticsData && analyticsData.length > 0) {
      // Process analytics data when online
      console.log('Service Worker: Syncing analytics data', analyticsData.length, 'entries');
      // Here you could send to an analytics endpoint if needed
      clearStoredAnalyticsData();
    }
  } catch (error) {
    console.error('Service Worker: Error syncing analytics data', error);
  }
}

// Get stored analytics data from IndexedDB or localStorage
async function getStoredAnalyticsData() {
  try {
    // Try IndexedDB first, fallback to localStorage
    if ('indexedDB' in self) {
      return await getAnalyticsFromIndexedDB();
    } else {
      return JSON.parse(localStorage.getItem('pendingAnalytics') || '[]');
    }
  } catch (error) {
    console.error('Service Worker: Error getting analytics data', error);
    return [];
  }
}

// Clear stored analytics data
async function clearStoredAnalyticsData() {
  try {
    if ('indexedDB' in self) {
      await clearAnalyticsFromIndexedDB();
    } else {
      localStorage.removeItem('pendingAnalytics');
    }
  } catch (error) {
    console.error('Service Worker: Error clearing analytics data', error);
  }
}

// IndexedDB operations for analytics
async function getAnalyticsFromIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('43AdimAnalytics', 1);
    
    request.onerror = () => reject(request.error);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['analytics'], 'readonly');
      const store = transaction.objectStore('analytics');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => resolve(getAllRequest.result);
      getAllRequest.onerror = () => reject(getAllRequest.error);
    };
    
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('analytics')) {
        db.createObjectStore('analytics', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

async function clearAnalyticsFromIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('43AdimAnalytics', 1);
    
    request.onerror = () => reject(request.error);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['analytics'], 'readwrite');
      const store = transaction.objectStore('analytics');
      const clearRequest = store.clear();
      
      clearRequest.onsuccess = () => resolve();
      clearRequest.onerror = () => reject(clearRequest.error);
    };
  });
}

// Push notification support (for future use)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/assets/images/common/icon-192.png',
      badge: '/assets/images/common/badge-72.png',
      data: data.url
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.notification.data) {
    event.waitUntil(
      clients.openWindow(event.notification.data)
    );
  }
});

// Performance monitoring
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // Store performance metrics for analysis
    console.log('Service Worker: Received performance metrics', event.data.metrics);
  }
});

console.log('Service Worker: Loaded successfully');