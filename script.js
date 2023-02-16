var logInForm = document.querySelector(".loginContainer");
var emojiContaioner = document.createElement("div");
emojiContaioner.setAttribute("class", "emojiContaioner");
function registerNewUser() {
    var username = document.querySelector("#newUsername");
    var password = document.querySelector("#newUserPassword");
    var confirmPassword = document.querySelector("#confirmPassword");
    if ((confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value) === (username === null || username === void 0 ? void 0 : username.value)) {
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
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.log(error);
        });
    }
    else {
        console.log("Confirm password is not equal to password");
    }
}
function logIn() {
    succesess();
    // const username: HTMLInputElement | null = document.querySelector("#username");
    // const password: HTMLInputElement | null = document.querySelector("#password");
    // if (username && password) {
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
    //       console.log(data);
    //       succesess()
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // } else {
    //   console.log("Wrong password or username");
    // }
}
function succesess() {
    if (logInForm) {
        logInForm.style.display = "none";
        var todoContainer = document.createElement("div");
        todoContainer.setAttribute("class", "todoContainer");
        var form = document.createElement("form");
        var title = document.createElement("label");
        title.setAttribute("class", "title");
        title.innerText = "Title: ";
        var titleInput = document.createElement("input");
        titleInput.setAttribute("class", "titleInput");
        var bodyContainer_1 = document.createElement("div");
        bodyContainer_1.setAttribute("class", "bodyContainer");
        var body = document.createElement("label");
        body.setAttribute("class", "body");
        body.innerText = "Todo: ";
        var bodyInput = document.createElement("input");
        bodyInput.setAttribute("class", "bodyInput");
        var emojiDiv_1 = document.createElement("div");
        emojiDiv_1.setAttribute("class", "emojiDiv");
        fetch("https://emoji-api.com/emojis/winking-face-with-tongue?access_key=50ba7358ffceaa5c8a0cc996ecc01b052e4d7ceb")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var emoji = data_1[_i];
                emojiDiv_1.innerText = emoji.character;
            }
        });
        emojiDiv_1.addEventListener("mouseover", function () { getEmoji(bodyContainer_1, emojiDiv_1); });
        var btn = document.createElement("button");
        btn.setAttribute("class", "todoBtn");
        btn.setAttribute("type", "button");
        btn.innerText = "Submit";
        btn.addEventListener("click", createTodo);
        document.body.append(todoContainer);
        todoContainer.append(form);
        form.append(title, titleInput, bodyContainer_1, btn);
        bodyContainer_1.append(body, bodyInput, emojiDiv_1);
    }
    else {
        console.log("there is no form");
    }
}
function getEmoji(bodyContainer, emojiDiv) {
    emojiContaioner.innerHTML = "";
    fetch("https://emoji-api.com/categories/smileys-emotion?access_key=50ba7358ffceaa5c8a0cc996ecc01b052e4d7ceb")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        data.slice(0, 40).forEach(function (element) {
            var btn = document.createElement("button");
            btn.setAttribute("class", "todoBtn");
            btn.setAttribute("type", "button");
            btn.addEventListener("click", function () {
                emojiDiv.innerHTML = element.character;
            });
            btn.innerText = element.character;
            emojiContaioner.append(btn);
            bodyContainer.append(emojiContaioner);
        });
    });
    emojiContaioner.addEventListener("mouseleave", function () { emojiContaioner.innerHTML = ""; });
}
function createTodo() {
    var title = document.querySelector(".titleInput");
    var todo = document.querySelector(".bodyInput");
    if (title && todo) {
        fetch("http://localhost:3000/products/post/", {
            method: "POST",
            body: JSON.stringify({
                title: title === null || title === void 0 ? void 0 : title.value,
                password: todo === null || todo === void 0 ? void 0 : todo.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.log(error);
        });
    }
    else {
        console.log("Inputs is empty");
    }
}
function logOut() {
}
