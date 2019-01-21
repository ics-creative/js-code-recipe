const rectAngle = document.querySelector('.rectangle');

// メディアクエリ情報
const mediaQueryList = matchMedia('(min-width: 600px)');

// メディアクエリが変更されたタイミングで処理
mediaQueryList.addListener(onMediaQueryChange);

/**
 * メディアクエリが変更された際に実行される関数
 */
function onMediaQueryChange(mediaQueryList) {
  if (mediaQueryList.matches === true) {
    rectAngle.classList.add('big-size');
    console.log('ウインドウサイズが600pxを超えました');
  } else {
    rectAngle.classList.remove('big-size');
    console.log('ウインドウサイズが600pxを下回りました');
  }
}

// ページ表示時に一度onMediaQueryChange()を実行しておく
onMediaQueryChange(mediaQueryList);
