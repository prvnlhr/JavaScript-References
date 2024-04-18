const promise = new Promise((resolve, reject) => {
  let data = {
    name: "John Doe",
    Age: "42",
    Address: "Bay Area, San Francisco, U.S",
  };
  setTimeout(() => {
    console.log("After 7 secs");
    resolve({
      message: "This promise is resolved",
      data,
    });

    // reject("Error 404");
  }, 7000);
});

// |> Promise has three methods available,  .then(), .catch(), .finally()

console.log(promise);

setTimeout(() => {
  promise
    .then((resolvedVal) => {
      console.log("resolved after 6secs =", resolvedVal.data);
    })
    .catch((error) => {
      console.log("error after 6secs =", error);
    })
    .finally(() => {
      console.log("finally");
    });
}, 6000);

// |> 1. syntax : promise.then(onResolveFunc, onRejectFunc)
promise.then(
  (resolvedVal) => {
    console.log("resolved1 =", resolvedVal.data);
  },
  (error) => {
    console.log("error1 =", error);
  }
);

//|> 2. OR, Better way by chaining .then().catch()
promise
  .then((resolvedVal) => {
    console.log("resolved2 =", resolvedVal.data);
  })
  .catch((error) => {
    console.log("error2 =", error);
  });
