export const binarySearch = (arr: number[], searchItem: number) => {
  const sorted = arr.sort((a, b) => a - b)
  let low = 0
  let high = sorted.length - 1

  while (low <= high) {
    const mid = (low + high) / 2
    const guess = sorted[mid]

    if (guess === searchItem) {
      return mid
    } else if (guess > searchItem) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return undefined
}
