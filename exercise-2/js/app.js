// var taskInput = document.getElementById("new-task");
// var addButton = document.getElementsByTagName("button")[0];
// var incompleteTasksHolder = document.getElementById("incomplete-tasks");
// var completedTasksHolder = document.getElementById("completed-tasks");
// const COMPLETED_ITEMS_KEY = 'completed_items';
// const INCOMPLETED_ITEMS_KEYS = 'incompleted_items';
// // get data from localStorage 

// var createNewTaskElement = function(taskString, arr) {
//   listItem = document.createElement("li");
//   checkBox = document.createElement("input");
//   label = document.createElement("label");
//   editInput = document.createElement("input");
//   editButton = document.createElement("button");
//   deleteButton = document.createElement("button");

//   checkBox.type = "checkbox";
//   editInput.type = "text";
//   editButton.innerText = "Edit";
//   editButton.className = "edit";
//   deleteButton.innerText = "Delete";
//   deleteButton.className = "delete";
//   label.innerText = taskString;

//   listItem.appendChild(checkBox);
//   listItem.appendChild(label);
//   listItem.appendChild(editInput);
//   listItem.appendChild(editButton);
//   listItem.appendChild(deleteButton);

//   return listItem;
// };

// var addTask = function () {
//   var listItemName = taskInput.value || "New Item"
//   listItem = createNewTaskElement(listItemName);
//   incompleteTasksHolder.appendChild(listItem);
//   // save item in localStorage 
//   updateCompletedTasks(listItem, 'add', INCOMPLETED_ITEMS_KEYS);
//   bindTaskEvents(listItem, taskCompleted)
//   taskInput.value = "";
// };

// var editTask = function () {
//   var listItem = this.parentNode;
//   var editInput = listItem.querySelectorAll("input[type=text")[0];
//   var label = listItem.querySelector("label");
//   var button = listItem.getElementsByTagName("button")[0];
//   var containsClass = listItem.classList.contains("editMode");
//   if (containsClass) {
//       // change to read only 
//       label.innerText = editInput.value
//       button.innerText = "Edit";
//   } else {
//     // change to edit mode 
//      editInput.value = label.innerText
//      button.innerText = "Save";
//   }
  
//   listItem.classList.toggle("editMode");
// };

// var deleteTask = function (el) {
//   var listItem = this.parentNode;
//   var ul = listItem.parentNode;
//   ul.removeChild(listItem);
//   // update localStorage 
// };

// var taskCompleted = function (el) {
//   var listItem = this.parentNode;
//   completedTasksHolder.appendChild(listItem);
//   // update localStorage 
//   bindTaskEvents(listItem, taskIncomplete);
// };

// var taskIncomplete = function() {
//   var listItem = this.parentNode;
//   incompleteTasksHolder.appendChild(listItem);
//   // update localStorage 
//   bindTaskEvents(listItem, taskCompleted);
// };

// var bindTaskEvents = function(taskListItem, checkBoxEventHandler, cb) {
//   var checkBox = taskListItem.querySelectorAll("input[type=checkbox]")[0];
//   var editButton = taskListItem.querySelectorAll("button.edit")[0];
//   var deleteButton = taskListItem.querySelectorAll("button.delete")[0];
//   editButton.onclick = editTask;
//   deleteButton.onclick = deleteTask;
//   checkBox.onchange = checkBoxEventHandler;
// };

// addButton.addEventListener("click", addTask);

// for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
//   bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
// }

// for (var i = 0; i < completedTasksHolder.children.length; i++) {
//   bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
// }

// var updateCompletedTasks = function(data ,mode, key) {
//   let item = JSON.stringify(data);
//   const items = JSON.parse(localStorage.getItem(key));
//   debugger;
//   if(!items) {
//     items = [];
//   }
//   debugger;
//   if(mode == 'add') {
//     // adding 
//     items.push(item);
//   } else if( mode == 'edit') {
//     // edit based on id 
//   } else if(mode == 'delete') {
//     // delete based on id 
//   }
//   // update items in localStoarge 
//   localStorage.setItem(JSON.stringify(items)); 
// }