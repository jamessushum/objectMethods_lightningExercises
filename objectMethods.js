// Car Dealership Exercise

const allCars = [
  {
      model: "Mustang",
      color: "Midnight Blue",
      year: 1976,
      length: 120,
      width: 62,
      height: 47
  },
  {
      model: "Xterra",
      color: "Forest Green",
      year: 2011,
      length: 144,
      width: 71,
      height: 55
  },
  {
      model: "Thunderbird",
      color: "Red",
      year: 2005,
      length: 115,
      width: 58,
      height: 42
  },
  {
      model: "Suburban",
      color: "Grey",
      year: 2015,
      length: 149,
      width: 73,
      height: 58
  }
]

const displayCarElement = document.querySelector('.displayCarEntries')
displayCarElement.innerHTML = "<h1>Car List</h1>"

allCars.forEach(car => {
  displayCarElement.innerHTML += "<hr/>"

  for (const entry of Object.entries(car)) {
    displayCarElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
  }
})

// const firstCar = allCars[0]

// displayCarElement.innerHTML += "<h1>Properties</h1>"
// for (const key of Object.keys(firstCar)) {
//   displayCarElement.innerHTML += `<div>${key}</div>`
// }

// displayCarElement.innerHTML += "<h1>Car List</h1>"
// allCars.forEach(
//   car => {
//     for (const value of Object.values(car)) {
//       displayCarElement.innerHTML += `<div>${value}</div>`
//     }
//   }
// )

// Hospital Bill Exercise

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const hospitalBill = {
  officeName: "Vanderbilt University Medical Center",
  streetAddress: "1211 Medical Center Drive, Nashville, TN 37232",
  doctorName: "Dr. Mike Jones",
  patientName: "Mr. Billy Walter",
  visitDate: "2020-06-24",
  amountBilled: 3000,
  dueDate: "2020-07-24"
}

console.log(hospitalBill[dateVisited])
console.log(hospitalBill[owed])
console.log(hospitalBill[patient])

console.log(Object.values(hospitalBill))

console.log(Object.keys(hospitalBill))

const displayHospitalElement = document.querySelector('.displayHospital')

displayHospitalElement.innerHTML += "<h1>Hospital Properties</h1>"
for (const key of Object.keys(hospitalBill)) {
  displayHospitalElement.innerHTML += `<span>${key}</span><br/>`
}

// Favorite Dinner Items Exercise

const favDinnerItems = [
  {
    name: "meatloaf",
    portion: "large",
    ethnicity: "american",
    vegetarian: false
  },
  {
    name: "carbonara",
    portion: "extra large",
    ethnicity: "italian",
    vegetarian: false
  },
  {
    name: "tofu pad thai",
    portion: "medium",
    ethnicity: "thailand",
    vegetarian: true
  }
]

const foodElement = document.querySelector('.food')
foodElement.innerHTML = "<h1>Favorite Dinner Items</h1>"

favDinnerItems.forEach(
  item => {
    for (const entry of Object.entries(item)) {
      foodElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
    foodElement.innerHTML += "<hr/>"
  }
)