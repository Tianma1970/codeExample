//the host button
const secure = document.querySelector(".button1")

//the host button
const host = document.querySelector(".button2")

//reload the page
const reload = document.querySelector(".button3")

//show the path
secure.addEventListener("click", () => {
  let protocol = (document.getElementById("demo").innerHTML = location.protocol)
  if (protocol == "http:") {
    let createEl = document.createElement("h1")

    createEl.append("I am not secure 👎 because I am " + location.protocol)

    const addText = document.querySelector(".text")
    addText.append(createEl)
  } else {
    alert("I AM SECURE 👍 because I am " + location.protocol)
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

//use document.querySelectorAll

const changeButtonColour = document.querySelectorAll("buttons")
