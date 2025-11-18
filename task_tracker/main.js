let taskList = [{ id: 1, title: "Sample Task", completed: false }];
let nextId = 2;

function addTask() {
  const taskInput = document.getElementById("task-name");
  const taskName = taskInput.value.trim();
  if (!taskName) {
    return;
  }

  const task = { id: nextId++, title: taskName, completed: false };
  taskList.push(task);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  console.log("Rendering tasks...");
  const listTaskUl = document.getElementById("tasks-ul");
  listTaskUl.innerHTML = "";
  taskList.forEach((task) => {
    console.log("Adding task:", task);
    const li = document.createElement("li");

    const isCompletedIcon = document.createElement("i");
    const titleSpan = document.createElement("span");

    if (task.completed) {
      titleSpan.style.textDecoration = "line-through";
      isCompletedIcon.className = "fa-solid fa-square-check";
    } else {
      isCompletedIcon.className = "fa-regular fa-square";
    }

    isCompletedIcon.style.cursor = "poiter";
    isCompletedIcon.onclick = () => updateTaskComplete(task.id);

    const trashIcon = document.createElement("i");
    trashIcon.className = "fa-regular fa-trash-can";
    trashIcon.style.marginRight = 0;
    trashIcon.style.cursor = "pointer";
    trashIcon.onclick = () => removeTask(task.id);

    titleSpan.textContent = task.title;

    li.appendChild(isCompletedIcon);
    li.appendChild(titleSpan);
    li.appendChild(trashIcon);

    listTaskUl.appendChild(li);
  });
}

function removeTask(id) {
  taskList = taskList.filter((task) => task.id !== id);
  renderTasks();
}

function updateTaskComplete(id) {
  taskList = taskList.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
      return task;
    } else {
      return task;
    }
  });
  renderTasks();
}
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});
