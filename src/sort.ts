export const bubbleSort = (numbers: number[]): number[] => {
  let array = numbers;
  for (let i = 0; i < array.length - 1; i++ ) {
    let swapped = false;
    for(let j = 0; j < array.length - i - 1; j++ ) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        swapped = true
      }
    }

    if(!swapped) {
      break;
    }
  }

  return array;
}