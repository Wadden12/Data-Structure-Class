//question 1

let isArray = (input) => {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};
console.log("");
console.log("Question 1");
console.log(isArray([1, 2, 3, 4, 5]));
console.log("");

//quesiton 2

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let cutArray = (n) => {
  const newArray = numbers.slice(0, n);
  if (n > numbers.length)
    return "Number is great the array length enter a new number";
  return newArray;
};
console.log("Question 2");
console.log(cutArray(4));
console.log("");

const lastArray = (n) => {
  const newArray = numbers.slice(-n);
  return newArray;
};
console.log("Question 3");
console.log(lastArray(3));
console.log("");

//question 4

let stringList = numbers.join();
console.log("Question 4");
console.log(stringList);
console.log("");

// question 5

const evenNumbers = (numArray) => {
  let stringArray = numArray.toString().split("");
  let intArray = stringArray.map((n) => parseInt(n));

  let dashed = [];
  for (let i = 0; i < intArray.length; i++) {
    dashed.push(intArray[i]);
    if (
      intArray[i] % 2 === 0 && intArray[i + 1] % 2 === 0 ? dashed.push("-") : 0
    );
  }
  console.log(dashed.join(""));
  return dashed;
};
console.log("Question 5");
evenNumbers(1255423524);
console.log("");

let sortArray = (list) => {
  let sortedList = list.sort();
  return sortedList;
};
console.log("Question 6");
console.log(sortArray([1, 5, 4, 3, 2, 4, 4, 4, 3, 1, 2]));
console.log("");

let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2.includes(arr1[i]) ? 0 : arr2.push(arr1[i]);
}

let countOccurrences = (array, searchElement) => {
  return array.reduce((accumulator, current) => {
    const ocurrence = current === searchElement ? 1 : 0;
    return accumulator + ocurrence;
  }, 0);
};
console.log("Question 7");
for (let i = 0; i < arr2.length; i++) {
  console.log(`${arr2[i]} ( ${countOccurrences(arr1, arr2[i])} times)`);
}

let str = "The Quick Brown Fox";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const result = [];

for (let x = 0; x < str.length; x++) {
  if (upper.includes(str[x])) {
    result.push(str[x].toLowerCase());
  } else if (lower.includes(str[x])) {
    result.push(str[x].toUpperCase());
  } else {
    result.push(str[x]);
  }
}
console.log("");
console.log(`Question 8 ${result.join("")}`);

const array = [1, 2, 3, 4, 5, 6];
let sum = 0;
let product = 1;
let i;
for (i = 0; i < array.length; i += 1) {
  sum += array[i];
  product *= array[i];
}
console.log("");
console.log(` Question 9: Sum : ${sum} Product :  ${product}`);

let Arrays_sum = (array1, array2) => {
  const result = [];
  let counter = 0;
  let x = 0;

  if (array1.length === 0) return "array1 is empty";
  if (array2.length === 0) return "array2 is empty";

  while (counter < array1.length && counter < array2.length) {
    result.push(array1[counter] + array2[counter]);
    counter++;
  }

  if (counter === array1.length) {
    for (x = counter; x < array2.length; x++) {
      result.push(array2[x]);
    }
  } else {
    for (x = counter; x < array1.length; x++) {
      result.push(array1[x]);
    }
  }
  return result;
};

console.log("");
console.log("Quesiton 10");
console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

let computreFactorial = (input) => {
  if (input < 1) {
    console.log("Numbers not allowed");
    return -1;
  }
  if (input === 0 || input === 1) {
    return 1;
  }
  return input * computreFactorial(input - 1);
};

console.log("");
console.log("Recrusion example");
console.log(computreFactorial(5));
console.log("");

let fibonacci = (input) => {
  if (input < 0) {
    console.log("Number is not allowed");
    return -1;
  }
  if (input === 0 || input === 1) {
    return 1;
  }
  return fibonacci(input - 1) + fibonacci(input - 2);
};
console.log("");
console.log("Fibonacci");
console.log(fibonacci(2));
// function acts like the Math.floor method removing deciaml points
let round = (input) => {
  return (input / 10) % 1;
};

let sumOfDigits = (input) => {
  if (input < 0) {
    console.log("Number is not allowed");
    return -1;
  }
  if (input === 0 || input === 1) {
    return 1;
  }
  // divides the input by 10 and round removes the decmail places and then addeds the remainer
  return sumOfDigits(input / 10 - round(input)) + (input % 10);
};

console.log("");
console.log(`Sum of Digits ${sumOfDigits(1255)}`);

console.log("");
console.log(`Power Question`);

// Power to Question

let power = (num, exp) => {
  if (exp === 0) {
    return 1;
  } else {
    // the exponent acts like a counter to how many times the number needs to be multipled together until it reaches 0 to end
    return num * power(num, exp - 1);
  }
};
console.log("");

let number = 5;
let exponent = 6;
console.log(
  `The number is ${number} to the power of ${exponent} and the  answer is ${power(
    number,
    exponent
  )}`
);
console.log("");

//binary code question

let decimalToBinary = (decimal) => {
  // first sets up the loop as long the decimal is >=1
  if (decimal >= 1) {
    // second check to is to see if decimal can be devided by 2
    if (decimal % 2) {
      // the decimal - 1 is designed bring the value down to 0 when devided by 2 so that 1 can returned
      return decimalToBinary((decimal - 1) / 2) + 1;
    } else {
      return decimalToBinary(decimal / 2) + 0;
    }
  } else {
    // this is the end
    return "";
  }
};

let Decimal = 1000;
console.log("");
console.log("Decimal to Binary Coverter");
console.log(
  `Convert the decimal ${Decimal} into binary:  ${decimalToBinary(Decimal)}`
);
console.log("");

let Binary = decimalToBinary(Decimal);

// let binaryToDecimal = (binary) => {
//   let stringArray = binary.toString().split("");
//   let intArray = stringArray.map((n) => parseInt(n));
//   let result = 0;
//   intArray.map((n) => {
//     if (n === 1) {
//       result = +(result * 2) + 1;
//     } else {
//       result = +(result * 2);
//     }
//   });
//   return result;
// };
// console.log("");
// console.log(
//   `Binary Number: ${Binary} converted to a decimal number ${binaryToDecimal(
//     Binary
//   )}`
// );
// console.log("");

let binaryToDecimal = (binary, i) => {
  let n = binary.length;
  if (i === n - 1) return binary[i] - "0";

  return ((binary[i] - "0") << (n - i - 1)) + binaryToDecimal(binary, i + 1);
};

let index = 0;

console.log("");
console.log(
  `Binary Number: ${Binary} converted to a decimal number ${binaryToDecimal(
    Binary,
    index
  )}`
);
console.log("");
