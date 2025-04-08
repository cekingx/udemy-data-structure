export const binarySearch = (toFind: number, numbers: number[]): number | Error => {
  let low = 0;
  let high = numbers.length - 1;
  let step = 0;

  while(low <= high) {
    step += 1;
    const mid = Math.floor((low + high) / 2);

    if (toFind == numbers[mid]) {
      console.log('')
      return toFind;
    }

    if (toFind < numbers[mid]) {
      high = mid - 1;
      continue;
    }

    if (toFind > numbers[mid]) {
      low = mid + 1;
      continue;
    }
  }

  return new Error('Not Found')
}