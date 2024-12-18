# JavaScript Cheat Sheet

### **[Chapter 1: Introduction](#chapter-1-introduction)**
- JavaScript is a scripting language used to create interactive web pages.
- It runs in the browser and manipulates the Document Object Model (DOM).

---

### **[Chapter 2: Link JS to HTML](#chapter-2-link-js-to-html)**
```html
<script src="script.js"></script>  <!-- Linking external JS file -->
<script>
  // Inline JavaScript code
</script>
```

---

### **[Chapter 3: Strings](#chapter-3-strings)**
- **Create String**:
  ```js
  let name = "John";
  ```

- **Escape Character**:
  ```js
  let str = "Hello \"World\"";
  ```

- **String Methods**:
  ```js
  name.toUpperCase(); // Converts to uppercase
  name.toLowerCase(); // Converts to lowercase
  name.length;         // Get string length
  name.slice(0, 2);    // Extracts a portion of the string
  name.indexOf("o");   // Returns the index of 'o'
  ```

---

### **[Chapter 4: Numbers](#chapter-4-numbers)**
- **Number Methods**:
  ```js
  let x = 3.14;
  x.toFixed(2);  // "3.14"
  Number.isInteger(4);  // true
  Number.isFinite(100); // true
  ```

---

### **[Chapter 5: Math Methods](#chapter-5-math-methods)**
- **Math Methods**:
  ```js
  Math.round(3.6);    // 4
  Math.floor(3.9);    // 3
  Math.ceil(3.1);     // 4
  Math.random();      // Random number between 0 and 1
  Math.max(1, 2, 3);  // 3
  Math.min(1, 2, 3);  // 1
  Math.pow(2, 3);     // 8
  Math.sqrt(16);      // 4
  ```

- **Number Methods**:
  ```js
  Number.isInteger(5); // true
  Number.parseInt("123.45"); // 123
  ```

---

### **[Chapter 6: If Statements](#chapter-6-if-statements)**
```js
if (x > 10) {
  console.log("Greater");
} else {
  console.log("Smaller or equal");
}
```

---

### **[Chapter 7: Switch Statements](#chapter-7-switch-statements)**
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

### **[Chapter 8: Ternary Operators](#chapter-8-ternary-operators)**
```js
let result = (x > 10) ? "Greater" : "Smaller or equal";
```

---

### **[Chapter 9: User Input](#chapter-9-user-input)**
```js
let userInput = prompt("Enter your name:");
console.log("Hello " + userInput);
```

---

### **[Chapter 10: Loops](#chapter-10-loops)**
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

### **[Chapter 11: Functions](#chapter-11-functions)**

- **Function Declaration**:
  ```js
  function greet(name) {
    console.log("Hello " + name);
  }
  greet("John");
  ```

- **Function Expression**:
  ```js
  const greet = function(name) {
    console.log("Hello " + name);
  }
  greet("John");
  ```

- **Arrow Function**:
  ```js
  const greet = (name) => {
    console.log("Hello " + name);
  }
  greet("John");
  ```

- **Immediately Invoked Function Expression (IIFE)**:
  ```js
  (function() {
    console.log("I am immediately invoked!");
  })();
  ```

---

### **[Chapter 12: Scope - var, let, const](#chapter-12-scope---var-let-const)**
- **var**: Function-scoped.
- **let**: Block-scoped.
- **const**: Block-scoped, cannot be reassigned.
  ```js
  var x = 10;
  let y = 20;
  const z = 30;
  ```

---

### **[Chapter 13: Arrays](#chapter-13-arrays)**

- **Methods**:
  ```js
  let arr = [1, 2, 3, 4];
  arr.push(5);  // Adds 5 at the end
  arr.pop();    // Removes the last element
  arr.shift();  // Removes the first element
  arr.unshift(0); // Adds 0 at the beginning
  arr.slice(1, 3);  // Extracts a portion of the array
  arr.reverse();    // Reverses the array
  arr.concat([5, 6]); // Combines arrays
  let newArr = [...arr];  // Spread operator
  ```

