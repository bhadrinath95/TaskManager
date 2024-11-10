---

### **JavaScript Cheat Book**

---

#### **Chapter 1: Introduction**
- JavaScript is a lightweight, interpreted programming language primarily used for creating interactive web pages.
- It runs on the browser, allowing you to dynamically update HTML, manipulate CSS, and handle events.
  
---

#### **Chapter 2: Link JS to HTML**
- **Using `<script>` tag**:
  ```html
  <script src="script.js"></script>
  ```

- **In the head section** (with `defer` attribute to load after HTML parsing):
  ```html
  <head>
    <script src="script.js" defer></script>
  </head>
  ```

- **Inline JS**:
  ```html
  <script>
    console.log("Hello, World!");
  </script>
  ```

---

#### **Chapter 3: Strings**
- **String declaration**:
  ```js
  let str = "Hello";
  let str2 = 'World';
  let str3 = `Hello, ${str2}`;
  ```

- **String methods**:
  - `length`: `str.length`
  - `toUpperCase()`: `str.toUpperCase()`
  - `toLowerCase()`: `str.toLowerCase()`
  - `slice()`: `str.slice(0, 3)` (Extracts part of a string)
  - `replace()`: `str.replace("Hello", "Hi")`
  - `includes()`: `str.includes("lo")`

---

#### **Chapter 4: Numbers**
- **Number Declaration**:
  ```js
  let num = 10;
  let floatNum = 10.5;
  ```

- **Number methods**:
  - `parseInt()`: Converts string to integer.
  - `parseFloat()`: Converts string to float.
  - `toFixed()`: Rounds the number to a fixed number of decimal places.
  - `isNaN()`: Checks if a value is NaN (Not a Number).

---

#### **Chapter 5: Math Methods**
- **Math Methods**:
  - `Math.round()`: Rounds a number.
  - `Math.floor()`: Rounds down.
  - `Math.ceil()`: Rounds up.
  - `Math.random()`: Generates a random number.
  - `Math.max()`: Returns the largest number.
  - `Math.min()`: Returns the smallest number.

---

#### **Chapter 6: If Statements**
- **Basic If-Else**:
  ```js
  if (condition) {
    // code
  } else {
    // code
  }
  ```

- **If-Else If-Else**:
  ```js
  if (condition1) {
    // code
  } else if (condition2) {
    // code
  } else {
    // code
  }
  ```

---

#### **Chapter 7: Switch Statements**
- **Switch Statement**:
  ```js
  switch (expression) {
    case value1:
      // code
      break;
    case value2:
      // code
      break;
    default:
      // code
  }
  ```

---

#### **Chapter 8: Ternary Operators**
- **Ternary Operator**:
  ```js
  let result = condition ? valueIfTrue : valueIfFalse;
  ```

---

#### **Chapter 9: User Input**
- **Using `prompt()`** to get user input:
  ```js
  let userInput = prompt("Enter your name:");
  ```

- **Using `confirm()`** for a yes/no dialog:
  ```js
  let isConfirmed = confirm("Are you sure?");
  ```

---

#### **Chapter 10: Loops**

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

#### **Chapter 11: Functions**
- **Function Declaration**:
  ```js
  function greet() {
    console.log("Hello!");
  }
  ```

- **Function Expression**:
  ```js
  const greet = function() {
    console.log("Hello!");
  };
  ```

- **Arrow Function**:
  ```js
  const greet = () => console.log("Hello!");
  ```

---

#### **Chapter 12: Scope - var, let, const**
- **var**: Function-scoped.
  ```js
  var x = 10;
  ```

- **let**: Block-scoped.
  ```js
  let y = 20;
  ```

- **const**: Block-scoped, constant value.
  ```js
  const z = 30;
  ```

---

#### **Chapter 13: Arrays**
- **Creating Arrays**:
  ```js
  let arr = [1, 2, 3, 4, 5];
  ```

