class LikeCounter {
  constructor() {
    // ボタンをクリックした数
    this.clickedCount = 0;

    const button = document.querySelector('.button');
    const clickedCountText = document.querySelector('.clickedCountText');

    button.addEventListener('click', () => {
      this.clickedCount += 1;
      clickedCountText.textContent = this.clickedCount;
    });
  }
}

new LikeCounter();
