self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('push', e => {
    self.registration.showNotification('BreathFree', {body: 'הגיע הזמן לעשן!', vibrate: [200, 100, 200]});
});
