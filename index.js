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

let createEmployeeRecord = function (arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function (arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(createEmployeeRecord(arr[i]))
    }
    return newArr
}

let createTimeInEvent = function (dateStamp) {
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    }
    this.timeInEvents.push(timeIn)
    return this
}

let createTimeOutEvent = function (dateStamp) {
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    }
    this.timeOutEvents.push(timeOut)
    return this
}

let hoursWorkedOnDate = function (date) {
    let start = this.timeInEvents.find(event => event.date === date).hour
    let end = this.timeOutEvents.find(event => event.date === date).hour
    let hours = (end - start) / 100
    return hours
}

let wagesEarnedOnDate = function (date) {
    let hours = hoursWorkedOnDate.call(this, date)
    let payRate = this.payPerHour
    return hours * payRate
}

let findEmployeeByFirstName = function (employees, firstName) {
    return employees.find(employee => employee.firstName === firstName)
}

let calculatePayroll = function (employees) {
    let allPay = 0
    employees.forEach(employee => {
        allPay += allWagesFor.call(employee)
    })
    return allPay
}
