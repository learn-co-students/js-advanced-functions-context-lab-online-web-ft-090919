let createEmployeeRecord = (arr) => {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

// takes in array of employee objects to create a record for each one
let createEmployeeRecords = (arr) => {
    return arr.map(array => createEmployeeRecord(array))
}

let createTimeInEvent = (dateStamp) => {
    let arr = dateStamp.split(' ')
    let time = arr.last
    let myDate = arr.first

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time),
        date: myDate
    })

    console.log(this)
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