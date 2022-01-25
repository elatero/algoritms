import { performance } from 'perf_hooks'
import { selectionSort } from './selectionSort'
const t1 = performance.now()

console.log(selectionSort([5, 3, 6, 2, 10]))

const t2 = performance.now()

console.log(t2 - t1)
