// Select form, input, and task list elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage when the page loads
let tasks = loadTasksFromLocalStorage();
displayTasks();

// Event listener for form submission to add a new task
taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    const taskName = taskInput.value.trim();
    if (taskName) {
        addTask(taskName);
        taskInput.value = ""; // Clear the input field
    }
});

// Function to add a task
function addTask(taskName) {
    const newTask = { name: taskName, completed: false };
    tasks.push(newTask);
    saveTasksToLocalStorage(tasks);
    displayTasks();
}

// Function to display tasks on the page
function displayTasks() {
    taskList.innerHTML = ""; // Clear the list
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.className = "task-item";

        // Checkbox to mark task as complete
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTaskCompletion(index));

        // Task name element
        const taskName = document.createElement("span");
        taskName.textContent = task.name;
        taskName.className = task.completed ? "completed" : "";

        // Delete button to remove task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", () => deleteTask(index));

        // Append elements to the task item div
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskName);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasksToLocalStorage(tasks);
    displayTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasksToLocalStorage(tasks);
    displayTasks();
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}