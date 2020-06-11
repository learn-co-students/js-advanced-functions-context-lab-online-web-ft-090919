/* Your Code Here */
const createEmployeeRecord = (information) => ({
    firstName: information[0],
    familyName: information[1],
    title: information[2],
    payPerHour: information[3],
    timeInEvents: [],
    timeOutEvents: []
})

const createEmployeeRecords = (employees) => employees.map(createEmployeeRecord);

function createTimeInEvent(timestamp) {
    let [date, hour] = timestamp.split(' ');
    this.timeInEvents.push({   
        type: 'TimeIn',
        date,
        hour: parseInt(hour),
    });
    return this;
}

function createTimeOutEvent(timestamp) {
    let [date, hour] = timestamp.split(' ');
    this.timeOutEvents.push({   
        type: 'TimeOut',
        date,
        hour: parseInt(hour),
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const dateMatch = (timeEvent) => timeEvent.date === date; 
    let timeIn = this.timeInEvents.find(dateMatch);
    let timeOut = this.timeOutEvents.find(dateMatch);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function calculatePayroll(employees) {
    return employees.map(employee => allWagesFor.call(employee)).reduce((total, i) => total + i, 0);  
}

const findEmployeeByFirstName = (employees, name) => employees.find(employee => employee.firstName === name);
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
