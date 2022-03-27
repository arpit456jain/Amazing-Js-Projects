const inputEL = document.querySelector(".input-item");
const itemList = document.querySelector(".item-list");
const trashEl = document.querySelector(".trash-el");
const footerText = document.querySelector(".footer-text");
const trash = document.querySelector(".trash-el");
const clearAll = document.querySelector(".clear-btn");
const listItem = document.querySelectorAll(".list-item");
const timer = document.querySelector(".timer");

let tasks = 0;
let date = new Date().toString();
timer.innerHTML = date.substring(0, 16);

console.log(inputEL.value);
const btnEl = document.querySelector(".btn-el");

btnEl.addEventListener("click", () => {
  if (inputEL.value) {
    let list = document.createElement("li");
    list.className = "list-item";

   
    list.innerHTML = inputEL.value;
    itemList.append(list);

    let deleteBtn = document.createElement("span");
    deleteBtn.className = "trash-el";
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    list.append(deleteBtn);

    tasks++;

    inputEL.value = " ";

    countTasks();
    let current_task = document.querySelectorAll(".trash-el");
    for (var i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
        tasks--;
        countTasks();
      };
    }
  }
});

function countTasks() {
  if (tasks == 1) {
    footerText.innerHTML = `You have only ${tasks} task to do`;
  } else if (tasks == 0) {
    footerText.innerHTML = " ";
  } else {
    footerText.innerHTML = `You have ${tasks} tasks to do`;
  }
}
