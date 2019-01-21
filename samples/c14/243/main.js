const btn = document.querySelector('button');
btn.addEventListener('click', notify);

// 通知を試みる
function notify() {
  switch (Notification.permission) {
    case 'default': // デフォルト状態だったら
      // 通知の許可を求めます
      Notification.requestPermission();
      break;
    case 'granted': // 許可されていれば
      // 許可されている場合はNotificationで通知
      new Notification('こんにちは');
      break;
    case 'denied': // 拒否されていれば
      alert('通知が拒否されています');
      break;
  }
}
