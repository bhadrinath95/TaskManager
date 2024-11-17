### **Project Name**: Task Manager

### **Description**:
The Task Manager is a web application that allows users to add, mark as complete, edit, and delete tasks. The app displays a list of tasks and has a basic interface for managing to-dos.

### **Features and Requirements**:
1. **Add Task**
   - Input field to enter a task name.
   - A button to add the task to the list.
   - When the button is clicked, the task is added to the list below.

2. **Delete Task**
   - Each task should have a delete button next to it.
   - When the delete button is clicked, that specific task is removed from the list.

3. **Edit Task**
   - Each task should also have an edit button.
   - When the edit button is clicked, the task’s name becomes editable, and the user can save the changes.

4. **Mark as Complete**
   - Add a checkbox next to each task. When checked, the task is marked as complete, and the text is styled with a strikethrough.

5. **Filter Tasks**
   - Include a dropdown to filter tasks by "All," "Completed," and "Incomplete."
   - When a filter is selected, the task list updates to show only the selected type.

6. **Clear All Tasks**
   - Add a "Clear All" button that removes all tasks from the list when clicked.

---

### **Suggested Event Handling and Functions**:

1. **Click Events**:
   - For adding a task.
   - For deleting a task.
   - For editing and saving a task.

2. **Change Events**:
   - For marking a task as complete or incomplete with the checkbox.
   - For updating the filter.

3. **Keyboard Events**:
   - For editing task names in an input box.

---

### **Steps to Implement**:

1. **HTML Structure**:
   - A simple form with an input field and add button.
   - A list container where tasks will be displayed dynamically.
   - A filter dropdown menu.

2. **JavaScript Logic**:
   - Use an array to store tasks.
   - Write functions to handle adding, deleting, and updating tasks.
   - Use `addEventListener` to attach events to buttons and input fields.
   - Add conditionals to handle filtering and marking tasks as complete.

3. **CSS (Optional)**:
   - Add styles to make the list visually clear and add effects, like strikethrough, for completed tasks.
