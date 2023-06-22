self.addEventListener('push', function(event) {
  var notificationData = event.data.json();
  var title = notificationData.title;
  var options = {
    body: notificationData.body
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://gweb.airratstrip.tk/testmsg/testaccount1')  // 要打開的網頁URL
  );
});
