let form = document.getElementById("party-form")
let num_people_field = document.getElementById("num-people")
let num_party_field = document.getElementById("num-party")
function spinWheel(e) {
    e.preventDefault()
    // First, validate form 

    if (!validateNumber(num_people_field.value) || !validateNumber(num_party_field.value)) {
        // TODO: Deal with error 
        return 
    }

    // party size < num people
    let num_people = num_people_field.value 
    let num_party = num_party_field.value
    
    if (num_people <= num_party) { // No point in using this app 
        // TODO: Deal with error 
        return 
    }

    // Second, Populate array with people in party
    let in_party_arr = [] 
    let in_party = document.getElementById("in-party-list").children 
    for (var i = 0; i < in_party.length; i++) {
        in_party_arr.push(in_party[i].value)
        if (in_party[i].value == '') { 
            // TODO: Error handling 
            console.log("LOG ERROR: Name field cannot be blank")
            return 
        }
    }
    // Third, Populate array with people not in party
    let not_in_party_arr = [] 
    let not_in_party = document.getElementById("not-in-party-list").children 
    for (let i = 0; i < not_in_party.length; i++) {
        not_in_party_arr.push(not_in_party[i].value)
        if (not_in_party[i].value == '') { 
            // TODO: Error handling
            console.log("LOG ERROR: Name field cannot be blank")
            return 
        }
    }

    // Fourth, make the swaps needed 
    // We assume that everyone not in the party must be put into the party (this can be changed later)
    let random_set = new Set([-1]); 
    for (let i = 0; i < not_in_party_arr.length; i++) {
        let random_index = -1
        while (random_set.has(random_index)) {
            random_index = Math.floor(Math.random() * in_party_arr.length) 
        }
        random_set.add(random_index) 
        const temp = in_party_arr[random_index] 
        in_party_arr[random_index] = not_in_party_arr[i] 
        not_in_party_arr[i] = temp  
    }

    // Repopulate the fields 
    for (let i = 0; i < in_party.length; i++) {
        in_party[i].value = in_party_arr[i] 
    }
    for (let i = 0; i < not_in_party.length; i++) {
        not_in_party[i].value = not_in_party_arr[i] 
    }
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

    // Helper function to add and remove fields from name input lists
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
            while (to_remove > 0) { // TODO: Can lead to error Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
                try {
                    field.removeChild(field.lastElementChild) 
                } catch (err) {
                    break 
                }
                to_remove--
            }
        }
    }
    
    modify_num_fields(document.getElementById("in-party-list"), "in-party-input", num_party)
    modify_num_fields(document.getElementById("not-in-party-list"), "not-in-party-input", num_people-num_party)

}


num_people_field.addEventListener("input", (fillNameFields))
num_party_field.addEventListener("input", (fillNameFields))

form.addEventListener("submit", (spinWheel))