- **Delete an element at the middle of an array**:
  ```js
  arr.splice(2, 1); // Removes element at index 2
  ```

- **Replace or Add an element**:
  ```js
  arr.splice(2, 1, 6); // Replaces element at index 2 with '6'
  arr.splice(3, 0, 7); // Adds '7' at index 3
  ```

- **Slice an array**:
  ```js
  let newArr = arr.slice(1, 4); // Extracts elements from index 1 to 3
  ```

- **Reverse the array**:
  ```js
  arr.reverse(); // Reverses the array
  ```

- **Concatenate arrays**:
  ```js
  let mergedArr = arr.concat([8, 9]);
  ```

- **Spread operator**:
  ```js
  let newArr = [...arr]; // Creates a shallow copy
  let mergedArr2 = [...arr, ...[8, 9]];
  ```

---

#### **Chapter 14: Objects**
- **Creating an Object**:
  ```js
  let person = { name: "Alice", age: 25 };
  ```

- **Accessing object properties**:
  ```js
  console.log(person.name); // Alice
  ```

- **Adding/Modifying properties**:
  ```js
  person.city = "New York";
  ```

- **Deleting properties**:
  ```js
  delete person.age;
  ```

---

#### **Chapter 15: Classes**
- **Class Declaration**:
  ```js
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("Alice", 25);
  person1.greet();
  ```

- **Getter and Setter**:
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

#### **Chapter 16: JSON**
- **JSON.stringify()**: Converts a JavaScript object to a JSON string.
  ```js
  let jsonString = JSON.stringify({ name: "Alice", age: 25 });
  ```

- **JSON.parse()**: Converts a JSON string to a JavaScript object.
  ```js
  let obj = JSON.parse('{"name":"Alice","age":25}');
  ```

---

#### **Chapter 17: How to Handle Errors**
- **Types of Errors**:
  - **ReferenceError**:
    ```js
    try { console.log(x); } catch (e) { console.log(e.name); }
    ```

  - **SyntaxError**:
    ```js
    try { eval('var a = );'); } catch (e) { console.log(e.name); }
    ```

  - **TypeError**:
    ```js
    try { null.toUpperCase(); } catch (e) { console.log(e.name); }
    ```

- **Using `"use strict"`**:
  ```js
  "use strict";
  ```

---

#### **Chapter 18: Document Object Model (DOM)**

- **Query / Get Elements**:
  ```js
  let element = document.getElementById("elementID");
  ```

- **Create / Clone Elements**:
  ```js
  let newElement = document.createElement("div");
  ```

- **Add Node to Document**:
  ```js
  let parent = document.getElementById("parentID");
  parent.appendChild(newElement);
  ```

-

 **Get Element Details**:
  ```js
  let id = element.id;
  let content = element.innerHTML;
  ```

- **Modify Element**:
  ```js
  element.innerHTML = "New content";
  ```

- **Get and Modify Element Class**:
  ```js
  element.classList.add("newClass");
  element.classList.remove("oldClass");
  ```

- **Remove Node**:
  ```js
  element.remove();
  ```

---

#### **Chapter 19: Event Listeners**
- **Add an Event Listener**:
  ```js
  element.addEventListener("click", function() {
    console.log("Element clicked!");
  });
  ```

---

#### **Chapter 20: Application Programming Interface (API)**

- **Fetch API**:
  ```js
  fetch("https://api.example.com")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  ```

---

#### **Chapter 21: Modules**
- **Exporting and Importing Modules**:
  ```js
  // module.js
  export function greet() {
    console.log("Hello from module!");
  }

  // main.js
  import { greet } from './module.js';
  greet();
  ```

---

#### **Chapter 22: Higher Order Functions**
- **Example of a Higher Order Function**:
  ```js
  function processArray(arr, fn) {
    return arr.map(fn);
  }
  
  function double(num) {
    return num * 2;
  }
  
  let result = processArray([1, 2, 3], double);
  console.log(result); // [2, 4, 6]
  ```

---
