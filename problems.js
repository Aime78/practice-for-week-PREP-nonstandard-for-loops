function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  let array = [];
  for (let i = 1; i < arr.length; i += 2) {
    array.push(arr[i]);
  }
  return array;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  let array = [];
  for (let i = 1; i < arr.length; i += 2) {
    array.push(arr[i]);
  }
  return array.reverse();
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  let array = [];
  for (let i = 2 ** 0; i < arr.length; i = 2 ** i) {
    array.push(arr[i]);
  }
  return array;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  const array = [];
  let power = 0;
  for (let i = 0; i < arr.length; i++) {
    power = n ** i;
    if (power < arr.length) {
      array.push(arr[power]);
    }
  }
  return array;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  let array = [];
  for (let i = 0; i < arr.length / 2; i++) {
    array.push(arr[i]);
  }
  return array;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  let array = [];
  for (let i = arr.length / 2; i > 0; i--) {
    if (arr.length % 2 == 1 && i === arr.length / 2) continue;

    array.push(arr[i]);
  }
  return array;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
