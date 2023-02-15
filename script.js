var logInForm = document.querySelector(".loginContainer");
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
    var username = document.querySelector("#username");
    var password = document.querySelector("#password");
    if (username && password) {
        succesess();
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
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log(data);
        //     succesess()
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
        // } else {
        //   console.log("Wrong password or username");
    }
}
function succesess() {
    if (logInForm) {
        logInForm.style.display = "none";
        var form = document.createElement("form");
        var title = document.createElement("label");
        var titleInput = document.createElement("input");
        var body = document.createElement("label");
        var bodyInput = document.createElement("input");
        var btn = document.createElement("button");
        title.setAttribute("class", "title");
        titleInput.setAttribute("class", "titleInput");
        body.setAttribute("class", "body");
        bodyInput.setAttribute("class", "bodyInput");
        btn.setAttribute("class", "todoBtn");
        btn.addEventListener("click", createTodo);
        document.body.append(form);
        form.append(title, titleInput, body, bodyInput, btn);
    }
    else {
        console.log("there is no form");
    }
}
function createTodo() {
    // <--------------------------------------------------------------------------HÄR ÄR VI!!!!!
}
function logOut() {
}