- **Splice**:
  - `splice()` removes or adds elements from/to an array.
  ```js
  arr.splice(2, 1); // Removes 1 element at index 2
  arr.splice(2, 1, 8); // Removes 1 element at index 2 and adds 8
  arr.splice(2, 0, 6, 7); // Adds 6 and 7 at index 2 without removing any elements
  ```

- **Delete Keyword**:  
  - The `delete` keyword removes an element but leaves a hole in the array (undefined at that index).
  ```js
  delete arr[1];  // Removes the element at index 1
  console.log(arr);  // [1, undefined, 3, 4]
  ```

---

### **[Chapter 14: Objects](#chapter-14-objects)**
```js
let person = { name: "John", age: 30 };
console.log(person.name);  // "John"
```

---

### **[Chapter 15: Classes](#chapter-15-classes)**
```js
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  
  get name() {
    return this._name;
  }
  
  set name(newName) {
    this._name = newName;
  }
  
  get age() {
    return this._age;
  }
  
  set age(newAge) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      console.log("Age cannot be negative.");
    }
  }
}
```

---

### **[Chapter 16: JSON](#chapter-16-json)**
```js
let jsonStr = '{"name": "John", "age": 30}';
let jsonObj = JSON.parse(jsonStr);  // Convert string to object
let jsonString = JSON.stringify(jsonObj);  // Convert object to string
```

---

### **[Chapter 17: Error Handling](#chapter-17-error-handling)**

- **try-catch**:
  ```js
  try {
    let x = y + 1;  // ReferenceError: y is not defined
  } catch (error) {
    console.log(error.message);  // Logs error message
  }
  ```

- **Finally**: This block will always execute, regardless of whether an error occurred.
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
  - **ReferenceError**: A variable is used before being declared.
    ```js
    let x = y + 1;  // ReferenceError: y is not defined
    ```

  - **SyntaxError**: There's a mistake in the syntax of the code.
    ```js
    eval("console.log('Hello'");  // SyntaxError: Unexpected end of input
    ```

  - **TypeError**: An operation is performed on an incorrect type.
    ```js
    let x = "string";
    x.toUpperCase();  // Works fine
    let y = undefined;
    y.toUpperCase();  // TypeError: Cannot read property 'toUpperCase' of undefined
    ```

- **Use Strict**: Enforces stricter JavaScript behavior.
  ```js
  "use strict";  // Enables strict mode
  ```

- **Custom Error Handling**:
  ```js
  function checkAge(age) {
    if (age < 18) {
      throw new Error("Age must be 18 or older");
    }
    console.log("Age is valid");
  }

  try {
    checkAge(16);  // Will throw error
  } catch (error) {
    console.log(error.message);  // "Age must be 18 or older"
  }
  ```

  - **Creating Custom Error Classes**:
  ```js
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.message = message;
      this.stack = (new Error()).stack;
    }
  }

  try {
    throw new CustomError("This is a custom error");
  } catch (error) {
    console.log(error.name);  // CustomError
    console.log(error.message);  // "This is a custom error"
    console.log(error.stack);  // Error stack trace
  }
  ```

---

### **[Chapter 18: DOM](#chapter-18-dom)**


#### **(a) Query/Get Elements**:

- **By ID**: `document.getElementById("myId");`
- **By Class Name**: `document.getElementsByClassName("myClass");`
- **By Tag Name**: `document.getElementsByTagName("tagName");`
- **By CSS Selector** (first match): `document.querySelector(".myClass");`
- **By CSS Selector** (all matches): `document.querySelectorAll(".myClass");`

---

#### **(b) Modifying Elements**

- **Change Inner Content**:
  ```javascript
  element.innerHTML = "New HTML content";
  element.textContent = "New text content"; // safer for plain text
  ```

- **Change Attributes**:
  ```javascript
  element.setAttribute("src", "image.jpg");
  const id = element.getAttribute("id");
  element.removeAttribute("alt");
  ```

