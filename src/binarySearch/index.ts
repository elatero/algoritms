export const binarySearch = (arr: number[], searchItem: number) => {
  const sortedArray = arr.sort((a, b) => a - b)
  let start = 0
  let end = sortedArray.length - 1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const guess = sortedArray[middle]

    if (guess === searchItem) {
      return middle
    } else if (guess < searchItem) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

  return null
}
