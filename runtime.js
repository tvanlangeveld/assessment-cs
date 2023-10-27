const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// // Results for the extraLargeArray
// insert 697.966708 ms
// append 2.930709 ms

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results

perf.start(); 
doublerAppend(tinyArray);
let resultsAppend1 = perf.stop();

perf.start(); 
doublerAppend(smallArray);
let resultsAppend2 = perf.stop();

perf.start(); 
doublerAppend(mediumArray);
let resultsAppend3 = perf.stop();

perf.start(); 
doublerAppend(largeArray);
let resultsAppend4 = perf.stop();

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

// tiny array
perf.start();
doublerInsert(tinyArray);
let resultsInsert1 = perf.stop();

// small array
perf.start();
doublerInsert(smallArray);
let resultsInsert2 = perf.stop();
// medium array
perf.start();
doublerInsert(mediumArray);
let resultsInsert3 = perf.stop();
// large array
perf.start();
doublerInsert(largeArray);
let resultsInsert4 = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

console.log('Results for the tiny array');
console.log("insert", resultsInsert1.preciseWords);
console.log("append", resultsAppend1.preciseWords);

console.log('Results for the small Array');
console.log("insert", resultsInsert2.preciseWords);
console.log("append", resultsAppend2.preciseWords);

console.log('Results for the medium array');
console.log("insert", resultsInsert3.preciseWords);
console.log("append", resultsAppend3.preciseWords);

console.log('Results for the large array');
console.log("insert", resultsInsert4.preciseWords);
console.log("append", resultsAppend4.preciseWords);


// Results for the tiny array
// insert 4.292 μs
// append 3.042 μs


// Results for the small Array
// insert 5.833 μs
// append 5.667 μs


// Results for the medium array
// insert 92.917 μs
// append 35.208 μs


// Results for the large array
// insert 5.427709 ms
// append 113.416 μs


// Results for the extraLargeArray
// insert 695.667125 ms
// append 5.466292 ms


// problem 4.
// With insert using unshift and append using push it explains the difference quite easily. The larger the array the longer it takes for the function to wrong using insert, as the array continues to grow in size the timing starts to get expotentially longer running the unshift() vs push(). I do notice on the smaller arrays that the timing is similar, so i do think unshift is still highly valueable when it comes to working with smaller pieces of inforamtion. As it would make your code easier to write and read in some rare cases. 

// problem 5.
// Makes perfect sense why .unshift() would cause this to run longer vs .push(). From my understanding of .unshift it will insert data to the 0 index of the array. Which will then require the computer to move the data stored @ index zero to be moved to index 1 and the data stored at index 1 to be moved to index 2 and so on. Cause there to be a reaction to the data at every index of the array. Vs using the .push() method which will add the data piece to the end of the array regradless of the length. With requires the computer to create a new index at the end of the array, which cause for alot faster response from the computer.