- **Modify Styles**:
  ```javascript
  element.style.color = "blue";
  element.style.fontSize = "18px";
  element.style.backgroundColor = "yellow";
  ```

---

#### **(c) Managing Classes**

- **Add / Remove / Toggle Class**:
  ```javascript
  element.classList.add("new-class");
  element.classList.remove("old-class");
  element.classList.toggle("highlight");
  ```

- **Check Class**:
  ```javascript
  element.classList.contains("highlight"); // returns true or false
  ```

- **Replace Class**:
  ```javascript
  element.classList.replace("old-class", "new-class");
  ```

---

#### **(d) Cloning Elements**

- **Clone Node**:
  ```javascript
  const clone = element.cloneNode(true); // true for deep clone, false for shallow
  document.body.appendChild(clone); // Append the clone to the body or another element
  ```

---

#### **(e) Appending and Removing Nodes**

- **Append Node as Last Child**:
  ```javascript
  parentElement.appendChild(newElement);
  ```

- **Append Multiple Nodes / Text**:
  ```javascript
  parentElement.append(newElement, "Text content");
  ```

- **Remove Node**:
  ```javascript
  parentElement.removeChild(childElement);
  ```

---

#### **(f) Event Handling**

- **Add Event Listener**:
  ```javascript
  element.addEventListener("click", function() {
    alert("Element clicked!");
  });
  ```

---

#### **(g) DOM Traversal Methods**

- **Parent Node**:
  ```javascript
  const parent = element.parentNode;
  ```

- **Child Nodes (all)**:
  ```javascript
  const children = element.childNodes;
  ```

- **Child Elements Only**:
  ```javascript
  const children = element.children;
  ```

- **First / Last Child**:
  ```javascript
  const first = element.firstChild;
  const last = element.lastChild;
  ```

- **Next / Previous Sibling**:
  ```javascript
  const next = element.nextSibling;
  const prev = element.previousSibling;
  ```

- **Next / Previous Element Sibling** (only element nodes):
  ```javascript
  const nextElement = element.nextElementSibling;
  const prevElement = element.previousElementSibling;
  ```

---

### **Example Usage**

Here's a quick example to see these concepts in action:

```html
<div id="container">
  <p class="text">Original text</p>
</div>
<button id="cloneButton">Clone Element</button>
<button id="styleButton">Change Style</button>
```

```javascript
const container = document.getElementById("container");
const textElement = document.querySelector(".text");

document.getElementById("cloneButton").addEventListener("click", function() {
  const clonedElement = textElement.cloneNode(true);
  container.appendChild(clonedElement);
});

document.getElementById("styleButton").addEventListener("click", function() {
  textElement.style.color = "green";
  textElement.style.fontSize = "24px";
  textElement.classList.toggle("highlight");
});

// Traversal example
const parent = textElement.parentNode;
const firstChild = container.firstElementChild;
const nextSibling = textElement.nextElementSibling;
```


### **[Chapter 19: Event Listeners](#chapter-19-event-listeners)**

- **Basic Event Listener**:
  ```js
  element.addEventListener("click", function() {
    console.log("Element clicked!");
  });
  ```

- **Bubbling Up** (Event Propagation):
  - Bubbling is the default event propagation behavior. The event starts from the target element and "bubbles" up to the parent elements.
  - You can stop this bubbling by calling `event.stopPropagation()`.

  ```js
  document.querySelector(".child").addEventListener("click", function(event) {
    console.log("Child element clicked");
    event.stopPropagation();  // Stops event from bubbling up
  });

  document.querySelector(".parent").addEventListener("click", function() {
    console.log("Parent element clicked");
  });
  ```

  In this example, when the child element is clicked, the event will not bubble up to the parent element due to `event.stopPropagation()`.

