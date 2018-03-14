'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// array to hold daily cookie sales
var storeArray = [];

// access the table with id 'location-data'
var hourlysalesContainer = document.getElementById('location-data');

// build constructor to make location objects

function Store(locationName, minCust, maxCust, avgCookieSale) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSoldPerHourArray = [];
  storeArray.push(this);

}


// make method for random cust per hour

Store.prototype.randCustPerHour = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

// make method for cookies per hour

Store.prototype.calcCookiesPerHour = function (){
  var totalDailyCookies = 0;
  for (var i = 0; i < time.length; i++){
    var calcCookiesPerHour = Math.round(this.randCustPerHour() * this.avgCookieSale);
    this.cookiesSoldPerHourArray.push(calcCookiesPerHour);

    totalDailyCookies += calcCookiesPerHour;
  }
  return totalDailyCookies;

};

// make render() method on the constructor's prototype

Store.prototype.render = function() {
  var totalCookie = this.calcCookiesPerHour();

  var trElement = document.createElement('tr');



  // Name
  var tdElement = document.createElement('td');
  tdElement.textContent = this.locationName;
  trElement.appendChild(tdElement);

  //Data

  for (var i = 0; i < time.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesSoldPerHourArray[i];

    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = totalCookie;
  trElement.appendChild(tdElement);

  hourlysalesContainer.appendChild(trElement);


};

//hours header
function hours (){
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = '';
  trElement.appendChild(thElement);

  for (var i = 0; i < time.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = time[i];
    trElement.appendChild(thElement);
  }

  // thElement.textContent = 'Daily Total';
  // trElement.appendChild(thElement);

  hourlysalesContainer.appendChild(trElement);
}

//daily total footer
// nested for loop
Store.prototype.dailyTotal = function (){
  var tdElement = document.createElement('td');
  var trElement = document.createElement('tr');

  for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++){
    tdElement.textContent = this.cookiesSoldPerHourArray[0] + this.cookiesSoldPerHourArray [1] + this.cookiesSoldPerHourArray [2] + this.cookiesSoldPerHourArray[3] + this.cookiesSoldPerHourArray [4];
    trElement.appendChild(tdElement);
  }
  hourlysalesContainer.appendChild(trElement);
};


// create location instances
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac', 2, 24, 1.2);
var seattlecenter = new Store('Seattle Center', 11, 38, 3.7);
var caphill = new Store('Capitol hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// function to render all locations
function callAllLocations(){
  hours();
  pike.render();
  seatac.render();
  seattlecenter.render();
  caphill.render();
  alki.render();
  dailyTotal();
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
