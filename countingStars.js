const makeStars = (count) => {
  const stars = []
  for (let i = 0; i < count; i++) {
    let star = starNameGenerator()
    stars.push(star)
  }
  return stars
}

const removeDuplicatesNested = (array) => {
  
  console.log('removeDuplicatesNestedForward executing')

  let returnArray = []
  
  for (let i = 0; i < array.length; i++){

    const itemToCheck = array[i]
    
    let duplicateFound = false

    for (let j = 0; j < array.length; j++){
      if(i !== j && itemToCheck === returnArray[j]) {
        duplicateFound = true
      }
    }

    if(!duplicateFound) {
      returnArray.push(itemToCheck)
    }
  }
  
  return returnArray
}


const removeDuplicatesNestedForwardBreak = (array) => {
  
  console.log('removeDuplicatesNestedForwardBreak executing')

  let returnArray = []
  
  for (let i = 0; i < array.length; i++){

    const itemToCheck = array[i]
    
    let duplicateFound = false

    for (let j = 0; j < array.length; j++){
      if(i !== j && itemToCheck === returnArray[j]) {
        duplicateFound = true
        break
      }
    }

    if(!duplicateFound) {
      returnArray.push(itemToCheck)
    }
  }
  
  return returnArray
}

const removeDuplicatesNestedBackwardBreak = (array) => {
  
  console.log('removeDuplicatesNestedBackwardBreak executing')

  let returnArray = []
  
  for (let i = 0; i < array.length; i++){
    const itemToCheck = array[i]
    let duplicateFound = false
    
    for (let j = 0; j < returnArray.length; j++){
      if(itemToCheck === returnArray[j]) {
        duplicateFound = true
        break
      }
    }

    if(!duplicateFound) {
      returnArray.push(itemToCheck)
    }
  }
  
  return returnArray
}

const removeDuplicatesNestedBackwardIncludes = (array) => {
  
  console.log('removeDuplicatesNestedBackwardIncludes executing')
  
  let returnArray = []
  
  for (let i = 0; i < array.length; i++){

    const itemToCheck = array[i]
    if(!returnArray.includes(itemToCheck)) {
      returnArray.push(itemToCheck)
    }
      
  }

  return returnArray
}

const removeDuplicatesFast = (array) => {
  
  console.log('removeDuplicatesFast executing')

  let arrayMap = {}

  for (let i = 0; i < array.length; i++){
    if (arrayMap[array[i]]){
      arrayMap[array[i]].push(i)
    } else {
      arrayMap[array[i]] = [i]
    }
  }
  
  // console.log('arrayMap', arrayMap)
  // console.log('arrayMap', Object.keys(arrayMap))
  // console.log(Object.keys(arrayMap).map(key => parseInt(key)))

  return Object.keys(arrayMap)
}

const starNameGenerator = () => {
  const random1 = Math.floor(10 + Math.random() * 90)
  const random2 = Math.floor(10 + Math.random() * 90)
  return `PSRJ${random1}-${random2}`
}

const returnLast = (array) => {
  console.log('returnLast executing')
  return array[array.length - 1]
}

const removeDashesFrom = (array) => {
  console.log('removeDashesFrom executing')
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].replace('-', '')
  }
  return array
}

//const iterationCounts = [1, 10, 100, 250, 500, 750, 1000, 2000, 3000, 5000, 8000, 10000, 25000, 50000, 100000, 500000, 1000000]
const iterationCounts = [1, 10, 100, 250, 500, 750, 1000, 2000, 3000, 5000, 8000, 10000, 25000, 50000, 100000, 500000, 1000000]
const iterationTimes = []

//let functionToTest = returnLast
//let functionToTest = removeDashesFrom
//let functionToTest = removeDuplicatesNestedForwardNoBreak
let functionToTest = removeDuplicatesFast

iterationCounts.forEach((count) => {

  const stars = makeStars(count)
  //const stars = ['PSRJ73–98', 'PSRJ33–50', 'PSRJ64–81', 'PSRJ33–50', 'PSRJ21–13']

  console.log('-----------')
  console.log('start!')
  console.log('stars', stars)
  console.log('stars.length', stars.length)
  const start = Date.now()
  const result = functionToTest(stars)
  console.log('result', result)
  const end = Date.now()
  const elapsedTime = end - start
  iterationTimes.push(elapsedTime)
  console.log('end!')
  
  console.log('elapsed time (ms):', elapsedTime)
})
console.log('-----------')
console.log('iterationTimes', iterationTimes)

