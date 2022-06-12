// 1. push(), 2. pop(), 3.peek(), 4. isempty(),

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // adding an element to the stack

  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to postion ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  //removing an element from the stack

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} deleted from stack`);
    return deleteItem;
  }

  //check the element at the top of the stack

  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
  }
  isEmpty() {
    console.log(this.count === 0 ? `stack is empty` : `stack is not`);
    return this.count == 0;
  }
}

let stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
stack.push(600);
stack.push(700);

stack.pop();
stack.toString();

// function checkPalindrome(inputWord) {
//   const checkStack = new Stack();
//   for (let i = 0; i < inputWord.length; i++) {
//     checkStack.push(inputWord[i]);
//   }
//   for (let j = 0; j < inputWord.length; j++) {
//     if (checkStack.peek() != inputWord[j]) {
//       return false;
//     }
//     checkStack.pop();
//   }
//   return true;
// }

// console.log(checkPalindrome("palindrome"));

const isPalindrome = (sentence) => {
  const checkStack = new Stack();
  // just added this replace statement to my orginal function design to filter out everything that is not a letter useing Regex
  // so i can put a ! at the end and it will still be a palindrome
  // takes the filtered word and puts it into the orginal function code that was used to solve for one word
  word = sentence.replace(/[^a-zA-Z]/g, "").toLowerCase();
  for (let i = 0; i < word.length; i++) {
    checkStack.push(word[i]);
  }
  for (let j = 0; j < word.length; j++) {
    if (checkStack.peek() != word[j]) {
      return false;
    }
    checkStack.pop();
  }
  return true;
};
let sentence = "a man a plan a canal panama!";
isPalindrome(sentence)
  ? console.log(`${sentence} is a palindrome.`)
  : console.log(`${sentence} is not a palindrome.`);

let decimalToBinaryConverter = (decimal) => {
  const container = new Stack();
  let remainder = 0;
  let testNumber = decimal;
  let binaryNumber = "";

  while (testNumber > 0) {
    remainder = Math.floor(testNumber % 2);
    container.push(remainder);
    testNumber = Math.floor(testNumber / 2);
  }
  while (!container.isEmpty()) {
    binaryNumber += container.pop().toString();
  }
  return binaryNumber;
};

console.log(decimalToBinaryConverter(456));
