// const promise = Promise.resolve("This promise is resolved");
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

//|> NOTE : A function declared with the async keyword returns a promise.

async function example() {
  try {
    const res = await promise;
    console.log(res.data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}

example();

const exampleArrow = async () => {
  try {
    const res = await promise;
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
exampleArrow();

const exampleAssign = async function () {
  try {
    const res = await promise;
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

exampleAssign();

function outerfunc() {
  function inner() {
    console.log(this);
  }
  inner();
}

outerfunc();
