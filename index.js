/* Your Code Here */

function createEmployeeRecord(employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays){
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(date){
    const [pdate, time] = date.split(" ")
    this.timeInEvents.push({type: 'TimeIn', hour: parseInt(time), date: pdate})
    return this
}

function createTimeOutEvent(date){
    const [pdate, time] = date.split(" ")
    this.timeOutEvents.push({type: 'TimeOut', hour: parseInt(time), date: pdate})
    return this
}

function hoursWorkedOnDate(date){
    const employeeInEvent = this.timeInEvents.find((event) => {return event.date === date}) //=> {type: ..., ...}
    const employeeOutEvent = this.timeOutEvents.find((event) => {return event.date === date})
    const hoursWorked = employeeOutEvent.hour - employeeInEvent.hour
    return hoursWorked / 100
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this['payPerHour']
}

function findEmployeeByFirstName(src, firstName){
    return src.find((employee) => {return employee.firstName === firstName})
}

function calculatePayroll(src){
    return src.reduce((sum, employee) => {return sum + allWagesFor.call(employee)},0)    
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