// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operator) {
    if (isNaN(x) || isNaN(y)) {
        alert('Invalid entry. Please enter a valid number.')
        return null
    }
    
    let result

    if (operator === '+') {
        result = x + y
    } else if (operator === '-') {
        result = x - y
    } else if (operator === '*') {
        result = x * y
    } else if (operator === '/') {
        if (y === 0) {
            alert('Cannot divide by zero.')
            return null
        }
        result = x / y
    } else {
        alert('Invalid operator. Please enter a valid operator (+, -, *, /).')
        return null
    }
    return result
}
// COLLECT FIRST NUMBER FROM USER
let x = parseFloat(prompt('Enter a number to calculate'))
if (isNaN(x)) {
    alert('Invalid entry. Please enter a valid number.')
} else {
// COLLECT SECOND NUMBER FROM USER
    let y = parseFloat(prompt('Enter a second number to calculate'))
    if (isNaN(y)) {
        alert('Invalid entry. Please enter a valid number.')
    } else {
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
        let operator = prompt('Enter the mathematical operator you want to perform (+, -, *, /)')
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
        let result = calculate(x, y, operator)
        if (result !== null) {
            alert(`The  result  of  ${x}  ${operator}  ${y} is  ${result}`)
            console.log(result)
        }
    }
}