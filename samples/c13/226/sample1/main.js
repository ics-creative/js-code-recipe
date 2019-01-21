Promise.resolve()
  .then(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log('1つめのPromise', new Date().toLocaleTimeString());
          resolve();
        }, 1000);
      })
  )
  .then(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log('2つめのPromise', new Date().toLocaleTimeString());
          resolve();
        }, 1000);
      })
  );
