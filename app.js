//the host button
const addPath = document.querySelector(".button1")

//the host button
const host = document.querySelector(".button2")

//reload the page
const reload = document.querySelector(".button3")

//show the path
addPath.addEventListener("click", () => {
  document.getElementById("demo").innerHTML = location.pathname
})

//show the host
host.addEventListener("click", () => {
  document.getElementById("host").innerHTML = location.host
})

//reload the page
reload.addEventListener("click", () => {
  location.reload()
})
