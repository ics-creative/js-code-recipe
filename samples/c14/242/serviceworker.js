self.addEventListener('fetch', (event) => {
  console.log('通信が発生', event.request);
});
