let dateObject = new Date()

let currentDate = dateObject.getDate()

// currentDate = 24

// console.log(dateObject)

// kalender låger

console.log("merry christmas")
const items = document.querySelectorAll(".item")

// tomt array der holder styr på om lågerne er åbne
let openOrClosed = []
// check local storage

if (localStorage.days) {
    openOrClosed = JSON.parse(localStorage.getItem("days"))
}

// loop men click event på hver låge

items.forEach(function (element, index) {
    element.addEventListener("click", clickHandler)

    if (openOrClosed[index] == true) {
        element.classList.add("open")
    }

})

function clickHandler(event) {

    if (currentDate >= this.dataset.date) {

        if (this.classList.contains("open")) {
            this.classList.remove("open")
            openOrClosed[this.dataset.date - 1] = false
        }
        else {
            this.classList.add("open")
            openOrClosed[this.dataset.date - 1] = true
        }

        localStorage.setItem("days", JSON.stringify(openOrClosed))

    }
    else {
        alert("Oh uh! Denne låge kan du ikke åbne endnu. Bliver du ved, får du ingen julegaver!")
    }
}