// ----- Imported from HTML Document

const logInForm: HTMLElement | null = document.querySelector(".loginContainer")
const header: HTMLElement | null = document.querySelector("header")
const main: HTMLElement | null = document.querySelector("main")

// ----- Created global variables

const logOutBtn = document.createElement("button")
logOutBtn.setAttribute("class", "logOutBtn")
logOutBtn.innerText = "Log out"
logOutBtn.addEventListener("click", logOut)
header?.append(logOutBtn)

const todoContainer = document.createElement("div")
todoContainer.setAttribute("class", "todoContainer")

// - Belongs to "createTodo" Function
const todoArray: Object[] = []

const todoList: HTMLElement | null = document.createElement("div")
todoList.setAttribute("class", "todoList")

/* const title = document.createElement("label")
title.setAttribute("class", "title")
title.innerText = "Title: " */

const titleInput = document.createElement("input")
titleInput.setAttribute("class", "titleInput")
titleInput.placeholder = 'Enter List Title'

const todoForm = document.createElement("div")
todoForm.setAttribute('class', 'createTodo--Container')

const hr = document.createElement("hr")
hr.setAttribute('class', 'hr')

const ul = document.createElement("ul")
ul.setAttribute("class", "create-todo-ul")


const newTodoItems = document.createElement("div")
newTodoItems.setAttribute("class", "newTodoItems")







// -----Function to register a new user and saves it in DB

function registerNewUser() {
  try {
    // - Imports from HTML Document
    const username: HTMLInputElement | null = document.querySelector("#newUsername");
    const password: HTMLInputElement | null = document.querySelector("#newUserPassword");
    const confirmPassword: HTMLInputElement | null = document.querySelector("#confirmPassword");

    // - Checks if password and confirmed password is the same
    if (password?.value === confirmPassword?.value) {

      // - POST to connect with backend
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
  } catch (error) {
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
  succesess()
}


// ----- Function for successful user login

function succesess() {
  // - Checks if logInForm is true
  if (logInForm) {
    // - Makes loginForm disappear and todoContainer to appear
    logInForm.style.display = "none"
    todoContainer.style.display = "block"
    logOutBtn.style.display = "block"
    todoForm.style.display = "block"

    // - Creates elements


    const bodyContainer = document.createElement("div")
    bodyContainer.setAttribute("class", "bodyContainer")

    const body = document.createElement("label")
    body.setAttribute("class", "body")
    body.innerText = "Todo: "

    const bodyInput = document.createElement("input")
    bodyInput.setAttribute("class", "bodyInput")

    const emojiDiv = document.createElement("div")
    const emojiP = document.createElement("div")
    emojiP.setAttribute("class", "emojiP")
    emojiDiv.setAttribute("class", "emojiDiv")
    fetch("https://emoji-api.com/emojis/winking-face-with-tongue?access_key=50ba7358ffceaa5c8a0cc996ecc01b052e4d7ceb")
      .then(response => response.json())
      .then(data => {
        for (const emoji of data) {
          emojiP.innerText = emoji.character
        }
      })
      emojiDiv.append(emojiP)

    emojiDiv.addEventListener("click", () => { getEmoji(bodyContainer, emojiDiv) })

    const colorPicker = document.createElement("div")
    colorPicker.setAttribute("class", "colorPicker")

    colorPicker.addEventListener("click", () => { getColor(bodyContainer, colorPicker) })



    const addTodoBtn = document.createElement("button")
    addTodoBtn.setAttribute("class", "todoBtn")
    addTodoBtn.setAttribute("type", "button")
    addTodoBtn.innerText = "Add Todo"
    addTodoBtn.addEventListener("click", () => createTodo(colorPicker, bodyInput, emojiDiv))

    bodyContainer.append(body, bodyInput, emojiDiv, colorPicker)
    todoForm.append(bodyContainer, addTodoBtn)
    main?.append(todoForm)

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
        btn.setAttribute("class", "emojiBtn")
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

async function getColor(bodyContainer: HTMLDivElement, colorPicker: HTMLDivElement) {
  const colorContainer = document.createElement("div")
  colorContainer.setAttribute("class", "colorContaioner")
  colorContainer.innerHTML = ""


  const response = await fetch("./colors.json")
  const data: any = await response.json()



  await [data].forEach((element: any) => {
    element.forEach((color: string) => {



      const btn = document.createElement("button")
      btn.setAttribute("class", "colorBtn")
      btn.setAttribute("type", "button")
      btn.addEventListener("click", () => {


        colorPicker.style.backgroundColor = color
      })


      btn.style.backgroundColor = color
      colorContainer.append(btn)
      bodyContainer.append(colorContainer)
    })
  })


  colorContainer.addEventListener("mouseleave", () => {
    colorContainer.style.display = "none"
  })


}


// ----------------------- SUBMITBTN 
  const submitBtn = document.createElement("button")
  submitBtn.setAttribute("class", "submitBtn")
  submitBtn.addEventListener("click", () => { createList(titleInput) })
  submitBtn.innerText = 'Save List'
  
function createTodo(colorPicker: HTMLDivElement, bodyInput: HTMLInputElement, emojiDiv: HTMLDivElement) {

  const newTodo = {
    todo: bodyInput.value,
    emoji: emojiDiv.innerText,
    color: colorPicker.style.backgroundColor
  }
  
  todoArray.push(newTodo)



  const li = document.createElement("li")
  li.setAttribute("class", "create-todo-li")
  li.style.color = colorPicker.style.backgroundColor

  li.append(newTodo.todo, newTodo.emoji)
  ul.append(li)


  newTodoItems.append(hr, titleInput, ul, submitBtn)
  todoForm.appendChild(newTodoItems)
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



function createList(titleInput: HTMLInputElement) {

  if (titleInput) {

    fetch("http://localhost:3000/products/post/", {
      method: "POST",
      body: JSON.stringify({
        title: titleInput?.value,
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
  } else {
    console.log("Inputs is empty");
  }
}


function logOut() {

  if (logInForm) {
    logInForm.style.display = "block"
    todoContainer.style.display = "none"
    logOutBtn.style.display = "none"
    todoForm.style.display = "none"
    todoForm.innerText = ""
  }
}