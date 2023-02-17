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
// ----- Created global variables
const todoContainer = document.createElement("div");
todoContainer.setAttribute("class", "todoContainer");
// - Belongs to "createTodo" Function
const todoList = document.createElement("div");
todoList.setAttribute("class", "todoList");
const ul = document.createElement("ul");
ul.setAttribute("class", "create-todo-ul");
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
    succesess();
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
}
// ----- Function for successful user login
function succesess() {
    // - Checks if logInForm is true
    if (logInForm) {
        // - Makes loginForm disappear and todoContainer to appear
        logInForm.style.display = "none";
        todoContainer.style.display = "block";
        // - Creates elements
        const todoForm = document.createElement("form");
        const title = document.createElement("label");
        title.setAttribute("class", "title");
        title.innerText = "Title: ";
        const titleInput = document.createElement("input");
        titleInput.setAttribute("class", "titleInput");
        const bodyContainer = document.createElement("div");
        bodyContainer.setAttribute("class", "bodyContainer");
        const body = document.createElement("label");
        body.setAttribute("class", "body");
        body.innerText = "Todo: ";
        const bodyInput = document.createElement("input");
        bodyInput.setAttribute("class", "bodyInput");
        bodyInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                createTodo(colorPicker, bodyInput, emojiDiv);
            }
        });
        const emojiDiv = document.createElement("div");
        emojiDiv.setAttribute("class", "emojiDiv");
        fetch("https://emoji-api.com/emojis/winking-face-with-tongue?access_key=50ba7358ffceaa5c8a0cc996ecc01b052e4d7ceb")
            .then(response => response.json())
            .then(data => {
            for (const emoji of data) {
                emojiDiv.innerText = emoji.character;
            }
        });
        emojiDiv.addEventListener("mouseover", () => { getEmoji(bodyContainer, emojiDiv); });
        const colorPicker = document.createElement("div");
        colorPicker.setAttribute("class", "colorPicker");
        colorPicker.addEventListener("mouseover", () => { getColor(bodyContainer, colorPicker); });
        const btn = document.createElement("button");
        btn.setAttribute("class", "todoBtn");
        btn.setAttribute("type", "button");
        btn.innerText = "Submit";
        // btn.addEventListener("click", createList)
        document.body.append(todoContainer);
        todoContainer.append(todoForm);
        todoForm.append(title, titleInput, bodyContainer, btn);
        bodyContainer.append(body, bodyInput, emojiDiv, colorPicker);
    }
    else {
        console.log("there is no form");
    }
}
function getEmoji(bodyContainer, emojiDiv) {
    const emojiContaioner = document.createElement("div");
    emojiContaioner.setAttribute("class", "emojiContaioner");
    emojiContaioner.innerHTML = "";
    fetch("https://emoji-api.com/categories/smileys-emotion?access_key=50ba7358ffceaa5c8a0cc996ecc01b052e4d7ceb")
        .then(response => response.json())
        .then(data => {
        data.slice(0, 40).forEach((element) => {
            const btn = document.createElement("button");
            btn.setAttribute("class", "emojiBtn");
            btn.setAttribute("type", "button");
            btn.addEventListener("click", () => {
                emojiDiv.innerHTML = element.character;
            });
            btn.innerText = element.character;
            emojiContaioner.append(btn);
            bodyContainer.append(emojiContaioner);
        });
    });
    emojiContaioner.addEventListener("mouseleave", () => {
        emojiContaioner.style.display = "none";
    });
}
function getColor(bodyContainer, colorPicker) {
    return __awaiter(this, void 0, void 0, function* () {
        const colorContaioner = document.createElement("div");
        colorContaioner.setAttribute("class", "colorContaioner");
        colorContaioner.innerHTML = "";
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
                colorContaioner.append(btn);
                bodyContainer.append(colorContaioner);
            });
        });
        colorContaioner.addEventListener("mouseleave", () => {
            colorContaioner.style.display = "none";
        });
    });
}
function createTodo(colorPicker, bodyInput, emojiDiv) {
    const li = document.createElement("li");
    li.setAttribute("class", "create-todo-li");
    li.style.color = colorPicker.style.backgroundColor;
    if (todoList) {
        todoContainer.append(todoList);
        todoList.append(ul);
        ul.append(li);
        li.append(bodyInput.value, emojiDiv.innerText);
    }
}
// function createList() {
//   const title: HTMLInputElement | null = document.querySelector(".titleInput");
//   const todo: HTMLInputElement | null = document.querySelector(".bodyInput");
//   if (title && todo) {
//     fetch("http://localhost:3000/products/post/", {
//       method: "POST",
//       body: JSON.stringify({
//         title: title?.value,
//         todo: todo?.value
//       }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   } else {
//     console.log("Inputs is empty");
//   }
// }
function logOut() {
}
