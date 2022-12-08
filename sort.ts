const SHOW_INPUT_AND_OUTPUT = 0

const fn = () => 0
const log = SHOW_INPUT_AND_OUTPUT ? console.log : fn
function generateRandomNumbers(total: number) {
  const arr = []
  for (let i = 0; i < total; i++) {
    arr.push(Math.round(Math.random() * 99999))
  }
  return arr
}

const randomInput = generateRandomNumbers(10000)

function insertSort(input: number[]) {
  const result: number[] = []
  for (const num of input) {
    if (result.length === 0) {
      result.push(num)
      continue
    }
    for (let i = 0; i < result.length; i++) {
      if (num <= result[i]) {
        result.splice(i, 0, num)
        break
      }
      if (i === result.length - 1) {
        result.push(num)
        break
      }
    }
  }
  return result
}

function insertSort2(input: number[]) {
  for (let i = 1; i < input.length; i++) {
    let j = i - 1
    const key = input[i]
    while (j > -1 && input[j] > key) {
      input[j + 1] = input[j]
      j--
    }
    input[j + 1] = key
  }
  return input
}

/**
  * sub resursively method
  * @param arrL sorted left array
  * @param arrR sorted right array
  */
function merge(arrL: number[], arrR: number[]) {
  const arr: number[] = []
  let i = 0
  let j = 0
  while (i < arrL.length || j < arrR.length) {
    if ((i < arrL.length && arrL[i] <= arrR[j]) || arrR[j] == undefined) {
      arr.push(arrL[i++])
    } else {
      arr.push(arrR[j++])
    }
  }
  return arr
}

function mergeSort(input: number[]): number[] {
  if (input.length <= 1) {
    return input
  }
  const divider = Math.floor(input.length / 2)
  const arrL = input.slice(0, divider)
  const arrR = input.slice(divider)
  return merge(mergeSort(arrL), mergeSort(arrR))
}

console.time('insertSort')
log(`input:`, randomInput)
log(`output:`, insertSort(randomInput))
console.timeEnd('insertSort')

console.time('insertSort2')
log(`input:`, randomInput)
log(`output:`, insertSort2(randomInput))
console.timeEnd('insertSort2')

console.time('jsSort')
log(`input:`, randomInput)
log(`output:`, randomInput.sort())
console.timeEnd('jsSort')

console.time('mergeSort')
log(`input:`, randomInput)
log(`output:`, mergeSort(randomInput))
console.timeEnd('mergeSort')