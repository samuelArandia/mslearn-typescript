// Funciones con nombre 

function addNumbers(a: number, b: number): number {
    return a + b;
}

// Funciones anónimas

let addNumbers2 = function (a: number, b: number): number {
    return a + b;
}

let sum = function( input: number[] ):number { 
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        total += input[i];
    }
    return total;
}
console.log( sum( [1,2,3,4,5] ) );

// Funciones flecha

let addNumbers3 = (a: number, b: number): number => a + b;

function displayAlert(message: string): void {
  alert('The message is ' + message);
}

displayAlert('1200');

function sum2(input: number[]): number {
  let total =  0;
  for(let count = 0; count < input.length; count++) {
      if(isNaN(input[count])){
          continue;
      }
      total += Number(input[count]);
      console.log(total);
  }

  return total;
}

sum2([1, 2 , 3])

function addNumbers4 (x: number, y?: number): number {
  if (y === undefined) {
      return x;
  } else {
      return x + y;
  }
}

addNumbers4(1, 2); // Returns 3
addNumbers4(1);    // Returns 1


function addAllNumbers(firstNumber: number, ...restOfNumbers: number[]): number {
  let total: number =  firstNumber;
  console.log(firstNumber);
  console.log(restOfNumbers);
  for(let counter = 0; counter < restOfNumbers.length; counter++) {
     if(isNaN(restOfNumbers[counter])){
        continue;
     }
     total += Number(restOfNumbers[counter]);
  }
  return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // 


interface Message {
  text: string;
  sender: string;
}

function displayMessage(message: Message) {
  const {sender, text} = message;
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});


let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

addThreeNumbers(10, 20, 30)

addThreeNumbers(10, 20);

let subtractThreeNumbers1 = (x: number, y: number, z: number): number => x - y - z;

let subtractThreeNumbers = (x: number, y: number, z = 100): number => {
  console.log(x - y - z);
  return x - y - z;
}

// subtractThreeNumbers1(10, 20);       // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15);  


type calculator = (x: number, y: number) => number;
interface Calculator {
  (x: number, y: number): number;
}

let addNumber6: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;

// console.log(addNumber6(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
  if (operation === 'add') {
      return addNumber6;
  } else {
      return subtractNumbers;
  }
}

console.log(doCalculation('add')(1, 2))