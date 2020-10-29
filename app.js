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
  console.log("document.querySelectorAll returns " + changeContainerColor)
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

//get the random weather after 2 seconds with appendChild
function getWeather() {
  setTimeout(() => {
    let weatherItems = ["sunny☀️", "rainy🌧", "cloudy🌥", "partly sunny⛅️", "thunderstorm⛈", "snow⛄️"]

    let random = Math.floor(Math.random() * weatherItems.length)
    let randomWeather = weatherItems[random]
    console.log(randomWeather)
    let listEl = document.createElement("div")

    let list = document.createTextNode(randomWeather)
    listEl.appendChild(list)
    document.getElementById("addItem").appendChild(list)
  }, 1500)
}

//reset the random weather
function resetWeather() {
  location.reload()
}

//use map and filter
const showList = document.querySelector(".showList")
const addCar = document.querySelector("ul")

showList.addEventListener("click", () => {
  let cars = "<li>Volvo</li> <li>Käfer</li> <li>Trabant</li> <li>Saab</li>"
  addCar.insertAdjacentHTML("beforeend", cars)
  let newArray = cars.split(" ")
  console.log(newArray)
  let randomCar = Math.floor(Math.random() * newArray.length)
  let carItem = newArray[randomCar]
  console.log(carItem)
  //we need to loop the newArray
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === carItem) {
      newArray.splice(i, 1)
    }
  }
  console.log(newArray)
})
//remove a random car by click remove random item
