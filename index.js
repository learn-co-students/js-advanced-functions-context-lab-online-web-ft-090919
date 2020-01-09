class Employee {
  constructor(firstName, familyName, title, payPerHour) {
    this.timeInEvents = [],
      this.timeOutEvents = [],
      this.firstName = firstName,
      this.familyName = familyName
    this.title = title
    this.payPerHour = payPerHour
  }

} // Your code here

function createEmployeeRecord(row) {
  let firstName = row[0]
  let familyName = row[1]
  let title = row[2]
  let payPerHour = row[3]

  return (new Employee(firstName, familyName, title, payPerHour))

}

function createEmployeeRecords(info) {
  return info.map(function(row) {
    return createEmployeeRecord(row)
  })

}

function createTimeInEvent(timeIn) {

  let [date, time] = timeIn.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(time, 10),
    date,
  })

  return this

}

function createTimeOutEvent(timeOut) {

  let [date, time] = timeOut.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(time, 10),
    date,
  })

  return this

}


function hoursWorkedOnDate(date) {

  let inD = this.timeInEvents.find(function(e) {
    return e.date === date
  })

  let outD = this.timeOutEvents.find(function(e) {
    return (e.date === date)

  })

  return (outD.hour - inD.hour) / 100
}

function wagesEarnedOnDate(date) {
  let wagesDay = hoursWorkedOnDate.call(this, date)
  return (wagesDay * this.payPerHour)
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// function calculatePayroll(data) {
//   return data.reduce(function(employees) {
//     return employees + allWagesFor(this)
//   }, 0)
// }

function calculatePayroll(data){
    return data.reduce(function(total, day){
        return memo + allWagesFor.call(day)
    }, 0)
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec) {
    return rec.firstName === firstName
  })
}
