export const sleep = (time = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