- **Bubbling Down** (Capturing Phase):
  - The capturing phase happens before bubbling. The event starts from the root element and propagates down to the target element.
  - To enable the capturing phase, the third argument of `addEventListener` should be set to `true`.

  ```js
  document.querySelector(".parent").addEventListener("click", function() {
    console.log("Parent element clicked in capturing phase");
  }, true);  // True enables capturing phase

  document.querySelector(".child").addEventListener("click", function() {
    console.log("Child element clicked");
  });
  ```

  In this example, the parent element's click event will be triggered first during the capturing phase before the child element's click event.

- **useCapture**:
  - The `useCapture` option lets you control whether the event listener should be triggered during the capturing phase (when set to `true`) or the bubbling phase (default is `false`).

  ```js
  element.addEventListener("click", function() {
    console.log("Clicked during capture phase");
  }, true);  // Capturing phase
  ```

---

### **[Chapter 20: API (Application Programming Interface)](#chapter-20-api-application-programming-interface)**

#### **LocalStorage & SessionStorage**: [Document](https://github.com/bhadrinath95/TaskManager/blob/3b9338d4ecfa1bd603e0cb43cb0a9c2f5c4ff030/Task%20Manager/storage.md)
  ```js
  localStorage.setItem("name", "John");
  sessionStorage.setItem("sessionName", "Tom");
  let name = localStorage.getItem("name");
  localStorage.removeItem("name");
  localStorage.clear();
  ```

#### API

- GET
  ```js
  const users = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const userData = await response.json()
      return userData
  }
  users()
  ```
  
- POST
  ```js
  const myJson = {
      id: 1,
      title: 'Bhadri',
      occupation: 'Software Developer',
      company: 'Bank Of America'
  }
  const postMyJson = async (myJsonObj) => {
      const response = await fetch(
          "https://httpbin.org/post", 
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(myJsonObj)
          }
      )
      const responseData = await response.json()
      console.log(responseData)
  }
  postMyJson(myJson)
  ```
  
---

### **[Chapter 21: Modules](#chapter-21-modules)**
```js
// In module1.js
export const greet = () => "Hello";

// In main.js
import { greet } from './module1.js';
console.log(greet());

// Import everything
import * as obj from './module1.js';
console.log(obj.greet());
```

---

### **[Chapter 22: Higher Order Functions](#chapter-22-higher-order-functions)**
Higher-order functions take other functions as arguments or return a function as their result. Common higher-order functions in JavaScript include `map`, `filter`, and `reduce`.

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("John", () => console.log("Good Morning!"));
```

#### **Filter**
- The `filter` function creates a new array with elements that pass a specified condition.
  
  **Syntax**:
  ```javascript
  array.filter(callback(element, index, array), thisArg);
  ```

  **Example**: Filter an array of numbers to include only the even numbers.
  ```javascript
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4, 6]
  ```

#### **Map**
- The `map` function creates a new array populated with the results of calling a provided function on every element in the calling array.

  **Syntax**:
  ```javascript
  array.map(callback(element, index, array), thisArg);
  ```

  **Example**: Double each element in an array of numbers.
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map(num => num * 2);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  ```
#### **Reduce**
- The `reduce` method is used to "reduce" an array to a single value by iterating over each element in the array and applying a callback function to accumulate or transform the array into the final result.

  **Syntax**:
  ```javascript
  array.reduce(callback, initialValue);
  ```

  **Example**: Double each element in an array of numbers.
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  
  const sum = numbers.reduce((acc, currentValue) => {
    return acc + currentValue; // Add current value to accumulator
  }, 0); // Start the accumulator at 0
  
  console.log(sum); // Output: 15
  ```
#### **Combining Map and Filter**
- You can combine `map` and `filter` to perform multiple operations.

  **Example**: Filter to keep only odd numbers and then double them.
  ```javascript
  const numbers = [1, 2, 3, 4, 5, 6];
  const doubledOdds = numbers
    .filter(num => num % 2 !== 0) // Keep only odd numbers
    .map(num => num * 2);         // Double each odd number

  console.log(doubledOdds); // Output: [2, 6, 10]
  ```
--- 
