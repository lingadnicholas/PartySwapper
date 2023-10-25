let form = document.getElementById("party-form")
let num_people = document.getElementById("num-people")

function spinWheel() {
    // TODO 

    // First, validate form 

    // Second, Populate array with people in party

    // Third, Populate array with people not in party

    // Fourth, make the swaps needed 
}

// numbers should be positive integers 
function validateNumber(num) {
    return (Number.isInteger(num) && num > 0)
}
// When number of people gets populated, add party size field
num_people.addEventListener("input", (e) => {
    e.preventDefault() 
    if (validateNumber(Number(num_people.value))) {
        document.getElementById("party-size-field").innerHTML = 
        '<label>Party size: </label><br><input type="number" id="num-party"><br>'
    }
    else {
        document.getElementById("party-size-field").innerHTML = 
        ''
    }
})

// When number of people and party size are populated, add the correct number of fields for names
form.addEventListener("submit", (spinWheel))