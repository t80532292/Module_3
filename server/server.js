/**
 * Created by toq on 28/04/15.
 */

var http = require('http');
var enhancedDate = require('./enhancedDate');
var filterByDay = require('./trucks');

http.createServer(function(request, response) {
    var currentDay = enhancedDate.getDayName();
    var currentMonth = enhancedDate.getMonthName();
    var trucks = filterByDay(currentDay);
    var truckHTML = '<ul>';
    var i;
    var l;
    truck.forEach(function (truck) {
       truckHTML += '<li>' + turck.name + '</li>';
    });
    truckHTML += '</ul>';
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h3>Today is ' + currentDay + ' ' + currentMonth + ' ' + date +
                    'Here are the available food trucks:</h3>');
    response.write(truckHTML);
    response.end();
}).listen(3000, function() {
    console.log('listening on port 3000');
});

