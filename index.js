/* Your Code Here */

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

function createEmployeeRecord(empRecord) { 
  return { 
    firstName: empRecord [0],
    familyName: empRecord [1],
    title: empRecord [2],
    payPerHour: empRecord [3], 
    timeInEvents: [], 
    timeOutEvents: []
  } 
} 

function createEmployeeRecords(empRecord) {
    let empRecords = empRecord.map((emp) => {
        return createEmployeeRecord(emp)
    });
    return empRecords
}

function createTimeInEvent(dateEvent) {
    let [date, hour] = dateEvent.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date: date
    })
    return this
}

function createTimeOutEvent(dateEvent) { 
  let [date, hour] = dateEvent.split (' ')
  
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour,10),
    date: date 
  })
  return this 
} 

function hoursWorkedOnDate(dateEvent) {
    let timeIn = this.timeInEvents.find((e) => {
      return e.date == dateEvent 
      
    })
    let timeOut = this.timeOutEvents.find((e) => {
      return e.date == dateEvent
    })
      return (timeOut.hour - timeIn.hour) / 100
} 

function wagesEarnedOnDate(dateEvent) { 
  return hoursWorkedOnDate.call(this, dateEvent) * this.payPerHour
} 

function findEmployeeByFirstName(collection, firstName) {
    let employee = collection.find((emp) => {
      return emp.firstName == firstName
    })
      return employee
}

function calculatePayroll(empRecords) {
    let total = empRecords.reduce((acc, cv) => {
        return acc + allWagesFor.call(cv)
    }, 0 )
    return total
}