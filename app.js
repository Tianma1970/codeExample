//the host button
const secure = document.querySelector(".button1")
console.log(location.pathname)

//the host button
const host = document.querySelector(".button2")

//reload the page
const reload = document.querySelector(".button3")

//show the path
secure.addEventListener("click", () => {
  let protocol = (document.getElementById("demo").innerHTML = location.protocol)
  if (protocol == "http:") {
    let createEl = document.createElement("h1")
    console.log(createEl)
    createEl.append("I am not secure 👎")

    const addText = document.querySelector(".text")
    addText.append(createEl)
  } else {
    alert("SURE")
  }
})

//show the host
host.addEventListener("click", () => {
  document.getElementById("host").innerHTML = location.host
})

//reload the page
reload.addEventListener("click", () => {
  location.reload()
})
