let createEmployeeRecord = function(record){
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(records) {
    return records.map(function(record) {
        return createEmployeeRecord(record)
    })
}

let createTimeInEvent = function(dateTime) {
    // split dateTime and set as object atts
    let [date, hour] = dateTime.split(" ")
    
    // push data into timeInEvents object
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10)
    })
    return this
}

let createTimeOutEvent = function(dateTime){
    let [date, hour] = dateTime.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10)
    })
    return this
}

let hoursWorkedOnDate = function(date) {
    // find the time in
    let timeIn = this.timeInEvents.find(function(f){
        return f.date === date
    })

    // find the time out
    let timeOut = this.timeOutEvents.find(function(f){
        return f.date === date
    })

    // subtract one from the other to find hours worked
    // divide by 100 to parse to hour format (ie. 1700 - 0900 = 800, so 8 hours worked)
    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(date) {
    // find hours worked on date
    let hours = hoursWorkedOnDate.call(this, date)

    // multiply hours worked by wage
    return (hours * this.payPerHour)
}

// let allWagesFor = function() {
//     // get a list of all dates
//     let dates = this.timeInEvents.map(function(e){
//         return e.date
//     })

//     // calculate wage on each date and reduce to total
//     return dates.reduce(function(memo, d){
//         return memo + wagesEarnedOnDate.call(this, d)
//     }, 0)
// }

let calculatePayroll = function(records) {
    return records.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
}

let findEmployeeByFirstName = function(records, firstName) {
    return records.find(function(rec){
      return rec.firstName === firstName
    })
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