// Your code here
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord)       
}

function createTimeInEvent(record, dates) {
    const date =  dates.split(' ')[0]
    const hour = parseInt(dates.split(' ')[1])
    record.timeInEvents.push(
    {
        type: "TimeIn",
        hour: hour,
        date: date,
    })
    return record 

}

function createTimeOutEvent(record, dates) {
    const date =  dates.split(' ')[0]
    const hour = parseInt(dates.split(' ')[1])
    record.timeOutEvents.push(
    {
        type: "TimeOut",
        hour: hour,
        date,   
    })
    return record 
}

function hoursWorkedOnDate(record, dates) {
    const timeIns = record.timeInEvents.find((data) => data.date === dates).hour 
    const timeOuts = record.timeOutEvents.find((data) => data.date === dates).hour 
    return (timeOuts - timeIns) / 100
}

function wagesEarnedOnDate(record, dates) {
    const hoursWorked = hoursWorkedOnDate(record, dates)
    const pay = record.payPerHour
    return pay * hoursWorked
}

function allWagesFor(record) {
    const wages = wagesEarnedOnDate(record)
    let totalPay = 0;
    for (const day of record.timeInEvents) {
        totalPay += wages
    }
    return totalPay
}

