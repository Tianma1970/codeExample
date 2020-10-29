//the host button
const secure = document.querySelector(".button1")

//the host button
const host = document.querySelector(".button2")

//reload the page
const reload = document.querySelector(".button3")

//show the location.protocol
secure.addEventListener("click", () => {
  if (location.protocol == "http:") {
    const createEl = document.createElement("h1")

    createEl.append("I am not secure 👎 because I am " + location.protocol)

    const addText = document.querySelector(".text")
    addText.append(createEl)
  } else {
    const createEl = document.createElement("h1")

    createEl.append("I AM SECURE 👍 because I am " + location.protocol)
    const addText = document.querySelector(".text")
    addText.append(createEl)
  }
})

//show the host
host.addEventListener("click", () => {
  let createHostEl = document.createElement("h1")

  createHostEl.append("My host is " + location.host)
  const addHost = document.querySelector(".text")
  addHost.append(createHostEl)
})

//reload the page
reload.addEventListener("click", () => {
  location.reload()
})
//use document.querySelectorAll for changing color
function changeColor() {
  let changeContainerColor, i
  changeContainerColor = document.querySelectorAll(".wrapper")
  console.log(changeContainerColor)
  for (i = 0; i < changeContainerColor.length; i++) {
    changeContainerColor[i].style.backgroundColor = "fuchsia"
  }
}

//use document.querySelectorAll for reset color
function resetColor() {
  let resetColor, i
  resetColor = document.querySelectorAll(".wrapper")
  for (i = 0; i < resetColor.length; i++) {
    resetColor[i].style.backgroundColor = "grey"
  }
}

//appendChild
function addList() {
  let listEl = document.createElement("div")
  let list = document.createTextNode("not so nice 🥴")
  listEl.appendChild(list)
  document.getElementById("addItem").appendChild(list)
}
