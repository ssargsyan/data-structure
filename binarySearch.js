export default binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === array[middleIndex]) {
      return console.log("Target was found at index " + middleIndex);
    }
    if (target > array[middleIndex]) {
      console.log("Searching the right side of Array");
      startIndex = middleIndex + 1;
    }
    if (target < array[middleIndex]) {
      console.log("Searching the left side of array");
      endIndex = middleIndex - 1;
    } else {
      console.log("Trying another iteration.");
    }
  }

  console.log("Expected value not found");
};
