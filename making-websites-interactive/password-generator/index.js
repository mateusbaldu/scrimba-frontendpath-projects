const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.querySelector("#password-one")
let passwordTwo = document.querySelector("#password-two")

document.querySelector("#generate-pswd-btn").addEventListener('click', function() {
    let passwordSize = document.querySelector("#password-size-input")
    let size = passwordSize.value
    
    passwordOne.textContent = generatePassword(size)
    passwordTwo.textContent = generatePassword(size)
})


function generatePassword(size) {
    let arraySize = characters.length
    let password = ""
    
    for (let i = 0 ; i < size ; i++) {
        password += characters[(Math.floor(Math.random() * arraySize))]
    }
    
    return password
}

