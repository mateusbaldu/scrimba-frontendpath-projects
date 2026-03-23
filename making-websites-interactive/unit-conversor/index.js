/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn")
const userInput = document.querySelector("#user-input")
const resultLength = document.querySelector("#result-length")
const resultVolume = document.querySelector("#result-volume")
const resultMass = document.querySelector("#result-mass")

const meterInFeet = 3.281
const literInGallon = 0.264
const kiloInPound = 2.204

convertBtn.addEventListener("click", function() {
    render(userInput.value)
})

function render(userInput) {
    let string = ""
    
    string = valueConversorToString(userInput, "length")
    resultLength.innerHTML = `<p>${string}</p>`
    
    string = valueConversorToString(userInput, "volume")
    resultVolume.innerHTML = `<p>${string}</p>`
    
    string = valueConversorToString(userInput, "mass")
    resultMass.innerHTML = `<p>${string}</p>`
}

function valueConversorToString(number, unit) {
    let result = ""
    switch(unit) {
        case "length":
            let feet = (number * meterInFeet).toFixed(3)
            let meter = (number / meterInFeet).toFixed(3)
            result = `${number} meters = ${feet} feet | ${number} feet = ${meter} meters`
            break;
        
        case "volume":
            let liters = (number / literInGallon).toFixed(3)
            let gallons = (number * literInGallon).toFixed(3)
            result = `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters`
            break;
        
        case "mass":
            let pounds = (number * kiloInPound).toFixed(3)
            let kilograms = (number / kiloInPound).toFixed(3)
            result = `${number} kilograms = ${pounds} pounds | ${number} pounds = ${kilograms} kilograms`
            break;
    }
    
    return result
}