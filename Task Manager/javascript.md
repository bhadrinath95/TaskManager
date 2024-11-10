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

### **Chapter 13: Arrays**
- **Methods**:
  ```js
  let arr = [1, 2, 3];
  arr.push(4); // Adds 4 at the end
  arr.pop(); // Removes the last element
  arr.shift(); // Removes the first element
  arr.unshift(0); // Adds 0 at the beginning
  arr.slice(1, 3); // Extracts a portion of the array
  arr.reverse(); // Reverses the array
  arr.concat([5, 6]); // Combines arrays
  let newArr = [...arr]; // Spread operator
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

### **Chapter 17: Error Handling**
- **try-catch**:
  ```js
  try {
    let x = y + 1; // ReferenceError
  } catch (error) {
    console.log(error.message); // Handles error
  }
  ```

- **Errors**:
  ```js
  ReferenceError: variable is not defined
  SyntaxError: unexpected token
  TypeError: Cannot read property of undefined
  ```

- **Use Strict**:
  ```js
  "use strict";
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
  let clonedDiv = newDiv.cloneNode(true);
  ```

- **Add Node to Document**:
  ```js
  document.body.appendChild(newDiv);
  ```

- **Modify Element**:
  ```js
  element.innerHTML = "New Content";
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

### **Chapter 19: Event Listeners**
- **Mouse Events**:
  ```js
  element.addEventListener("click", function() { console.log("Clicked!"); });
  element.addEventListener("dblclick", function() { console.log("Double clicked!"); });
  ```

- **Keyboard Events**:
  ```js
  document.addEventListener("keydown", function(event) { console.log(event.key); });
  document.addEventListener("keyup", function(event) { console.log(event.key); });
  ```

- **Form Events**:
  ```js
  form.addEventListener("submit", function(event) { event.preventDefault(); });
  inputElement.addEventListener("change", function() { console.log("Input changed!"); });
  ```

- **Focus Events**:
  ```js
  inputElement.addEventListener("focus", function() { console.log("Focused!"); });
  inputElement.addEventListener("blur", function() { console.log("Blurred!"); });
  ```

- **Window Events**:
  ```js
  window.addEventListener("resize", function() { console.log("Resized!"); });
  window.addEventListener("scroll", function() { console.log("Scrolling!"); });
  ```

- **Touch Events**:
  ```js
  element.addEventListener("touchstart", function() { console.log("Touch started!"); });
  element.addEventListener("touchmove", function() { console.log("Touch moving!"); });
  ```

---

### **Chapter 20: API (Application Programming Interface)**

#### **Fetch API**
- **Making Requests with Fetch**:
  ```js
  fetch("https://api.example.com")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  ```

#### **LocalStorage**
- **Store data**: LocalStorage stores data without an expiration date (persistent across sessions).
  ```js
  // Store data
  localStorage.setItem("username", "JohnDoe");
  
  // Retrieve data
  let username = localStorage.getItem("username");
  console.log(username); // "JohnDoe"
  
  // Remove data
  localStorage.removeItem("username");
  
  // Clear all local storage data
  localStorage.clear();
  ```

- **Check if data exists**:
  ```js
  if (localStorage.getItem("username")) {
    console.log("Data exists!");
  } else {
    console.log("No data found.");
  }
  ```

#### **SessionStorage**
- **Store data**: SessionStorage stores data only for the duration of the page session (data is cleared when the page is closed).
  ```js
  // Store data
  sessionStorage.setItem("sessionID", "abc123");
  
  // Retrieve data
  let sessionID =

 sessionStorage.getItem("sessionID");
  console.log(sessionID); // "abc123"
  
  // Remove data
  sessionStorage.removeItem("sessionID");
  
  // Clear all session storage data
  sessionStorage.clear();
  ```

- **Session-based storage**: SessionStorage is only available for the duration of the page session and is not shared across different tabs or windows.
  ```js
  if (sessionStorage.getItem("sessionID")) {
    console.log("Session data exists!");
  } else {
    console.log("No session data.");
  }
  ```

---

### **Chapter 21: Modules**
```js
// In module1.js
export const greet = () => console.log("Hello!");
export const name = "John";

// In app.js
import { greet, name } from './module1.js';
greet();
console.log(name);
```

---

### **Chapter 22: Higher Order Functions**
```js
// Example: Map function
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

---
