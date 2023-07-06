const stud_one = {
    firstName: "Charles",
    lastName: "Egesionu",
    age: 23,
    location: "Canada"
}

const stud_two = {
    firstName: "Jane",
    lastName: "Ugochukwu",
    age: 23,
    location: "UK"
}

let studentsList = [stud_one, stud_two]

const stud_table = document.createElement("table")
const stud_body = document.createElement("tbody")

studentsList.forEach((list) =>{
    const studFirstName = document.createElement("td");
    const studLocation = document.createElement("td")
    const tableRow = document.createElement("tr")

    studFirstName.textContent = list.firstName
    studLocation.textContent = list.location
    tableRow.appendChild(studFirstName)
    tableRow.appendChild(studLocation)
    stud_body.appendChild(tableRow)
})

stud_table.appendChild(stud_body)
document.body.appendChild(stud_table)