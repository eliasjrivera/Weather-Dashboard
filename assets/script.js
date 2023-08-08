var APIKey = '6f83e6bf7b8afd8619d80b93245275c1';

// global scope
var searchForm = document.querySelector('#city-search-form');
var cityInput = document.querySelector('#city-input');
var searchedCity = document.querySelector('#searched-city');

var currentWeather = document.querySelector('#current-weather-container');

var forecastTitle = document.querySelector('#forecast-title');
var forecastWeather = document.querySelector('#forecast-container');

var pastSearchBtn = document.querySelector('#past-search-buttons');
var pastSearchesArray = [];

// function that calls current weather (getWeather) and forecast (getForecast), along with saving the search (saveSearch) and creating a button for previous searches (searchHistory)
function searchFormSubmit(event) {
    event.preventDefault();
    // trim removes whitespace from both ends of a string and returns a new string, without modifying the original string.
    var city = cityInput.value.trim();

    if (city) {
        getWeather(city);
        getForecast(city);
        
        // unshift adds the specified elements to the beginning of an array and returns the new length of the array.
        pastSearchesArray.unshift(city);

        cityInput.value = '';
    } else {
        alert('Enter a City to Search')
    };

    saveSearch();
    searchHistory(city);
};

// function that saves search to local storage in an array
function saveSearch() {
    localStorage.setItem('pastSearchesArray', JSON.stringify(pastSearchesArray));
};

// api call for current weather and also, calls displayCurrentWeather() function
function getWeather(city) {
    var APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`;

    fetch(APIURL)
        .then(function (response) {
            response.json()

            .then(function (data) {
                displayCurrentWeather(data, city);
            });
        });
};

// function that displays current weather
function displayCurrentWeather(weather, searchCity) {
    // deletes previous text
    currentWeather.textContent = '';
    searchedCity.textContent = searchCity;

    // creates date element
    var currentDate = document.createElement('div');
    currentDate.textContent = moment(weather.dt.value).format('MMM D, YYYY');
    searchedCity.appendChild(currentDate);


    // creates an image element for an icon
    var weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    searchedCity.appendChild(weatherIcon);


    // creates a div element to hold temperature data
    var temperature = document.createElement('div');
    temperature.textContent = 'Temperature: ' + weather.main.temp + ' °F';
    temperature.classList = 'list-group-item';
    
    // creates a div element to hold humidity data
    var humidity = document.createElement('div');
    humidity.textContent = 'Humidity: ' + weather.main.humidity + ' %';
    humidity.classList = 'list-group-item';


    // creates a div element to hold wind data
    var windSpeed = document.createElement('div');
    windSpeed.textContent = 'Wind Speed: ' + weather.wind.speed + ' MPH';
    windSpeed.classList ='list-group-item';


    // appends to current weather container
    currentWeather.appendChild(temperature);
    currentWeather.appendChild(humidity);
    currentWeather.appendChild(windSpeed);
};

// api call for forecast weather and also, calls displayForecast() function
function getForecast(city) {
    var APIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKey}`;

    fetch(APIURL)
        .then(function (response) {
            response.json()

            .then(function (data) {
                displayForecast(data);
            });
        });
};

// function that displays forecast weather
function displayForecast(weather) {
    // adds text for forecast container
    forecastTitle.textContent = 'Five Day Forecast';
    // deletes previous text
    forecastWeather.textContent = '';

    var forecastList = weather.list;

    // for loop to display forecast: date, icon, temperature, humidity, and wind speed 
    for (i = 5; i < forecastList.length; i = i + 8) {
        var dailyForecast = forecastList[i];

        // forecast container
        var forecastEl = document.createElement('div');
        forecastEl.classList = 'card bg-primary text-light m-2';

        // creates date element
        var forecastDate = document.createElement('h5');
        forecastDate.textContent= moment.unix(dailyForecast.dt).format('MMM D, YYYY');
        forecastDate.classList = 'card-header text-center';
        forecastEl.appendChild(forecastDate);

        // creates an image element for an icon
        var weatherIcon = document.createElement('img');
        weatherIcon.classList = 'card-body text-center';
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`);  

        // appends to forecast card
        forecastEl.appendChild(weatherIcon);
        
        // creates temperature div
        var forecastTemp =document.createElement('div');
        forecastTemp.classList = 'card-body text-center';
        forecastTemp.textContent = 'Temp: ' + dailyForecast.main.temp + ' °F';

        // appends to forecast card
        forecastEl.appendChild(forecastTemp);

        // creates temperature div
        var forecastHumidty = document.createElement('div');
        forecastHumidty.classList = 'card-body text-center';
        forecastHumidty.textContent = 'Humidity: ' + dailyForecast.main.humidity + '  %';


        // appends to forecast card
        forecastEl.appendChild(forecastHumidty);

        // creates wind speed div
        var forecastWindSpeed = document.createElement('div');
        forecastWindSpeed.classList = 'card-body text-center';
        forecastWindSpeed.textContent = 'Wind Speed: ' + dailyForecast.wind.speed + '  MPH';

        //appends to forecast card
        forecastEl.appendChild(forecastWindSpeed);

        //appends to forecast container
        forecastWeather.appendChild(forecastEl);
    };
};

// creates buttons for previous searches
function searchHistory(searchHistory) {
    pastSearch = document.createElement('button');
    pastSearch.textContent = searchHistory;
    pastSearch.classList = 'd-flex w-100 btn-light border p-2';
    pastSearch.setAttribute('data-city', searchHistory);
    pastSearch.setAttribute('type', 'submit');

    // prepend  inserts a set of Node objects or string objects before the first child of a parent node
    pastSearchBtn.prepend(pastSearch);
};

// function thats calls current weather (getWeather) and forecast (getForecast) for past searches
function pastSearchView(event) {
    var city = event.target.getAttribute('data-city');

    if(city){
        getWeather(city);
        getForecast(city);
    };
};

// event listener for when a user hits 'Search'
searchForm.addEventListener('submit', searchFormSubmit);
// event listener for when a user clicks the name of a city previously searched
pastSearchBtn.addEventListener('click', pastSearchView);