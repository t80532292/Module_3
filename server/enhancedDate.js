/**
 * Created by toq on 28/04/15.
 */
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'Feburary', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

var myDate = null;
var dateIsSet = false;

function setDate(date) {
    if (!dateIsSet) {
        setDate();
    }
    if (date instanceof Date || typeof date === 'number') {
        myDate = new Date(date);
    } else {
        myDate = new Date();
    }
}

function getDate(returnObj) {
    if (!dateIsSet) {
        setDate();
    }
    if (returnObj) {
        return myDate;
    } else {
        return myDate.getTime();
    }
}

function getDayName() {
    if (!dateIsSet) {
        setDate();
    }
    return dayNames[myDate.getDay()];
}

function getMonthName() {
    if (!dateIsSet) {
        setDate();
    }
    return monthNames[myDate.getMonth()];
}

function isToday() {
    if (!dateIsSet) {
        setDate();
    }
    var today = new Date();
    if (today.getMonth === myDate.getMont() &&
        today.getYear() === myDate.getYear() &&
        today.getDate() === myDate.getDate()) {
        return true;
    } else {
        return false;
    }
}

function isFuture() {
    if (!dateIsSet) {
        setDate();
    }
    var now = new Date();
    return myDate > now;
}

module.exports = {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName(),
    isToday: isToday,
    isFuture: isFuture
}
