workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js)'),
  workbox.strategies.staleWhileRevalidate()
)

self.addEventListener('install', event => {
  const asyncInstall = new Promise(resolve => {
    console.log("Waiting to resolve...")
    setTimeout(resolve, 2500)
  })
  event.waitUntil(asyncInstall)
})
self.addEventListener('activate', event => {
  console.log('activate')
})

