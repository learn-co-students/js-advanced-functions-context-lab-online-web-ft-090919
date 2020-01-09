const hoursWorkedOnDate = function(date) {
    let timeInEvent = this.timeInEvents.find(function(event) {
      return event.date === date;
    });
  
    let timeOutEvent = this.timeOutEvents.find(function(event) {
      return event.date === date;
    });
  
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  };