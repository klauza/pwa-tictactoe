workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js)'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'cache'
  })
)

self.addEventListener('install', event => {
  const asyncInstall = new Promise(resolve => {
    console.log("Waiting to resolve...")
    setTimeout(resolve, 2500)
  })
  event.waitUntil(asyncInstall)
})
self.addEventListener('activate', event => {
  console.log('service worker has been activated')
})

self.addEventListener('fetch', event => {
  console.log('fetch event start', event);
})
