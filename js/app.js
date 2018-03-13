'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// Location 1: 1st & Pike

var pike = {
  locationName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesSoldPerHourArray: [],

  randCustPerHour: function(){
    return Math.round(Math.random()*(this.maxCust - this.minCust+1)) + this.minCust;
  },

  showCookieSalesPerHour: function() {
    var hourlysalesContainer = document.getElementById('Pike');

    for (var i = 0; i < time.length; i++){
      var calcCookiesPerHour = Math.round(this.randCustPerHour() * this.avgCookieSale);
      this.cookiesSoldPerHourArray.push(time[i] + ': ' + calcCookiesPerHour);
      var salesElement = document.createElement('li');
      salesElement.textContent = this.cookiesSoldPerHourArray[i];

      hourlysalesContainer.appendChild(salesElement);
    }
  }
};
pike.showCookieSalesPerHour();


// Location 2

var seatac = {
  locationName: 'SeaTac Airport',
  minCust: 2,
  maxCust: 24,
  avgCookieSale: 1.2,
  cookiesSoldPerHourArray: [],

  randCustPerHour: function(){
    return Math.round(Math.random()*(this.maxCust - this.minCust+1)) + this.minCust;
  },

  showCookieSalesPerHour: function() {
    var hourlysalesContainer = document.getElementById('SeaTac');

    for (var i = 0; i < time.length; i++){
      var calcCookiesPerHour = Math.round(this.randCustPerHour() * this.avgCookieSale);
      this.cookiesSoldPerHourArray.push(time[i] + ': ' + calcCookiesPerHour);
      var salesElement = document.createElement('li');
      salesElement.textContent = this.cookiesSoldPerHourArray [i];

      hourlysalesContainer.appendChild(salesElement);
    }
  }
};
seatac.showCookieSalesPerHour();


// Location 3

var seattlecenter;