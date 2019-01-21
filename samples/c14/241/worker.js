onmessage = (e) => {
  console.log('[ワーカー] メインスクリプトからメッセージを受信');

  // 足し算を実行
  const result = e.data[0] + e.data[1];

  console.log('[ワーカー] メインスクリプトにメッセージを送信');
  postMessage(result);
};
