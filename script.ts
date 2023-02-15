const logInForm: HTMLElement | null = document.querySelector(".loginContainer")

function registerNewUser(): void {
    const username: HTMLInputElement | null = document.querySelector("#newUsername");
    const password: HTMLInputElement | null = document.querySelector("#newUserPassword");
    const confirmPassword: HTMLInputElement | null = document.querySelector("#confirmPassword");
  
    if (confirmPassword?.value === username?.value) {
        
      fetch("http://localhost:3000/products/post/", {
        method: "POST",
        body: JSON.stringify({
          username: username?.value,
          password: password?.value
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
    } else {
      console.log("Confirm password is not equal to password");
    }
  }
  

function logIn() {
    const username: HTMLInputElement | null = document.querySelector("#username");
    const password: HTMLInputElement | null = document.querySelector("#password");
  
    if (username && password) {
        succesess()
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
    logInForm.style.display = "none"

    const form = document.createElement("form")
    const title = document.createElement("label")
    const titleInput = document.createElement("input")
    const body = document.createElement("label")
    const bodyInput = document.createElement("input")
    const btn = document.createElement("button")

    title.setAttribute("class", "title")
    titleInput.setAttribute("class", "titleInput")
    body.setAttribute("class", "body")
    bodyInput.setAttribute("class", "bodyInput")
    btn.setAttribute("class", "todoBtn") 
    btn.addEventListener("click",createTodo) 

    document.body.append(form)
    form.append(title, titleInput,body,bodyInput, btn)
    } else {
        console.log("there is no form");
        
    }
}



function createTodo() {
    // <--------------------------------------------------------------------------HÄR ÄR VI!!!!!
}

function logOut() {

}
