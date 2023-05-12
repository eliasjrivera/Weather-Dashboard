var APIKey = "6f83e6bf7b8afd8619d80b93245275c1";
var state;
var country;

var current = document.querySelector(".current");
var forecastEl = document.querySelector(".forecast");

var search = document.querySelector(".search");
var searchFormEl = document.querySelector(".search-form");

var searchHistoryEl = document.querySelector("search-history");

function forecast (weather) {
    console.log("weather", weather);

    var forecastContainer = document.createElement("div");
    forecastContainer.classList.add('text-dark', 'mb-3', 'p-3');

    var forecastBody = document.createElement("div");
    forecastBody.classList.add('card-body');
    forecastEl.append(forecastBody);

    var forecastOneDate = document.createElement("h3");
    forecastOneDate.textcontent = dayjs.unix(weather.list[2].dt).format('MMM D, YYYY');
    console.log(forecastOneDate.textcontent)

    var forecastOne = document.createElement("p");
    forecastOne.textcontent = weather.list[2].main.temp + "°F";
    console.log(forecastOne.textcontent)

    var forecastOneWind = document.createElement("p");
    forecastOneWind.textcontent = weather.list[2].wind.speed + "MPH";
    console.log(forecastOneWind.textcontent)

    var forecastOneHumidity = document.createElement("p");
    forecastOneHumidity.textcontent = weather.list[2].main.humidity +"%";
    console.log(forecastOneHumidity.textcontent)

    var forecastTwoDate = document.createElement("h3");
    forecastTwoDate.textcontent = dayjs.unix(weather.list[10].dt).format('MMM D, YYYY');
    console.log(forecastTwoDate.textcontent)

    var forecastTwo = document.createElement("p");
    forecastTwo.textcontent = weather.list[10].main.temp + "°F";
    console.log(forecastTwo.textcontent)

    var forecastTwoWind = document.createElement("p");
    forecastTwoWind.textcontent = weather.list[10].wind.speed + "MPH";
    console.log(forecastTwoWind.textcontent)

    var forecastTwoHumidity = document.createElement("p");
    forecastTwoHumidity.textcontent = weather.list[10].main.humidity +"%";
    console.log(forecastTwoHumidity.textcontent)

    var forecastThreeDate = document.createElement("h3");
    forecastThreeDate.textcontent = dayjs.unix(weather.list[18].dt).format('MMM D, YYYY');
    console.log(forecastThreeDate.textcontent)

    var forecastThree = document.createElement("p");
    forecastThree.textcontent = weather.list[18].main.temp + "°F";

    var forecastThreeWind = document.createElement("p");
    forecastThreeWind.textcontent = weather.list[18].wind.speed + "MPH";
    console.log(forecastThreeWind.textcontent)

    var forecastThreeHumidity = document.createElement("p");
    forecastThreeHumidity.textcontent = weather.list[18].main.humidity +"%";
    console.log(forecastThreeHumidity.textcontent)

    var forecastFourDate = document.createElement("h3");
    forecastFourDate.textcontent = dayjs.unix(weather.list[26].dt).format('MMM D, YYYY');
    console.log(forecastFourDate.textcontent)

    var forecastFour = document.createElement("p");
    forecastFour.textcontent = weather.list[26].main.temp + "°F";

    var forecastFourWind = document.createElement("p");
    forecastFourWind.textcontent = weather.list[26].wind.speed + "MPH";
    console.log(forecastFourWind.textcontent)

    var forecastFourHumidity = document.createElement("p");
    forecastFourHumidity.textcontent = weather.list[26].main.humidity +"%";
    console.log(forecastFourHumidity.textcontent)

    var forecastFiveDate = document.createElement("h3");
    forecastFiveDate.textcontent = dayjs.unix(weather.list[34].dt).format('MMM D, YYYY');
    console.log(forecastFiveDate.textcontent)

    var forecastFive = document.createElement("p");
    forecastFive.textcontent = weather.list[34].main.temp + "°F";

    var forecastFiveWind = document.createElement("p");
    forecastFiveWind.textcontent = weather.list[34].wind.speed + "MPH";
    console.log(forecastFiveWind.textcontent)

    var forecastFiveHumidity = document.createElement("p");
    forecastFiveHumidity.textcontent = weather.list[34].main.humidity +"%";
    console.log(forecastFiveHumidity.textcontent)

    forecastBody.append(forecastOneDate.textcontent, " " + forecastOne.textcontent, " " + forecastOneWind.textcontent, " " + forecastOneHumidity.textcontent, "  " + forecastTwoDate.textcontent, " " + forecastTwo.textcontent, " " + forecastTwoWind.textcontent, " " + forecastTwoHumidity.textcontent, "  " + forecastThreeDate.textcontent, " " +     forecastThree.textcontent, " " + forecastThreeWind.textcontent, " " + forecastThreeHumidity.textcontent, "  " + forecastFourDate.textcontent, " " + forecastFour.textcontent, " " + forecastFourWind.textcontent, " " + forecastFourHumidity.textcontent, "  " + forecastFiveDate.textcontent, " " + forecastFive.textcontent, " " + forecastFiveWind.textcontent, " " + forecastFiveHumidity.textcontent);

    forecastEl.append(forecastContainer);
};


function showResults (location) {
    console.log(location);
    var currentContainer = document.createElement("div");
    currentContainer.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    var currentBody = document.createElement("div");
    currentBody.classList.add('card-body');
    current.append(currentBody);

    var currentCityName = document.createElement("h3");
    currentCityName.textContent = location.name; 

    var currentCityDate = document.createElement("p");
    currentCityDate.textContent = dayjs.unix(location.dt).format('MMM D, YYYY');

    var currentCityTemp =document.createElement("p");
    currentCityTemp.textContent = location.main.temp + " °F";

    var currentCityWind = document.createElement("p");
    currentCityWind.textContent = location.wind.speed + " MPH";

    var currentCityHumidity = document.createElement("p");
    currentCityHumidity.textContent = location.main.humidity + "%";

    currentBody.append(currentCityName, currentCityDate, currentCityTemp, currentCityWind, currentCityHumidity);

    current.append(currentContainer);
};

function locationCoord (location) {
    var lat = location.coord.lat;
    var lon = location.coord.lon;

    var locationURL =  "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial";

    fetch(locationURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            console.log (lat, lon)
            forecast(weather);
        })
    showResults(location);
};

function searchApi(city) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";;
    
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (location) {
            current.textcontent = city;
            console.log("location", location);

            if (!city) {
                console.log('No results found!');
                city.innerHTML = '<h3>No results found, search again!</h3>';
            } else {
                city.textContent = '';
                locationCoord(location);
            }
        })
};

function searchHistory(city) {
    var historyContainer = document.createElement("div");
    historyContainer.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    var historyBody = document.createElement("div");
    historyBody.classList.add('card-body');
    searchHistoryEl.append(historyBody);

    var historyInfo = localStorage.getItem(city);

    historyBody.append(historyInfo);

    searchHistoryEl.append(historyContainer);
};

function searchFormSubmit(event) {
    event.preventDefault();

    var city = document.querySelector(".search-input").value;

    localStorage.setItem(".search-input", city);

    if (!city) {
        console.error("You need a search input value!");
        return;
    }

    searchApi(city);
    searchHistory(city)
};

searchFormEl.addEventListener("click", searchFormSubmit);