/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  let isSwapped;
  for (let i = arr.length; i > 0; i++) {
    isSwapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (isSwapped === false) {
      break;
    }
  }
}
