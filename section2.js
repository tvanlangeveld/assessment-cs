// 1) Sum Zero
// runtime: O(n)
// space: O(n)


const sumZero = (arr) => {
  let value = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i] + arr[j] === 0) {
        value = true;
      } 
    }
  }
} return value
  }


  console.log(sumZero([]))
  console.log(sumZero([1]))
  console.log(sumZero([1,2,3]))
  console.log(sumZero([1, 2, 3, -2]))



// 2) Unique Characters
// runtime:O(n^2)
// space:O(n)


console.log('========================================')

function hasUniqueCharacters(str) {

  const sortedWord = str.split('').sort()


  for (let i = 0; i < sortedWord.length - 1; i++) {
    if (sortedWord[i] === sortedWord[i + 1]) {
      return false
    }
  }

  return true 
}


console.log(hasUniqueCharacters("monday"))
console.log(hasUniqueCharacters("moonday"))


// 3) pangram sentence
// runtime:O(n)
// space:O(n)


console.log('===================================')

const isPangram = (str) => {
  let english = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let charactersArr = str.split('')
  let newArr = []
  
  for(let i = 0; i < charactersArr.length; i++){
  if(charactersArr.includes(english[i])){
    newArr.push(english[i])
  } 
  
  } 
  if(newArr.length === english.length){
    return true
  } else{
    return false
  }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))




//  4) find the longest word
// runtime:O(n)
// space:O(n)

console.log('==============================')

const findTheLongestWord = (arr) => { 
  let longestNum = 0;
  for(let i = 0; i < arr.length; i++){
    if(longestNum  < arr[i].length){
      longestNum = arr[i].length
    }

}
return longestNum
}


console.log(findTheLongestWord(["hi", "hello","Tannervanlangeveld", "devmountain", 'hiiiii', 'coding']))