// const stars = [
//   'PSRJ73-98', 'PSRJ33-50', 'PSRJ64-81', 'PSRJ51-41', 'PSRJ21-13',
//   'PSRJ10-10', 'PSRJ52-88', 'PSRJ56-72', 'PSRJ84-59', 'PSRJ52-90',
//   'PSRJ53-29', 'PSRJ38-54', 'PSRJ74-73', 'PSRJ47-52', 'PSRJ36-97',
//   'PSRJ13-86', 'PSRJ79-99', 'PSRJ11-43', 'PSRJ46-35', 'PSRJ13-86',
//   'PSRJ21-46', 'PSRJ31-63', 'PSRJ51-14', 'PSRJ62-71', 'PSRJ50-84',
//   'PSRJ36-46', 'PSRJ97-82', 'PSRJ25-39', 'PSRJ59-88', 'PSRJ19-31',
//   'PSRJ53-28', 'PSRJ67-71', 'PSRJ51-93', 'PSRJ15-22', 'PSRJ16-54',
//   'PSRJ24-79', 'PSRJ69-39', 'PSRJ40-18', 'PSRJ70-40', 'PSRJ69-11',
//   'PSRJ51-27', 'PSRJ13-86', 'PSRJ27-77', 'PSRJ63-38', 'PSRJ35-84',
//   'PSRJ21-88', 'PSRJ72-36', 'PSRJ48-97', 'PSRJ94-37', 'PSRJ61-57',
//   'PSRJ40-42', 'PSRJ27-85', 'PSRJ58-51', 'PSRJ69-85', 'PSRJ27-94',
//   'PSRJ22-66', 'PSRJ64-91', 'PSRJ62-56', 'PSRJ12-19', 'PSRJ97-70',
//   'PSRJ52-30', 'PSRJ76-24', 'PSRJ73-91', 'PSRJ43-65', 'PSRJ65-15',
//   'PSRJ83-95', 'PSRJ31-71', 'PSRJ75-58', 'PSRJ64-18', 'PSRJ23-31',
//   'PSRJ68-56', 'PSRJ95-32', 'PSRJ13-86', 'PSRJ84-37', 'PSRJ97-68',
//   'PSRJ16-41', 'PSRJ71-76', 'PSRJ38-35', 'PSRJ29-40', 'PSRJ58-42',
//   'PSRJ76-24', 'PSRJ13-41', 'PSRJ79-84', 'PSRJ91-37', 'PSRJ80-63',
//   'PSRJ25-27', 'PSRJ56-12', 'PSRJ60-26', 'PSRJ32-70', 'PSRJ98-46',
//   'PSRJ61-70', 'PSRJ73-63', 'PSRJ18-73', 'PSRJ13-86', 'PSRJ21-72',
//   'PSRJ35-32', 'PSRJ23-79', 'PSRJ16-60', 'PSRJ15-54', 'PSRJ75-12'
// ]


// let removeDuplicatesNestedForwardNoBreak   = [0, 0, 1, 5, 8, 10, 17, 69, 148, 395, 965, 97644, 2169161, 3303771, 9240961]
// let removeDuplicatesNestedForwardBreak     = [0, 0, 1, 6, 7, 9, 16, 61, 128, 318, 685, 16045, 88274, 180540]
// let removeDuplicatesNestedBackwardBreak    = [0, 1, 1, 5, 5, 6, 11, 37, 77, 177, 386, 7957, 41281, 84406]
// let removeDuplicatesNestedBackwardIncludes = [0, 0, 0, 1, 2, 5, 8, 30, 66, 152, 330, 6679, 34915, 69962]
// let removeDuplicatesFast                   = [0, 0, 1, 0, 0, 1, 1, 3, 5, 13, 11, 65, 259, 451]


//[0, 0, 1, 6, 9, 10, 19, 69, 149, 396, 968, 1472, 7790, 27128, 100371]
//[1, 0, 4, 6, 8, 10, 17, 64, 136, 320, 718, 1004, 3518, 8018, 17181]
//[0, 0, 1, 7, 7, 7, 10, 38, 82, 180, 383, 529, 1769, 3980, 8336]
//[0, 0, 0, 1, 2, 5, 9, 31, 69, 150, 328, 446, 1463, 3227, 6953]
//[0, 0, 1, 0, 1, 2, 2,  4, 5, 14, 12, 12, 22, 43, 51]