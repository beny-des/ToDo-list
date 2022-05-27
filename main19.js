// Q1A
const input = document.querySelector("#input-field");
const button = document.querySelector("#add-btn");
const blockList = document.querySelector(".task-block");
const toDoList = document.querySelector(".to-do-list");
const toggleBtn = document.querySelector("#toggle");
const showDoneBtn = document.querySelector("#show-done");

button.onclick = function () {
  if (input.value !== "") {
    const newTaskValue = input.value;
    const newTask = document.createElement("li");
    newTask.textContent = newTaskValue;
    // -----------Q3A----------
    const addRemoveBtn = document.createElement("button");
    addRemoveBtn.textContent = "Remove";
    // ------------Q4A--------------
    const addDoneBtn = document.createElement("button");
    addDoneBtn.textContent = "Done";
    // -----------------------
    toDoList.append(newTask);
    newTask.append(addDoneBtn);
    newTask.append(addRemoveBtn);
    // --------------------------
    addRemoveBtn.classList.add("removesBtns");
    addDoneBtn.classList.add("addBtns");
    // ---------------------------
    input.value = "";
    input.focus();

    //  ------------Q4A-DONE פונקציה לסימון --------------
    addDoneBtn.onclick = function () {
      this.parentElement.style = "text-decoration:line-through";
    };
    // ------------Q3A פונקציה למחיקת המטלה---------------
    addRemoveBtn.onclick = function () {
      this.parentElement.remove();
    };
  }
};

// ---------------Q2A----------------

toggleBtn.onclick = function () {
  if (document.body.style.background === "white") {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
};

// ---------------Q5A----------------
