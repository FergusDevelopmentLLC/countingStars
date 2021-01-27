const removeDuplicatesNestedWorst = (array) => {
  
  console.log('removeDuplicatesNestedWorst executing')

  let returnArray = []
  
  for (let i = 0; i < array.length; i++){
    const itemToCheck = array[i]
    let duplicateFound = false

    for (let j = 0; j < array.length; j++){
      if(i === j) {
        continue
      }
      else {
        if(itemToCheck === returnArray[j]) {
          duplicateFound = true
        }
      }
    }

    if(!duplicateFound) {
      returnArray.push(itemToCheck)
    }
  }
  
  return returnArray
}


const removeDuplicatesNestedForLoop = (array) => {
  
  console.log('removeDuplicatesNestedForLoop executing')

  let returnArray = []
  
  for (let i = 0; i < array.length; i++){
    const itemToCheck = array[i]
    let duplicateFound = false
    
    for (let j = 0; j < returnArray.length; j++){
      if(itemToCheck === returnArray[j]) {
        duplicateFound = true
      }
    }

    if(!duplicateFound) {
      returnArray.push(itemToCheck)
    }
  }
  
  return returnArray
}

const removeDuplicatesNestedWithIncludes = (array) => {
  
  console.log('removeDuplicatesNestedWithIncludes executing')
  
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
  // console.log("*")
  return `PSRJ${random1}-${random2}`
}

//const iterationCounts = [1, 10, 100, 250, 500, 750, 1000, 2000, 3000, 5000, 8000, 100000, 500000, 1000000]
//const iterationCounts = [1, 10, 100, 250, 500, 750, 1000, 2000, 3000, 5000, 8000, 100000, 500000]
const iterationCounts = [1000000]
const iterationTimes = []

let functionToTest = removeDuplicatesNestedWorst
//let functionToTest = removeDuplicatesNestedForLoop
//let functionToTest = removeDuplicatesNestedWithIncludes
//let functionToTest = removeDuplicatesFast

iterationCounts.forEach((count) => {

  const stars = []

  for (let i = 0; i < count; i++) {
    let star = starNameGenerator()
    stars.push(star)
  }

  console.log('-----------')
  console.log('start!')
  console.log('stars.length', stars.length)
  const start = Date.now()
  deDupped = functionToTest(stars)
  console.log('deduppedResultLength', deDupped.length)
  const end = Date.now()
  const elapsedTime = end - start
  iterationTimes.push(elapsedTime)
  console.log('elapsed time (ms):', elapsedTime)
  console.log('end!')
  
})

console.log('iterationTimes', iterationTimes)

//removeDuplicatesNestedWorst =>        [1, 0, 1, 8, 8, 10, 18, 68, 148, 399, 965, 97503, 2169161, ]
//removeDuplicatesNestedForLoop =>      [0, 1, 1, 6, 6, 6, 10, 40, 88, 228, 504, 16079, 86552, 177686] 
//removeDuplicatesNestedWithIncludes => [0, 0, 0, 0, 3, 6, 9, 34, 68, 150, 320, 6740, 34915, 69962]
//removeDuplicatesFast =>               [0, 0, 1, 1, 2, 2, 2, 3, 6, 13, 11, 54, 259, 451]

// https://www.space.com/57-stars-formation-classification-and-constellations.html
// Since there are so many stars in the universe, the IAU uses a different system for newfound stars. 
// Most consist of an abbreviation that stands for either the type of star or a catalog that lists 
// information about the star, followed by a group of symbols. For instance, PSR J1302-6350 is a pulsar, 
// thus the PSR. The J reveals that a coordinate system known as J2000 is being used, while the 1302 and 
// 6350 are coordinates similar to the latitude and longitude codes used on Earth.
//https://observablehq.com/d/5047e2d77faa54dd