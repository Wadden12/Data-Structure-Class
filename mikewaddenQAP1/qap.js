// Author Mike Wadden
// QAP 1
//Date May 18, 20222

//question 1

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
console.log("Quesiton 1: Sum of Array's");
console.log("");
console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

// Question 2:

console.log("");
console.log(`Question 2: Power To Function`);

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

// Question 3 Decimal to Binary
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
console.log("Question 3: Decimal to Binary Coverter");
console.log("");
console.log(
  `Convert the decimal ${Decimal} into binary:  ${decimalToBinary(Decimal)}`
);
console.log("");

//Question 4 Sum of Digits

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

let digit = 1255;
console.log("");
console.log("Question 4:");
console.log(` Sum of the Digit ${digit} is: ${sumOfDigits(digit)}`);
console.log("");
