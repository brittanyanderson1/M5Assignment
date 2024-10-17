//STEP 1
function halfNumber(num) {
    let result = num /2
    console.log(`${num} divided by 2 is the same as ${result} is half of ${num}`)
}
//STEP 2
function squareNumber(num) {
    let a = num
    let square = num ** 2
    console.log(`${square} is ${num} squared`) 
}
//STEP 3
function percentOf(a, b) {
let percent = (a/b*100).toFixed(2)
    console.log(`${a} out of ${b} is ${percent} percent`)
}
//STEP 4
function findModulus(num1, num2) {
    let modulus = num2 % num1
    console.log(`${modulus} is the remainder of ${num2} divided by ${num1}`)
}
