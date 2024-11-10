---

### **Chapter 1: Introduction**
- JavaScript is a scripting language for creating dynamic web content.
- It runs in the browser and can manipulate the Document Object Model (DOM) to create interactive web pages.

---

### **Chapter 2: Link JS to HTML**
```html
<script src="script.js"></script>  <!-- Linking external JS file -->
<script>
  // Inline JavaScript code
</script>
```

---

### **Chapter 3: Strings**
- **Create String**: `let name = "John";`
- **Escape Character**: `let str = "Hello \"World\"";`
- **String Methods**:
  ```js
  name.toUpperCase();
  name.toLowerCase();
  name.length;
  name.slice(0, 2);
  name.indexOf("o");
  ```

---

### **Chapter 4: Numbers**
- **Number Methods**:
  ```js
  let x = 3.14;
  x.toFixed(2); // "3.14"
  Number.isInteger(4); // true
  Number.isFinite(100); // true
  ```

---

### **Chapter 5: Math Methods**
- **Math Methods**:
  ```js
  Math.round(3.6); // 4
  Math.floor(3.9); // 3
  Math.ceil(3.1); // 4
  Math.random(); // Random number between 0 and 1
  Math.max(1, 2, 3); // 3
  Math.min(1, 2, 3); // 1
  Math.pow(2, 3); // 8
  Math.sqrt(16); // 4
  ```

- **Number Methods**:
  ```js
  Number.isInteger(5); // true
  Number.parseInt("123.45"); // 123
  ```

---

### **Chapter 6: If Statements**
```js
if (x > 10) {
  console.log("Greater");
} else {
  console.log("Smaller or equal");
}
```

---

### **Chapter 7: Switch Statements**
```js
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Unknown day");
}
```

---

### **Chapter 8: Ternary Operators**
```js
let result = (x > 10) ? "Greater" : "Smaller or equal";
```

---

### **Chapter 9: User Input**
```js
let userInput = prompt("Enter your name:");
console.log("Hello " + userInput);
```

---

### **Chapter 10: Loops**
- **For Loop**:
  ```js
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

- **While Loop**:
  ```js
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

- **Do-While Loop**:
  ```js
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

---

### **Chapter 11: Functions**
```js
function greet(name) {
  console.log("Hello " + name);
}
greet("John");
```

---

### **Chapter 12: Scope - var, let, const**
- **var**: Function-scoped.
- **let**: Block-scoped.
- **const**: Block-scoped, cannot be reassigned.
  ```js
  var x = 10;
  let y = 20;
  const z = 30;
  ```

---

### **Chapter 13: Arrays (Updated)**

- **Methods**:
  ```js
  let arr = [1, 2, 3, 4];
  arr.push(5); // Adds 5 at the end
  arr.pop(); // Removes the last element
  arr.shift(); // Removes the first element
  arr.unshift(0); // Adds 0 at the beginning
  arr.slice(1, 3); // Extracts a portion of the array
  arr.reverse(); // Reverses the array
  arr.concat([5, 6]); // Combines arrays
  let newArr = [...arr]; // Spread operator
  ```

- **Splice**:  
  - The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new ones.
  ```js
  arr.splice(2, 1); // Removes 1 element at index 2
  arr.splice(2, 1, 8); // Removes 1 element at index 2 and adds 8
  arr.splice(2, 0, 6, 7); // Adds 6 and 7 at index 2 without removing any elements
  ```

- **Delete Keyword**:  
  - The `delete` keyword removes an element from the array but leaves a hole in the array (undefined at that index).
  ```js
  delete arr[1]; // Removes the element at index 1, leaving undefined at that index
  console.log(arr); // [1, undefined, 3, 4]
  ```

---

### **Chapter 14: Objects**
```js
let person = { name: "John", age: 30 };
console.log(person.name); // "John"
```

---

### **Chapter 15: Classes**
```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log("Driving " + this.model);
  }
}

