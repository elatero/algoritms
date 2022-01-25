export const findSmallest = (arr: number[]) => {
  let smallest = arr[0]
  let smallestIndex = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}
