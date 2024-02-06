/*
1. Problem : Write a function to get the lowest, highest and average value in the array (with and without sort function).
   Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

function getSorts(arr) {
  let lowest = arr[0];
  let highest = arr[0];
  let average = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]<lowest) lowest=arr[i];
    if (arr[i]>highest) highest=arr[i];
    average += arr[i];
  }
  return {lowest, highest, average: average/arr.length};
}

console.log(getSorts([12, 5, 23, 18, 4, 45, 32]));

/*
2. Problem : Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
   Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/ 

function getConcat(arr) {
  let concat='';
  for(i=0;i<arr.length;i++){
    arr.length-2 === i ? concat+=arr[i] + ', and ' :
    arr.length-1 === i ? concat+=arr[i] :
    concat+=arr[i] + ",";
  }    
  console.log(concat);
}

getConcat(["apple", "banana", "cherry", "date"]);

/*
3. Problem  : Write a function to split a string and convert it into an array of words
   Example  : “Hello World” → [“Hello”, “World”]
*/

function getSplitString(str) {
  let split=[];
  for(let i=0;i<str.length;i++){
    if(str[i]===' '){
      let splitString='';
      for(let k=0;k<i;k++){
        splitString+=str[k];
      }
      console.log(splitString);
      split.push(splitString);
      splitString='';
      
      for(let j=i+1;j<str.length;j++){
        splitString+=str[j];
      }
      split.push(splitString);
      console.log(split);
    }
  }
}

getSplitString('Hello World');

const split = str => str.split(' ');
console.log(split('Hello World'));


/* 
4. Problem : Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
   Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

const arr1=[1, 2, 3];
const arr2=[3, 2, 1];
function getSumArray(arr1, arr2) {
  let arrSum=[];
  for(i=0;i<arr1.length;i++){
    arrSum.push(arr1[i]+arr2[i]);
  }
  console.log(arrSum);
}

getSumArray(arr1,arr2);

/*
5. Problem : Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
   Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4] 
   Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/

function addElement(arr,newElement) {
  let isUnique=true;
 
  for(let i=0;i<arr.length;i++){
    if(newElement===arr[i]){
      isUnique=false; 
      break;
    } 
  }
  
  if(isUnique){
    arr.push(newElement)
  }
    console.log(arr);
}

addElement([1, 2, 3, 4], 7);
addElement([1, 2, 3, 4], 3);

/*
1.Problem : Based on the array below write a function that will return primitive data types only. let 
  Example : arr = [1, [], undefined, {}, "string", {}, []];
            a. The function will return [1, undefined, “string”]
*/

function getPrimitives(arr) {
  let primitive = [];

  for (let i=0;i<arr.length;i++) {
    if (typeof arr[i] !== 'object') {
      primitive.push(arr[i]);
    }
  }
  console.log(primitive);
}

getPrimitives([1, [], undefined, {}, "string", {}, []]);

/*
2. Problem  : Write a function from a given array of numbers and return the second smallest number
   Example  : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

function getSecondSmallest(numbers){
  let smallest;
  let secondSmallest;

  for (let i=0; i<numbers.length; i++) {
    if (smallest === undefined || numbers[i] < smallest) {
      secondSmallest = smallest; 
      smallest = numbers[i]; 
    } else if (numbers[i] !== smallest && (secondSmallest === undefined || numbers[i] < secondSmallest)) {
      secondSmallest = numbers[i]; 
    }
  }
  console.log(secondSmallest);
}

getSecondSmallest([5, 3, 1, 7, 2, 6]);

/*
3. Problem : Write a function from a given array of mixed data types and return the sum of all the number
   Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/

function sumOfNumbers(arr) {
  let sum=0;
  for(let i=0; i<arr.length;i++){
    if(typeof arr[i] === 'number') sum+=arr[i];
  }
  console.log(sum);
}

sumOfNumbers(["3", 1, "string", null, false, undefined, 2]);

/*
4. Problem  : Write a function from the below array of number that will return sum of duplicate values. let 
   Example  : arr = [10, 20, 40, 10, 50, 30, 10, 60, 10]; The function will return 40
*/

//logicnya kagak nyampe kak. Jawabannya cuma berlaku untuk array ini
function sumOfDuplicates(arr) {
  let sum=0;
  let j=0;
  for (let i=1; i<=arr.length; i++) {
    if (arr[j] === arr[i] && sum===0) {
      sum+=arr[j]
      sum+=arr[i];
    }else if (arr[j] === arr[i] && sum!==0){
      sum+=arr[i];
    }
  }
  console.log(sum);
}

sumOfDuplicates([10, 20, 40, 10, 50, 30, 10, 60, 10]);

/*
5. Problem  : Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
   Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
*/

function rockPaperScissors(player) {
  const rps = ["rock", "paper", "scissors"];
  const computer = rps[Math.floor(Math.random() * 3)];

  if (player === computer) return console.log(`You throw ${player}! Enemy throw ${computer}! Its a Draw!`) ;
  
  if (player === "rock") return computer === "scissors" ? console.log(`You throw ${player}! Enemy throw ${computer}! You Win!`)  : console.log(`You throw ${player}! Enemy throw ${computer}! You Lose!`);
  if (player === "paper") return computer === "rock"  ? console.log(`You throw ${player}! Enemy throw ${computer}! You Win!`) : console.log(`You throw ${player}! Enemy throw ${computer}! You Lose!`);
  if (player === "scissors") return computer === "paper" ? console.log(`You throw ${player}! Enemy throw ${computer}! You Win!`) : console.log(`You throw ${player}! Enemy throw ${computer}! You Lose!`);
}


rockPaperScissors('rock');
rockPaperScissors('paper');
rockPaperScissors('scissors');

