"use strict";
// ----- Imported from HTML Document
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const logInForm = document.querySelector(".loginContainer");
const header = document.querySelector("header");
const main = document.querySelector("main");
// ----- Created global variables
const logOutBtn = document.createElement("button");
logOutBtn.setAttribute("class", "logOutBtn");
logOutBtn.innerText = "Log out";
logOutBtn.addEventListener("click", logOut);
header === null || header === void 0 ? void 0 : header.append(logOutBtn);
const todoContainer = document.createElement("div");
todoContainer.setAttribute("class", "todoContainer");
// - Belongs to "createTodo" Function
const todoArray = [];
const todoList = document.createElement("div");
todoList.setAttribute("class", "todoList");
/* const title = document.createElement("label")
title.setAttribute("class", "title")
title.innerText = "Title: " */
const titleInput = document.createElement("input");
titleInput.setAttribute("class", "titleInput");
titleInput.placeholder = 'Enter List Title';
const todoForm = document.createElement("div");
todoForm.setAttribute('class', 'createTodo--Container');
const hr = document.createElement("hr");
hr.setAttribute('class', 'hr');
const ul = document.createElement("ul");
ul.setAttribute("class", "create-todo-ul");
const newTodoItems = document.createElement("div");
newTodoItems.setAttribute("class", "newTodoItems");
// -----Function to register a new user and saves it in DB
function registerNewUser() {
    try {
        // - Imports from HTML Document
        const username = document.querySelector("#newUsername");
        const password = document.querySelector("#newUserPassword");
        const confirmPassword = document.querySelector("#confirmPassword");
        // - Checks if password and confirmed password is the same
        if ((password === null || password === void 0 ? void 0 : password.value) === (confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value)) {
            // - POST to connect with backend
            fetch("http://localhost:3000/products/post/", {
                method: "POST",
                body: JSON.stringify({
                    username: username === null || username === void 0 ? void 0 : username.value,
                    password: password === null || password === void 0 ? void 0 : password.value
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                console.log(data);
            })
                .catch(error => {
                console.log(error);
            });
        }
        else {
            console.log("Confirm password is not equal to password");
        }
    }
    catch (error) {
        console.error(error);
    }
}
// ----- Function to login a user
function logIn() {
    // todoContainer.innerHTML= ""
    // try {
    //   // - Imports from HTML Document
    //   const username: HTMLInputElement | null = document.querySelector("#username");
    //   const password: HTMLInputElement | null = document.querySelector("#password");
    //   // - POST to connect with backend
    //   fetch("http://localhost:3000/products/post/", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       username: username?.value,
    //       password: password?.value
    //     }),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       succesess()
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // } catch (error) {
    //   console.error(error);
    // }
    succesess();
}
// ----- Function for successful user login
function succesess() {
    // - Checks if logInForm is true
    if (logInForm) {
        // - Makes loginForm disappear and todoContainer to appear
        logInForm.style.display = "none";
        todoContainer.style.display = "block";
        logOutBtn.style.display = "block";
        todoForm.style.display = "block";
        // - Creates elements
        const bodyContainer = document.createElement("div");
        bodyContainer.setAttribute("class", "bodyContainer");
        const body = document.createElement("label");
        body.setAttribute("class", "body");
        body.innerText = "Todo: ";
        const bodyInput = document.createElement("input");
        bodyInput.setAttribute("class", "bodyInput");
        const emojiDiv = document.createElement("div");
        const emojiP = document.createElement("div");
        emojiP.setAttribute("class", "emojiP");
        emojiDiv.setAttribute("class", "emojiDiv");
        fetch("https://emoji-api.com/emojis/winking-face-with-tongue?access_key=50ba7358ffceaa5c8a0cc996ecc01b052e4d7ceb")
            .then(response => response.json())
            .then(data => {
            for (const emoji of data) {
                emojiP.innerText = emoji.character;
            }
        });
        emojiDiv.append(emojiP);
        emojiDiv.addEventListener("click", () => { getEmoji(bodyContainer, emojiP); });
        const colorContainer = document.createElement("div");
        colorContainer.setAttribute("class", "colorContainer");
        const colorPicker = document.createElement("div");
        colorPicker.setAttribute("class", "colorPicker");
        colorPicker.addEventListener("click", () => { getColor(bodyContainer, colorPicker); });
        const addTodoBtn = document.createElement("button");
        addTodoBtn.setAttribute("class", "todoBtn");
        addTodoBtn.setAttribute("type", "button");
        addTodoBtn.innerText = "Add Todo";
        addTodoBtn.addEventListener("click", () => createTodo(colorPicker, bodyInput, emojiDiv));
        colorContainer.append(colorPicker);
        bodyContainer.append(body, bodyInput, emojiDiv, colorContainer);
        todoForm.append(bodyContainer, addTodoBtn);
        main === null || main === void 0 ? void 0 : main.append(todoForm);
    }
    else {
        console.log("there is no form");
    }
}
const emojiContainer = document.createElement("div");
emojiContainer.setAttribute("class", "emojiContainer");
function getEmoji(bodyContainer, emojiP) {
    emojiContainer.style.display = "block";
    emojiContainer.innerHTML = "";
    fetch("https://emoji-api.com/categories/smileys-emotion?access_key=50ba7358ffceaa5c8a0cc996ecc01b052e4d7ceb")
        .then(response => response.json())
        .then(data => {
        data.slice(0, 40).forEach((element) => {
            const btn = document.createElement("button");
            btn.setAttribute("class", "emojiBtn");
            btn.setAttribute("type", "button");
            btn.addEventListener("click", () => {
                emojiP.innerHTML = element.character;
            });
            btn.innerText = element.character;
            emojiContainer.append(btn);
            bodyContainer.append(emojiContainer);
        });
    });
    emojiContainer.addEventListener("mouseleave", () => {
        emojiContainer.style.display = "none";
        emojiContainer.innerHTML = "";
    });
}
const colorPalette = document.createElement("div");
colorPalette.setAttribute("class", "colorPalette");
function getColor(bodyContainer, colorPicker) {
    return __awaiter(this, void 0, void 0, function* () {
        colorPalette.style.display = "block";
        colorPalette.innerHTML = "";
        const response = yield fetch("./colors.json");
        const data = yield response.json();
        yield [data].forEach((element) => {
            element.forEach((color) => {
                const btn = document.createElement("button");
                btn.setAttribute("class", "colorBtn");
                btn.setAttribute("type", "button");
                btn.addEventListener("click", () => {
                    colorPicker.style.backgroundColor = color;
                });
                btn.style.backgroundColor = color;
                colorPalette.append(btn);
                bodyContainer.append(colorPalette);
            });
        });
        colorPalette.addEventListener("mouseleave", () => {
            colorPalette.style.display = "none";
            colorPalette.innerHTML = "";
        });
    });
}
// ----------------------- SUBMITBTN 
const submitBtn = document.createElement("button");
submitBtn.setAttribute("class", "submitBtn");
submitBtn.addEventListener("click", () => { saveList(titleInput); });
submitBtn.innerText = 'Save List';
function createTodo(colorPicker, bodyInput, emojiDiv) {
    const newTodo = {
        todo: bodyInput.value,
        emoji: emojiDiv.innerText,
        color: colorPicker.style.backgroundColor
    };
    todoArray.push(newTodo);
    const li = document.createElement("li");
    li.setAttribute("class", "create-todo-li");
    li.style.color = colorPicker.style.backgroundColor;
    li.append(newTodo.todo, newTodo.emoji);
    ul.append(li);
    newTodoItems.append(hr, titleInput, ul, submitBtn);
    todoForm.appendChild(newTodoItems);
}
/*   const li = document.createElement("li")
  li.setAttribute("class", "create-todo-li")
  li.style.color = colorPicker.style.backgroundColor



  if (todoList) {
    todoContainer.append(todoList)
    todoList.append(title, titleInput, ul, submitBtn)
    ul.append(li)
    li.append(bodyInput.value, emojiDiv.innerText)
  } */
function saveList(titleInput) {
    if (titleInput) {
        fetch("http://localhost:3000/products/post/", {
            method: "POST",
            body: JSON.stringify({
                title: titleInput === null || titleInput === void 0 ? void 0 : titleInput.value,
                body: todoArray
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
            console.log(data);
        })
            .catch(error => {
            console.log(error);
        });
    }
    else {
        console.log("Inputs is empty");
    }
}
function logOut() {
    if (logInForm) {
        logInForm.style.display = "block";
        todoContainer.style.display = "none";
        logOutBtn.style.display = "none";
        todoForm.style.display = "none";
        todoForm.innerText = "";
    }
}
