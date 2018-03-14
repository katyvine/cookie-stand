'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// array to hold daily cookie sales
var storeArray = [];

// access the table with id 'location-data'
var hourlysalesContainer = document.getElementById('location-data');

// access form to get

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

  thElement.textContent = 'Location';
  trElement.appendChild(thElement);

  for (var i = 0; i <= time.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = time[i];
    trElement.appendChild(thElement);

  }
  thElement.textContent = 'Daily Totals';
  trElement.appendChild(thElement);

  hourlysalesContainer.appendChild(trElement);
}

// create location instances
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac', 2, 24, 1.2);
var seattlecenter = new Store('Seattle Center', 11, 38, 3.7);
var caphill = new Store('Capitol hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// create hourly total, after creation of instances to populate store array
// make method for total hourly cookie count
function hourlyTotalCalc (){

  var title = document.createElement('td');
  var trElement = document.createElement('tr');

  title.textContent = 'Hourly Totals';
  trElement.appendChild(title);

  var grandTotal = 0;
  for (var i = 0; i < time.length; i++){
    var hourlyTotal = 0;
    for (var j = 0; j < storeArray.length; j++){

      var tdElement = document.createElement('td');

      hourlyTotal += storeArray[j].cookiesSoldPerHourArray[i];

    }
    tdElement.textContent = hourlyTotal;
    trElement.appendChild(tdElement);

    grandTotal += hourlyTotal;
    console.log('hourly total: ' + hourlyTotal);
  }
  var grandElement = document.createElement('td');

  grandElement.textContent = grandTotal;
  trElement.appendChild(grandElement);

  console.log(grandTotal);

  hourlysalesContainer.appendChild(trElement);
}

// function to render all locations
function callAllLocations(){
  hours();
  pike.render();
  seatac.render();
  seattlecenter.render();
  caphill.render();
  alki.render();
  hourlyTotalCalc();
}

//event listener's callback function
function addNewLocation(event){
  event.preventDefault(); //prevent from total form refresh
  console.log(event.target);
}

//add event listener
hourlysalesContainer.addEventListener('submit', addNewLocation);


// call locaiton function
callAllLocations();
