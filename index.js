function allWagesFor(){
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arrays){
    return arrays.map((array) =>{ return createEmployeeRecord(array) });
}

function createTimeInEvent(dateStamp){
    let [date, time] = dateStamp.split(" ");

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time, 10),
        date: date
    });
    return this;
}

function createTimeOutEvent(dateStamp){
    let [date, time] = dateStamp.split(" ");

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time, 10),
        date: date
    });
    return this;
}

function hoursWorkedOnDate(date){
    let inTime = this.timeInEvents.find((e) => { return e.date === date});
    let outTime = this.timeOutEvents.find((e) => {return e.date === date});

    return (outTime.hour - inTime.hour) / 100;
}

function wagesEarnedOnDate(date){
    let pay = hoursWorkedOnDate.call(this, date) * this.payPerHour;
    return pay;
}

function payrollExpense(employees){
    return employees.reduce(function(total, employee){
        return total + allWagesFor.call(employee);
    }, 0);
}

function findEmployeeByFirstName(array,firstName){
    return array.find((employee) => { return employee.firstName === firstName });
}

function calculatePayroll(employeeRecords){
    return employeeRecords.reduce(function(total, employee){
        return total + allWagesFor.call(employee);
    }, 0);
}