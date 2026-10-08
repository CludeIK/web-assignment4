// === Task 0: First Script ===
console.log("Student: Imangali Kabiyev, Group: SE-2529");
alert("Hello, JavaScript World!");

let studentName = "Imangali";
let studentAge = 19;
let isEnrolled = true;

console.log("--- Variables Info ---");
console.log("Name:", studentName, "Type:", typeof studentName);
console.log("Age:", studentAge, "Type:", typeof studentAge);
console.log("Is Enrolled:", isEnrolled, "Type:", typeof isEnrolled);

let a = 15;
let b = 4;
console.log("--- Arithmetic Operations ---");
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Remainder (a % b):", a % b);

let greeting = "Hi, " + studentName + "! You are " + studentAge + " years old.";
console.log("--- String Concatenation ---");
console.log(greeting);

// === Task 2: Changing Content ===
const textParagraph = document.getElementById("text-paragraph");
const changeTextBtn = document.getElementById("change-text-btn");

changeTextBtn.addEventListener("click", function() {
    textParagraph.textContent = "🎉 The text has been successfully changed in JavaScript!";
});


// === Task 3: Changing Styles ===
const styledBox = document.getElementById("styled-box");
const changeColorBtn = document.getElementById("change-color-btn");
const changeFontBtn = document.getElementById("change-font-btn");

changeColorBtn.addEventListener("click", function() {
    styledBox.style.backgroundColor = "#27ae60";
});

let currentSize = 16;
changeFontBtn.addEventListener("click", function() {
    currentSize += 4;
    styledBox.style.fontSize = currentSize + "px";
});


// === Task 4: Creating & Removing Elements ===
const itemList = document.getElementById("item-list");
const addItemBtn = document.getElementById("add-item-btn");
const removeItemBtn = document.getElementById("remove-item-btn");

addItemBtn.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.textContent = "Item " + (itemList.children.length + 1);
    itemList.appendChild(newItem);
});

removeItemBtn.addEventListener("click", function() {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    } else {
        alert("The list is already empty!");
    }
});
// === Task 5: Mouse Events ===
const mouseBox = document.getElementById("mouse-box");

mouseBox.addEventListener("mouseover", function() {
    mouseBox.style.backgroundColor = "#e74c3c";
    mouseBox.textContent = "Mouse is OVER!";
});

mouseBox.addEventListener("mouseout", function() {
    mouseBox.style.backgroundColor = "#e67e22";
    mouseBox.textContent = "Hover over me!";
});


// === Task 6: Keyboard Events ===
const keyboardInput = document.getElementById("keyboard-input");
const outputText = document.getElementById("output-text");

keyboardInput.addEventListener("keyup", function(event) {
    outputText.textContent = event.target.value;
});


// === Task 7: Calculator ===
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcResult = document.getElementById("calc-result");

document.getElementById("calc-add").addEventListener("click", function() {
    calcResult.textContent = Number(num1.value) + Number(num2.value);
});

document.getElementById("calc-sub").addEventListener("click", function() {
    calcResult.textContent = Number(num1.value) - Number(num2.value);
});

document.getElementById("calc-mul").addEventListener("click", function() {
    calcResult.textContent = Number(num1.value) * Number(num2.value);
});

document.getElementById("calc-div").addEventListener("click", function() {
    let val2 = Number(num2.value);
    if (val2 === 0) {
        calcResult.textContent = "Zero division error.";
    } else {
        calcResult.textContent = Number(num1.value) / val2;
    }
});


// === Task 8: Mini Project — Interactive To-Do List ===
const todoInput = document.getElementById("todo-input");
const todoAddBtn = document.getElementById("todo-add-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

todoAddBtn.addEventListener("click", function() {
    let text = todoInput.value.trim();
    if (text === "") {
        alert("Enter the task text.");
        return;
    }

    tasks.push(text);
    renderTasks();
    todoInput.value = "";
});

function renderTasks() {
    todoList.innerHTML = "";

    tasks.forEach(function(taskText, index) {
        let li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.background = "#f9f9f9";
        li.style.padding = "8px 12px";
        li.style.marginBottom = "8px";
        li.style.border = "1px solid #e0e0e0";
        li.style.borderRadius = "4px";

        let span = document.createElement("span");
        span.textContent = taskText;
        span.style.cursor = "pointer";
        span.addEventListener("click", function() {
            if (span.style.textDecoration === "line-through") {
                span.style.textDecoration = "none";
                span.style.color = "black";
            } else {
                span.style.textDecoration = "line-through";
                span.style.color = "gray";
            }
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.backgroundColor = "#e74c3c";
        deleteBtn.style.padding = "4px 8px";
        deleteBtn.style.fontSize = "12px";

        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}