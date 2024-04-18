const myPromiseAll = function (taskArr) {
  let res = [];
  let promiseCompleted = 0;

  return new Promise((resolve, reject) => {
    taskArr.forEach((promise, index) => {
      promise
        .then((resolveVal) => {
          res[index] = resolveVal;
          promiseCompleted += 1;

          if (promiseCompleted == taskArr.length) {
            resolve(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

const taskList = [task(100), task(5000), task(3000)];

myPromiseAll(taskList)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
