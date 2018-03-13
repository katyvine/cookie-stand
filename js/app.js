'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// array to hold daily cookie sales
var cookiesSoldPerHourArray = [];

// access the table with id 'location-data'
var hourlysalesContainer = document.getElementById('location-data');

// build constructor to make location objects

function Location(locationName, minCust, maxCust, avgCookieSale) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  cookiesSoldPerHourArray.push(this);

}

// make render() method on the constructor's prototype

Location.prototype.render = function() {
  var trElement = document.createElement('tr');

  // Name
  var tdElement = document.createElement('td');
  tdElement.textContent = this.name;
  trElement.appendChild(tdElement);

  //Data
  // for (var i = 0; i < time.length; i++){
  //   var calcCookiesPerHour = Math.round(this.randCustPerHour() * this.avgCookieSale);
  //   this.cookiesSoldPerHourArray.push(time[i] + ': ' + calcCookiesPerHour);

  //   var tdElement = document.createElement('td');
  //   tdElement.textContent = this.cookiesSoldPerHourArray[i];

  //   hourlysalesContainer.appendChild(tdElement);

  // this.totalDailyCookies += calcCookiesPerHour;

};
// // append daily total
// var tdElement = document.createElement('td');
// tdElement.textContent = 'Total: ' + this.totalDailyCookies + ' cookies!';
// hourlysalesContainer.appendChild(tdElement);
// };

// create location instances
var pike = new Location('1st and Pike', 23, 65, 6.3);
var seatac = new Location('SeaTac', 2, 24, 1.2);

// function to render all locations
function callAllLocations(){
  pike.render();
  seatac.render();
}

// call locaiton function
callAllLocations();

// Location 1: 1st & Pike

// var pike = {
//   locationName: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   cookiesSoldPerHourArray: [],
//   totalDailyCookies: 0,

//   randCustPerHour: function(){
//     return Math.floor(Math.random()*(this.maxCust - this.minCust+1)) + this.minCust;
//   },

//   showCookieSalesPerHour: function() {
//     var hourlysalesContainer = document.getElementById('Pike');


//     for (var i = 0; i < time.length; i++){
//       var calcCookiesPerHour = Math.round(this.randCustPerHour() * this.avgCookieSale);
//       this.cookiesSoldPerHourArray.push(time[i] + ': ' + calcCookiesPerHour);

//       var salesElement = document.createElement('li');
//       salesElement.textContent = this.cookiesSoldPerHourArray[i];

//       hourlysalesContainer.appendChild(salesElement);

//       this.totalDailyCookies += calcCookiesPerHour;

//     }
//     var totalElement = document.createElement('li');
//     totalElement.textContent = 'Total: ' + this.totalDailyCookies + ' cookies!';
//     hourlysalesContainer.appendChild(totalElement);

//   }
// };
// pike.showCookieSalesPerHour();

// pike.totalDailyCookies;
// console.log (pike.totalDailyCookies);


// // Location 2

// var seatac = {
//   locationName: 'SeaTac Airport',
//   minCust: 2,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   cookiesSoldPerHourArray: [],

//   randCustPerHour: function(){
//     return Math.floor(Math.random()*(this.maxCust - this.minCust+1)) + this.minCust;
//   },

//   showCookieSalesPerHour: function() {
//     var hourlysalesContainer = document.getElementById('SeaTac');

//     for (var i = 0; i < time.length; i++){
//       var calcCookiesPerHour = Math.round(this.randCustPerHour() * this.avgCookieSale);
//       this.cookiesSoldPerHourArray.push(time[i] + ': ' + calcCookiesPerHour);
//       var salesElement = document.createElement('li');
//       salesElement.textContent = this.cookiesSoldPerHourArray [i];

//       hourlysalesContainer.appendChild(salesElement);
//     }
//   }
// };
// seatac.showCookieSalesPerHour();


// // Location 3

// var seattlecenter = {
//   locationName: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   cookiesSoldPerHourArray: [],

//   randCustPerHour: function(){
//     return Math.floor(Math.random()*(this.maxCust - this.minCust+1)) + this.minCust;
//   },

//   showCookieSalesPerHour: function(){
//     var hourlysalesContainer = document.getElementById('SeaCenter');

//     for (var i = 0; i < time.length; i++){
//       var calcCookiesPerHour = Math.round(this.randCustPerHour()* this.avgCookieSale);
//       this.cookiesSoldPerHourArray.push(time[i] + ': ' + calcCookiesPerHour);
//       var salesElement = document.createElement ('li');
//       salesElement.textContent = this.cookiesSoldPerHourArray [i];

//       hourlysalesContainer.appendChild(salesElement);
//     }
//   }
// };
// seattlecenter.showCookieSalesPerHour();

// //Location 4

// var caphill = {
//   locationName: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   cookiesSoldPerHourArray: [],

//   randCustPerHour: function(){
//     return Math.floor(Math.random()*(this.maxCust - this.minCust+1)) + this.minCust;
//   },

//   showCookieSalesPerHour: function(){
//     var hourlysalesContainer = document.getElementById('CapHill');

//     for (var i = 0; i < time.length; i++){
//       var calcCookiesPerHour = Math.round(this.randCustPerHour()* this.avgCookieSale);
//       this.cookiesSoldPerHourArray.push(time[i] + ': ' + calcCookiesPerHour);
//       var salesElement = document.createElement ('li');
//       salesElement.textContent = this.cookiesSoldPerHourArray [i];

//       hourlysalesContainer.appendChild(salesElement);

//     }
//   }
// };
// caphill.showCookieSalesPerHour();

// // Location 5

// var alki = {
//   locationName: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   cookiesSoldPerHourArray: [],

//   randCustPerHour: function(){
//     return Math.floor(Math.random()*(this.maxCust - this.minCust+1)) + this.minCust;
//   },

//   showCookieSalesPerHour: function(){
//     var hourlysalesContainer = document.getElementById('Alki');

//     for (var i = 0; i < time.length; i++){
//       var calcCookiesPerHour = Math.round(this.randCustPerHour()* this.avgCookieSale);
//       this.cookiesSoldPerHourArray.push(time[i] + ': ' + calcCookiesPerHour);
//       var salesElement = document.createElement ('li');
//       salesElement.textContent = this.cookiesSoldPerHourArray [i];

//       hourlysalesContainer.appendChild(salesElement);
//     }
//   }
// };
// alki.showCookieSalesPerHour();