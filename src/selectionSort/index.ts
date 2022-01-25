import { findSmallest } from '../findSmallest'

export const selectionSort = (arr: number[]) => {
  const newArr: number[] = []

  while (arr.length !== 0) {
    const smallest = findSmallest(arr)
    newArr.push(arr[smallest])
    arr.splice(smallest, 1)
  }

  return newArr
}
