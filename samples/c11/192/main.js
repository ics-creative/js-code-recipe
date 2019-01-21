const img = document.querySelector('#myImage');
img.onload = () => {
  // 画像の読み込み完了後の処理
  img.classList.remove('loading');
};
img.src = 'images/photo.jpg';
img.classList.add('loading');
