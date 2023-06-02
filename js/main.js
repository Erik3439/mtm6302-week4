console.log("js file added")

const region ="Canada"

if(region === "Canada")
console.log("you are seeing Canadian verison of the site")

let price = 20
const shippinFee = 15
let cartTotal

if (price >= 50){
    cartTotal = price
} 
else {
    cartTotal = price + shippinFee
}

//console.log(cartTotal)

document.getElementById("cart1").innerHTML += "your cart total is " + cartTotal

//reassiging
price = 105
const discount = 0.15

if(price >=100){
    cartTotal = price - (price * discount)
}
else if (price >= 50){
    cartTotal = price
}
else {
    cartTotal = price + shippinFee
}

console.log(cartTotal)

document.getElementById("cart2").innerHTML += "your cart total is " + cartTotal


/* Switch */

let planet = "Venus"
let message 

switch (planet){
    case "Earth" :
        message = "Welcome to the third planet"
        break
        case "Mars" :
            message = " Welcom to the red planet"
            break
            case "jupiter" :
            message = "Welcome to the largest planet"
            break
            default :
            message = `You are on ${planet}. we do not service this planet yet!`

}
console.log(message)


document.getElementById("Planet").innerHTML += message

//Switch EX 2 with stacking cases
let answer = "d"

switch(answer){
case "a":
case "b" :
case "d" :
    document.getElementById("Quiz").innerHTML += "Incorrect, "
    break
            case "c" :
            document.getElementById("Quiz").innerHTML += "perfect, You got it "
}

//function

function myName(){
    return "Erik"
}
let firstName = myName()

document.querySelector(".container h1").innerHTML += " " + firstName

function changeBg(bgColor){
    document.querySelector("body").style.backgroundColor = bgColor
    //to test this function go to console and type changeBg("cyan")
}
function textResize(newFontSize){
    document.querySelector('html').style.fontSize = newFontSize
}