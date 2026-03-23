let homePoints = 0
let guestPoints = 0
let homeCounter = document.getElementById("home-counter")
let guestCounter = document.getElementById("guest-counter")


function plusOne() {
    if (event.target.closest('.home-counter-buttons')) {
        homePoints += 1
        homeCounter.textContent = homePoints
    } else {
        guestPoints += 1
        guestCounter.textContent = guestPoints
    }
}

function plusTwo() {
    if (event.target.closest('.home-counter-buttons')) {
        homePoints += 2
        homeCounter.textContent = homePoints
    } else {
        guestPoints += 2
        guestCounter.textContent = guestPoints
    }
}

function plusThree() {
    if (event.target.closest('.home-counter-buttons')) {
        homePoints += 3
        homeCounter.textContent = homePoints
    } else {
        guestPoints += 3
        guestCounter.textContent = guestPoints
    }    
}

function resetGame() {
    homePoints = 0
    guestPoints = 0
    homeCounter.textContent = 0
    guestCounter.textContent = 0
}