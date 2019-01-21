loadAndPlay();

let source;

// 再生させたいとき
async function loadAndPlay() {
  const context = new AudioContext();

  // サウンドファイルを読み込む
  const data = await fetch('assets/music.mp3');
  // ArrayBuffer として扱う
  const buffer = await data.arrayBuffer();
  // オーディオデータとして変換する
  const decodedBuffer = await context.decodeAudioData(buffer);

  // ソースを作成
  source = context.createBufferSource();
  // ソースにオーディオデータを割り当てる
  source.buffer = decodedBuffer;
  // スピーカーをつなげる
  source.connect(context.destination);
  // 再生を開始する
  source.start(0);
}

// 停止させたいとき
function stop() {
  // 再生を停止する
  source.stop();
}
