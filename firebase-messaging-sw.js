importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');


  const firebaseConfig = {
    apiKey: "AIzaSyCWO4MIQoyrPabnusZcseidsiHMp7QNs10",
    authDomain: "touch-e0404.firebaseapp.com",
    databaseURL: "https://touch-e0404-default-rtdb.firebaseio.com",
    projectId: "touch-e0404",
    storageBucket: "touch-e0404.appspot.com",
    messagingSenderId: "1063747858490",
    appId: "1:1063747858490:web:14f001f87fff4223664503",
    measurementId: "G-TZR0ZM1YYE"
    };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });