# countingStars
Counting Stars
Using Big O analysis to write better code

What is Big O?

At a basic level, one of a programmer's main focuses is write code that executes series of actions designed to produce some desired output. For example, the code might display information or compute an algorithm on an array of items. A key feature of computer programing is that it gives programmers to break down larger problems and data into smaller chunks. With every new block of code written, there are likely many ways to approach the steps that the code executes, given the an intention to produce a certain result. So, if there are many ways to solve a problem, how can we as developers objectively determine if some block of code is better than another? This is where Big O comes in. It allows us to objectively compare sets of code that produce the same result by comparing how effiently a particular block of code executes. Big O analysis allows programmers to identify and alleviate bottle necks and write more efficient code.

Big O is concerned with describing code efficency by looking at two factors: Time and Space. Time refers to the duration of time it takes for a particular code block to execute. Space refers to the amount of memory that is used when a block of code executes. For example, more variables instantiated or an array that grows within a block of code would contribute to increased space usage. In this post, we will mainly focus on time.

Because all computers are different, some are newer and faster than others or have huge  amounts of memory, Big O is not concerned with concrete units. It allows us to compare code across environments because it is really concerned with what happens when things scale, and how the block performs when hit with a large number of inputs. Big O analysis forces programmers to think about the worst case scenario and consider , "What happens when this function receives a million inputs? How about a a billion?". When considering code with respect to Big O, we are looking to optimize code for the worst. This way, we can insure that the code will perform under reasonable circumstances.


Outer space does play a role in this story, but we'll get to that in a bit.


image of astronaut













n as the length or the size of the
06:39
numbers array


const getLongestFrom = (strings) => {

  let longest = ''
  for(let i = 0;i < strings.length;i++) {
    if(strings[i].length > longest.length) {
      longest = strings[i]
    }
  }
  return longest

  // return strings.reduce((acc, string) => {
  //   if(string.length > acc.length) {
  //     acc = string
  //   }
  //   return acc
  // },'')
  
}

let strings = ['apple', 'strawberry', 'pear', 'banana']
console.log(getLongestFrom(strings))'

O(n), where n is the length of the array being passed in. The function with iterate though the loop for as many times of n. 

right big o is only concerned with how the performance of our algorithm changes with the size of the input. Focus on parts of the code that would change if the input size was really large. 

Given n inputs, this function will iterate n times.


const removeDuplicates = (array) => {
  
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



// https://www.space.com/57-stars-formation-classification-and-constellations.html
Since there are so many stars in the universe, the IAU uses a different system for newfound stars. 
Most consist of an abbreviation that stands for either the type of star or a catalog that lists 
information about the star, followed by a group of symbols. For instance, PSR J1302-6350 is a pulsar, 
thus the PSR. The J reveals that a coordinate system known as J2000 is being used, while the 1302 and 
6350 are coordinates similar to the latitude and longitude codes used on Earth.
https://observablehq.com/d/5047e2d77faa54dd

https://www.youtube.com/watch?v=HfIH3czXc-8