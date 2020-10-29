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

//show some numbers
const numbers = [9, 25, 36, 81]

function showNumbers() {
  const showNumbers = document.querySelector(".numbers")
  showNumbers.insertAdjacentText("beforeend", numbers)
}

// use map to create a new array with sqrt of the numbers
function showSquarerRoot() {
  //define the element where the new array has to be
  const showSqrtNumber = document.querySelector(".sqrtNumbers")
  let mathSqrt = numbers.map(Math.sqrt)
  showSqrtNumber.insertAdjacentText("beforeend", mathSqrt)
}

//display the first number in the array by using filter
function showFirst() {
  //define the element where the first number of the array to be inserted
  const showFirstNumber = document.querySelector(".showFirstNumber")

  let firstNumber = numbers.filter(number1)
  function number1(number) {
    return number < 25
  }
  console.log(firstNumber)
  showFirstNumber.insertAdjacentText("beforeend", firstNumber)
}
