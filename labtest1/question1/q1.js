const mixedArray =["PIZZA", 10, true, 25, false, "Wings","Chicken"]

const lowerCaseWords = (arr) =>
  new Promise((res, rej) => {
    if (!arr || arr.length === 0 || !Array.isArray(arr)) rej("Invalid input array");
    res(arr.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
  });

lowerCaseWords(mixedArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));