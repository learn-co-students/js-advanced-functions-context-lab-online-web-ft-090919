const createEmployeeRecord = (arr) => {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (arr) => {
    return arr.map(el => createEmployeeRecord(el))
}

const createTimeInEvent = function(stamp){
    const [date, hour] = stamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return this
}

const createTimeOutEvent = function(stamp){
    const [date, hour] = stamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return this
}

const hoursWorkedOnDate = function(date) {
    const timeIn = this.timeInEvents.find(el => el.date === date)
    const timeOut = this.timeOutEvents.find(el => el.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

const wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
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

const findEmployeeByFirstName = function(arr, firstName) {
    return arr.find(el => firstName === el.firstName)
}

const calculatePayroll = function(arr) {
    return arr.reduce((memo, emp) => memo + allWagesFor.call(emp), 0)
}
