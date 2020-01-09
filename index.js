/* Your Code Here */

function createEmployeeRecord(arr) {
    let newRecord = {}
    newRecord.firstName = arr[0]
    newRecord.familyName = arr[1]
    newRecord.title = arr[2]
    newRecord.payPerHour = arr[3]
    newRecord.timeInEvents = []
    newRecord.timeOutEvents = []    
    return newRecord 
}

function createEmployeeRecords(arr) {
let newRecords = 
arr.map(a => {
    // return a as an object 
    return createEmployeeRecord(a)
})
return newRecords 
}

function createTimeInEvent(dateStamp) {
    let timeIn = {}
    let [date, time] = dateStamp.split(' ')

    timeIn.type = "TimeIn"
    timeIn.date = date
    timeIn.hour = parseInt(time, 10)

    this.timeInEvents.push(timeIn)

    let updatedRecord = this
    return updatedRecord 
}

function createTimeOutEvent(dateStamp) {
    let timeOut = {}
    let [date, time] = dateStamp.split(' ')

    timeOut.type = "TimeOut"
    timeOut.date = date
    timeOut.hour = parseInt(time, 10)

    this.timeOutEvents.push(timeOut)

    let updatedRecord = this
    return updatedRecord 
}

function hoursWorkedOnDate(dateStamp) {
    let date = dateStamp.slice(0, 10)

    let timeIn = this.timeInEvents.find(d => d.date === date)
    let timeOut = this.timeOutEvents.find(d => d.date === date)

    let hours = (timeOut.hour - timeIn.hour)/100 
    return hours 
}

function wagesEarnedOnDate(date) {
    let pay = (this.payPerHour) * (hoursWorkedOnDate.call(this, date))
    return pay 
}

// function allWagesFor(newRecord) {
// let dateArray = newRecord["timeInEvents"].map(d => d.date)

// return dateArray.reduce((allPay, date) => allPay + wagesEarnedOnDate(newRecord, date), 0)
// }

function findEmployeeByFirstName(arr, name = "") {
    let result = arr.find(n => n.firstName = name)
    return result 
}

function calculatePayroll(arr) {
    return arr.reduce((total, employee) => total + (allWagesFor.call(employee)), 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}