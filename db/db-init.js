const { Sequelize } = require('sequelize');

const  {PostionSchema, EmployeeSchema} = require('./schemas')

// get json files for raw data
employees_birdseye = require("./raw_data/Birdseye_Entertainment-employees.json")
employees_fuzzy = require("./raw_data/Fuzzy_Alpaca_Consulting-employees.json")
employees_techgenix = require("./raw_data/Techgenix-employees.json")
positions_birdseye = require("./raw_data/Birdseye_Entertainment-positions.json")
positions_fuzzy = require("./raw_data/Fuzzy_Alpaca_Consulting-positions.json")
positions_techgenix = require("./raw_data/Techgenix-positions.json")

// prepare data to be uploaded to postgres
employees = [...employees_techgenix, ...employees_birdseye, ...employees_fuzzy]
positions = [
    ...addField(positions_birdseye, "companyName", "Birdseye Entertainment"), 
    ...addField(positions_techgenix, "companyName", "Techgenix"),
    ...addField(positions_fuzzy, "companyName", "Fuzzy Alpaca Consulting")
]
 
// initialize connection with sql server
const sequelize = new Sequelize(
    'postgres://root:root@db:5432/test_db',
    {logging: false})

// Create models for each table
const Position = sequelize.define('Positions', PostionSchema)
const Employee = sequelize.define('Employees', EmployeeSchema)


// Connects to SQL server, inserts raw data and closes connection
async function main(){
    // try authenticating 10 times, waiting 200 ms between each retry
     sequelize.authenticate()
    .then(() => console.log("\nConnected with SQL server! ⚡\n"))
    .then(createEmployeeTable)
    .then(createPositionsTable)
    .then(() => console.log("Success, data is live now! 🚀\n"))
    .then(() => {sequelize.close()})
    .catch(console.error)
}

// Creates table for employees and uploads example data
async function createEmployeeTable(){
    return Employee.sync({ force: true })
    .then(() => Employee.bulkCreate(employees))
    .then(() => {console.log("Employee data pushed!☑️\n")})
    .catch(console.error)
}

// Creates table for positions and uploads example data
async function createPositionsTable(){
    return Position.sync({ force: true })
    .then(() => Position.bulkCreate(positions))
    .then(() => {console.log("Position data pushed! ☑️\n")})
    .catch(console.error)

}

// helper function to add a field to each object in a list of objects
function addField(l, name, value){
    return l.map(obj=> ({ ...obj, [name]: value }))
}

setTimeout(main, 5000);