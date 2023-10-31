let form = document.getElementById("party-form")
let num_people_field = document.getElementById("num-people")
let num_party_field = document.getElementById("num-party")
function spinWheel() {
    // TODO 

    // First, validate form 
    // party size < num people


    // Second, Populate array with people in party

    // Third, Populate array with people not in party

    // Fourth, make the swaps needed 
}

// numbers should be positive integers 
function validateNumber(num) {
    return (Number.isInteger(Number(num)) && Number(num) > 0)
}

function fillNameFields() {
    
    if (num_people_field.value == null || num_party_field.value == null) {
        return
    }
    if (!validateNumber(num_people_field.value) || !validateNumber(num_party_field.value)) {
        console.log("LOG: Either number of people or party size are invalid")
        return 
    }
    let num_people = num_people_field.value 
    let num_party = num_party_field.value


    function modify_num_fields(field, class_name, num) {
        num_children = field.childElementCount 
        if (num_children < num) { // Add text input fields  
            to_add = num - num_children
            console.log(to_add)
            while (to_add > 0) {
                let new_child = document.createElement("input")
                new_child.type = "text" 
                new_child.className = class_name
                field.appendChild(new_child)
                to_add-- 
            }
        } else if (num_children > num) { // Remove text input fields 
            to_remove = num_children - num 
            while (to_remove > 0) {
                field.removeChild(field.lastElementChild) 
                to_remove--
            }
        }
    }
    
    modify_num_fields(document.getElementById("in-party-list"), "in-party-input", num_party)
    modify_num_fields(document.getElementById("not-in-party-list"), "not-in-party-input", num_people-num_party)

}


// TODO: 
// When number of people and party size are populated, add the correct number of fields for names
num_people_field.addEventListener("input", (fillNameFields))
num_party_field.addEventListener("input", (fillNameFields))

form.addEventListener("submit", (spinWheel))