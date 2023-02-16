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
  succesess()
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

    logInForm.style.display = "none"

    const todoContainer = document.createElement("div")
    todoContainer.setAttribute("class", "todoContainer")

    const form = document.createElement("form")

    const title = document.createElement("label")
    title.setAttribute("class", "title")
    title.innerText = "Title: "

    const titleInput = document.createElement("input")
    titleInput.setAttribute("class", "titleInput")

    const bodyContainer = document.createElement("div")
    bodyContainer.setAttribute("class", "bodyContainer")

    const body = document.createElement("label")
    body.setAttribute("class", "body")
    body.innerText = "Todo: "

    const bodyInput = document.createElement("input")
    bodyInput.setAttribute("class", "bodyInput")

    const emojiDiv = document.createElement("div")
    emojiDiv.setAttribute("class", "emojiDiv")
    fetch("https://emoji-api.com/emojis/winking-face-with-tongue?access_key=50ba7358ffceaa5c8a0cc996ecc01b052e4d7ceb")
      .then(response => response.json())
      .then(data => {
        for (const emoji of data) {
          emojiDiv.innerText = emoji.character
        }
      })

    emojiDiv.addEventListener("mouseover", () => { getEmoji(bodyContainer, emojiDiv) })

    const colorPicker = document.createElement("div")
    colorPicker.setAttribute("class", "colorPicker")
    colorPicker.addEventListener("mouseover", () => { getColor }) // <-------------------- 
    
   

    const btn = document.createElement("button")
    btn.setAttribute("class", "todoBtn")
    btn.setAttribute("type", "button")
    btn.innerText = "Submit"
    btn.addEventListener("click", createTodo)

    document.body.append(todoContainer)
    todoContainer.append(form)
    form.append(title, titleInput, bodyContainer, colorPicker, btn)
    bodyContainer.append(body, bodyInput, emojiDiv)

  } else {
    console.log("there is no form");

  }
}

function getEmoji(bodyContainer: HTMLDivElement, emojiDiv: HTMLDivElement) {
  const emojiContaioner = document.createElement("div")
  emojiContaioner.setAttribute("class", "emojiContaioner")
  emojiContaioner.innerHTML = ""

  fetch("https://emoji-api.com/categories/smileys-emotion?access_key=50ba7358ffceaa5c8a0cc996ecc01b052e4d7ceb")
    .then(response => response.json())
    .then(data => {
      data.slice(0, 40).forEach((element: any) => {

        const btn = document.createElement("button")
        btn.setAttribute("class", "todoBtn")
        btn.setAttribute("type", "button")
        btn.addEventListener("click", () => {


          emojiDiv.innerHTML = element.character
        })


        btn.innerText = element.character
        emojiContaioner.append(btn)
        bodyContainer.append(emojiContaioner)
      });
    })

  emojiContaioner.addEventListener("mouseleave", () => { 
    emojiContaioner.style.display = "none" 
  })
}

function getColor () {
// <------------------------------------------------------------------- Hämta jsonfilen och skapa knappar för varje färg som sätter samma färg på knapparna!!!! 
}

function createTodo() {

  const title: HTMLInputElement | null = document.querySelector(".titleInput");
  const todo: HTMLInputElement | null = document.querySelector(".bodyInput");

  if (title && todo) {

    fetch("http://localhost:3000/products/post/", {
      method: "POST",
      body: JSON.stringify({
        title: title?.value,
        password: todo?.value
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
    console.log("Inputs is empty");
  }
}


function logOut() {

}
