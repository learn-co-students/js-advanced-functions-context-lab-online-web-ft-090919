const createEmployeeRecord = function(employeeDetails) {
  const [firstName, familyName, title, payPerHour] = employeeDetails;

  const employeeObj = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };

  return employeeObj;
};

const createEmployeeRecords = function(nestedEmployeeDetails) {
  return nestedEmployeeDetails.map(function(employeeDetails) {
    return createEmployeeRecord(employeeDetails);
  });
};

const createTimeInEvent = function(timeStampIn) {
  const timeInObj = {};
  const [date, time] = timeStampIn.split(' ');

  timeInObj.type = "TimeIn";
  timeInObj.hour = parseInt(time, 10);
  timeInObj.date = date;

  this.timeInEvents.push(timeInObj);

  return Object.assign({}, this);
};

const createTimeOutEvent = function(timeStampOut) {
  const timeOutObj = {};
  const [date, time] = timeStampOut.split(' ');

  timeOutObj.type = "TimeOut";
  timeOutObj.hour = parseInt(time, 10);
  timeOutObj.date = date;

  this.timeOutEvents.push(timeOutObj);

  return Object.assign({}, this);
};

const hoursWorkedOnDate = function(date) {
  let timeInEvent = this.timeInEvents.find(function(event) {
    return event.date === date;
  });

  let timeOutEvent = this.timeOutEvents.find(function(event) {
    return event.date === date;
  });

  return (timeOutEvent.hour - timeInEvent.hour) / 100;
};

const wagesEarnedOnDate = function(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
};

const allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    let payable = eligibleDates.reduce(function (memo, date) {
        return memo + wagesEarnedOnDate.call(this, date)
    }.bind(this), 0);

    return payable;
};

const calculatePayroll = (employeeRecords) => {
  return employeeRecords.reduce(function(total, employee) {
    return total + allWagesFor.call(employee);
  }, 0);
};

const findEmployeeByFirstName = (employeeRecords, name) => {
  return employeeRecords.find(record => record.firstName === name);
};