let myCar = new Car("Toyota", "Corolla");
myCar.drive();
```

---

### **Chapter 16: JSON**
```js
let jsonStr = '{"name": "John", "age": 30}';
let jsonObj = JSON.parse(jsonStr); // Convert string to object
let jsonString = JSON.stringify(jsonObj); // Convert object to string
```

---

### **Chapter 17: Error Handling (Updated)**

- **try-catch**:
  - **try**: Contains the code that may throw an error.
  - **catch**: Catches the error if it occurs and handles it.
  ```js
  try {
    let x = y + 1; // ReferenceError: y is not defined
  } catch (error) {
    console.log(error.message); // Logs the error message
  }
  ```

- **Finally**: This block will always execute, regardless of whether an error occurred or not.
  ```js
  try {
    let x = y + 1;
  } catch (error) {
    console.log("Error: " + error.message);
  } finally {
    console.log("This block is always executed");
  }
  ```

- **Types of Errors**:
  - **ReferenceError**: A variable or function is used before being declared.
    ```js
    let x = y + 1; // ReferenceError: y is not defined
    ```

  - **SyntaxError**: There is a mistake in the syntax of your code.
    ```js
    eval("console.log('Hello'"); // SyntaxError: Unexpected end of input
    ```

  - **TypeError**: An operation is performed on a value of an incorrect type.
    ```js
    let x = "string";
    x.toUpperCase(); // Works fine
    let y = undefined;
    y.toUpperCase(); // TypeError: Cannot read property 'toUpperCase' of undefined
    ```

- **Use Strict**: Enforces a stricter version of JavaScript to catch common coding mistakes.
  ```js
  "use strict"; // Enables strict mode
  ```

- **Custom Error Handling**:
  - **Throwing a Custom Error**: You can throw your own errors to handle specific conditions.
  ```js
  function checkAge(age) {
    if (age < 18) {
      throw new Error("Age must be 18 or older");
    }
    console.log("Age is valid");
  }

  try {
    checkAge(16); // Will throw an error
  } catch (error) {
    console.log(error.message); // "Age must be 18 or older"
  }
  ```

  - **Creating Custom Error Classes**: Extend the base `Error` class to create your own error types.
  ```js
  class CustomError extends Error {
    constructor(message) {
      super(message); // Call the parent constructor
      this.name = this.constructor.name; // Set custom error name
      this.message = message; // Set custom error message
      this.stack = (new Error()).stack; // Capture the stack trace
    }
  }

  try {
    throw new CustomError("This is a custom error");
  } catch (error) {
    console.log(error.name); // CustomError
    console.log(error.message); // "This is a custom error"
    console.log(error.stack); // Stack trace of the error
  }
  ```

---

### **Chapter 18: DOM (Document Object Model)**

- **Query/Get Elements**:
  ```js
  let element = document.getElementById("myElement");
  let elements = document.querySelectorAll(".myClass");
  ```

- **Create/Clone Elements**:


  ```js
  let newDiv = document.createElement("div");
  let cloneDiv = newDiv.cloneNode(true); // Deep clone
  ```

- **Add Node to Document**:
  ```js
  document.body.appendChild(newDiv); // Adds new div to body
  ```

- **Get Element Details**:
  ```js
  let className = element.className; // Get class name
  let id = element.id; // Get id
  ```

- **Modify Element**:
  ```js
  element.style.color = "red"; // Change color
  element.setAttribute("title", "New Title"); // Set attribute
  ```

- **Get and Modify Element Class**:
  ```js
  element.classList.add("newClass");
  element.classList.remove("oldClass");
  element.classList.toggle("active");
  ```

- **Remove Node**:
  ```js
  element.remove(); // Removes the element from DOM
  ```

---

### **Chapter 19: Event Listeners**
```js
element.addEventListener("click", function() {
  console.log("Element clicked!");
}, true); // Use capture phase
```

---

### **Chapter 20: API (Application Programming Interface)**

- **LocalStorage & SessionStorage**:
  ```js
  localStorage.setItem("name", "John"); // Store in localStorage
  sessionStorage.setItem("sessionName", "Tom"); // Store in sessionStorage
  let name = localStorage.getItem("name");
  localStorage.removeItem("name");
  localStorage.clear();
  ```

---

### **Chapter 21: Modules**
```js
// In module1.js
export const greet = () => "Hello";

// In main.js
import { greet } from './module1.js';
console.log(greet());
```

---

### **Chapter 22: Higher Order Functions**
```js
// A function that accepts another function as an argument
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("John", () => console.log("Good Morning!"));
```

---
