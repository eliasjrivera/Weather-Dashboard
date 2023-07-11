var APIKey = "6f83e6bf7b8afd8619d80b93245275c1";
var state;
var country;

var current = document.querySelector(".current");
var forecastEl = document.querySelector(".forecast");

var search = document.querySelector(".search");
var searchFormEl = document.querySelector(".search-form");

var searchHistoryEl = document.querySelector(".search-history");

var button = document.querySelector('.button');

var pastSearchesArray =
    JSON.parse(localStorage.getItem("pastSearches"))
    || [];


// how to load search history to button
// how to remove empty buttons if youre on the first search
// need icon representation of weather conditions

function forecast (weather) {
    console.log("weather", weather);
    // this clear out the container for the next search
    forecastEl.textContent = '';

    var forecastContainer = document.createElement("div");

    var forecastBody = document.createElement("div");
    forecastBody.classList.add('row');
    forecastEl.append(forecastBody);

    //

    var forecastOneContainer = document.createElement("div");
    forecastOneContainer.classList.add('col');

    var forecastOneDate = document.createElement("p");
    forecastOneDate.textcontent = dayjs.unix(weather.list[2].dt).format('MMM D, YYYY');
    console.log(forecastOneDate.textcontent)

    var forecastOneIcon = document.createElement('p');
    var oneImg = document.createElement('img');
    oneImg.setAttribute('src', 'https://openweathermap.org/img/wn/' + weather.list[2].weather[0].icon + '@2x.png');
    console.log(oneImg)
    forecastOneIcon.appendChild(oneImg);

    var forecastOne = document.createElement("p");
    forecastOne.textcontent = "Temperature: " + weather.list[2].main.temp + "°F";
    console.log(forecastOne.textcontent)

    var forecastOneWind = document.createElement("p");
    forecastOneWind.textcontent = "Wind Speed: " + weather.list[2].wind.speed + "MPH";
    console.log(forecastOneWind.textcontent)

    var forecastOneHumidity = document.createElement("p");
    forecastOneHumidity.textcontent =  "Humidity: " + weather.list[2].main.humidity +"%";
    console.log(forecastOneHumidity.textcontent);

    forecastOneContainer.append(forecastOneDate.textcontent, forecastOneIcon, " " + forecastOne.textcontent, " " + forecastOneWind.textcontent, " " + forecastOneHumidity.textcontent)    
    console.log(forecastOneContainer)

    //

    var forecastTwoContainer = document.createElement("div");
    forecastTwoContainer.classList.add('col');


    var forecastTwoDate = document.createElement("p");
    forecastTwoDate.textcontent = dayjs.unix(weather.list[10].dt).format('MMM D, YYYY');
    console.log(forecastTwoDate.textcontent)

    var forecastTwoIcon = document.createElement('p');
    var twoImg = document.createElement('img');
    twoImg.setAttribute('src', 'https://openweathermap.org/img/wn/' + weather.list[10].weather[0].icon + '@2x.png');
    console.log(twoImg)
    forecastTwoIcon.appendChild(twoImg);


    var forecastTwo = document.createElement("p");
    forecastTwo.textcontent = "Temperature: " + weather.list[10].main.temp + "°F";
    console.log(forecastTwo.textcontent)

    var forecastTwoWind = document.createElement("p");
    forecastTwoWind.textcontent = "Wind Speed: " + weather.list[10].wind.speed + "MPH";
    console.log(forecastTwoWind.textcontent)

    var forecastTwoHumidity = document.createElement("p");
    forecastTwoHumidity.textcontent =  "Humidity: " + weather.list[10].main.humidity +"%";
    console.log(forecastTwoHumidity.textcontent)
    
    forecastTwoContainer.append(forecastTwoDate.textcontent, forecastTwoIcon, " " + forecastTwo.textcontent, " " + forecastTwoWind.textcontent, " " + forecastTwoHumidity.textcontent)    


    //

    var forecastThreeContainer = document.createElement("div");
    forecastThreeContainer.classList.add('col');


    var forecastThreeDate = document.createElement("p");
    forecastThreeDate.textcontent = dayjs.unix(weather.list[18].dt).format('MMM D, YYYY');
    console.log(forecastThreeDate.textcontent)

    var forecastThreeIcon = document.createElement('p');
    var threeImg = document.createElement('img');
    threeImg.setAttribute('src', 'https://openweathermap.org/img/wn/' + weather.list[18].weather[0].icon + '@2x.png');
    console.log(threeImg)
    forecastThreeIcon.appendChild(threeImg);

    var forecastThree = document.createElement("p");
    forecastThree.textcontent = "Temperature: " + weather.list[18].main.temp + "°F";

    var forecastThreeWind = document.createElement("p");
    forecastThreeWind.textcontent = "Wind Speed: " + weather.list[18].wind.speed + "MPH";
    console.log(forecastThreeWind.textcontent)

    var forecastThreeHumidity = document.createElement("p");
    forecastThreeHumidity.textcontent =  "Humidity: " + weather.list[18].main.humidity +"%";
    console.log(forecastThreeHumidity.textcontent)
    
    forecastThreeContainer.append(forecastThreeDate.textcontent, forecastThreeIcon, " " +     forecastThree.textcontent, " " + forecastThreeWind.textcontent, " " + forecastThreeHumidity.textcontent);

    //

    var forecastFourContainer = document.createElement("div");
    forecastFourContainer.classList.add('col');


    var forecastFourDate = document.createElement("p");
    forecastFourDate.textcontent = dayjs.unix(weather.list[26].dt).format('MMM D, YYYY');
    console.log(forecastFourDate.textcontent)

    var forecastFourIcon = document.createElement('p');
    var fourImg = document.createElement('img');
    fourImg.setAttribute('src', 'https://openweathermap.org/img/wn/' + weather.list[26].weather[0].icon + '@2x.png');
    console.log(fourImg)
    forecastFourIcon.appendChild(fourImg);

    var forecastFour = document.createElement("p");
    forecastFour.textcontent = "Temperature: " + weather.list[26].main.temp + "°F";

    var forecastFourWind = document.createElement("p");
    forecastFourWind.textcontent = "Wind Speed: " + weather.list[26].wind.speed + "MPH";
    console.log(forecastFourWind.textcontent)

    var forecastFourHumidity = document.createElement("p");
    forecastFourHumidity.textcontent =  "Humidity: " + weather.list[26].main.humidity +"%";
    console.log(forecastFourHumidity.textcontent)

    forecastFourContainer.append(forecastFourDate.textcontent, forecastFourIcon, " " + forecastFour.textcontent, " " + forecastFourWind.textcontent, " " + forecastFourHumidity.textcontent);


    //

    var forecastFiveContainer = document.createElement("div");
    forecastFiveContainer.classList.add('col');


    var forecastFiveDate = document.createElement("p");
    forecastFiveDate.textcontent = dayjs.unix(weather.list[34].dt).format('MMM D, YYYY');
    console.log(forecastFiveDate.textcontent)

    var forecastFiveIcon = document.createElement('p');
    var fiveImg = document.createElement('img');
    fiveImg.setAttribute('src', 'https://openweathermap.org/img/wn/' + weather.list[34].weather[0].icon + '@2x.png');
    console.log(fiveImg)
    forecastFiveIcon.appendChild(fiveImg);


    var forecastFive = document.createElement("p");
    forecastFive.textcontent = "Temperature: " + weather.list[34].main.temp + "°F";

    var forecastFiveWind = document.createElement("p");
    forecastFiveWind.textcontent = "Wind Speed: " + weather.list[34].wind.speed + "MPH";
    console.log(forecastFiveWind.textcontent)

    var forecastFiveHumidity = document.createElement("p");
    forecastFiveHumidity.textcontent = "Humidity: " + weather.list[34].main.humidity +"%";
    console.log(forecastFiveHumidity.textcontent)

    forecastFiveContainer.append(forecastFiveDate.textcontent, forecastFiveIcon, forecastFive.textcontent, " " + forecastFiveWind.textcontent, " " + forecastFiveHumidity.textcontent);


    forecastBody.append(forecastOneContainer,forecastTwoContainer,forecastThreeContainer, forecastFourContainer, forecastFiveContainer);

    forecastEl.append(forecastContainer);
};


function showResults (location) {
    current.textContent = '';

    var currentContainer = document.createElement("div");

    var currentBody = document.createElement("div");
    currentBody.classList.add('card-body');
    current.append(currentBody);

    var currentCityName = document.createElement("h3");
    currentCityName.textContent = location.name; 

    var currentCityIcon = document.createElement("div");
    var img = document.createElement('img');
    img.setAttribute('src', 'https://openweathermap.org/img/wn/' + location.weather[0].icon + '@2x.png');
    console.log(img)
    currentCityIcon.appendChild(img)

    var currentCityDate = document.createElement("p");
    currentCityDate.textContent = dayjs.unix(location.dt).format('MMM D, YYYY');

    var currentCityTemp =document.createElement("p");
    currentCityTemp.textContent =  "Temperature: " + location.main.temp + " °F";

    var currentCityWind = document.createElement("p");
    currentCityWind.textContent =  "Wind Speed: " + location.wind.speed + " MPH";

    var currentCityHumidity = document.createElement("p");
    currentCityHumidity.textContent =  "Humidity: " + location.main.humidity + "%";

    currentBody.append(currentCityName, currentCityIcon, currentCityDate, currentCityTemp, currentCityWind, currentCityHumidity);

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

function searchHistory() {
    searchHistoryEl.textContent = '';

    if (pastSearchesArray.length > 3) {
        pastSearchesArray.shift()
    };

    for (var i = 0; i < pastSearchesArray.length; i++) {
        var historyContainer = document.createElement("p");
        historyContainer.textContent = pastSearchesArray[i];
        historyContainer.classList.add('btn', 'btn-outline-primary', 'list-group-item', 'px-0', 'history-button');
        searchHistoryEl.appendChild(historyContainer);

        // for (var i = 0; i < 5; i++) {
            // var historyContainer = document.createElement("btn");
            // var city = 
            // historyContainer.textContent = city;
            // historyContainer.classList.add('btn', 'btn-outline-primary', 'list-group-item');
            // searchHistoryEl.appendChild(historyContainer);
            // console.log(historyContainer);
        // }
    }
};

function searchFormSubmit(event) {
    event.preventDefault();

    var city = document.querySelector(".search-input").value;

    pastSearchesArray.push(city);

    localStorage.setItem("pastSearches", JSON.stringify(pastSearchesArray))

    if (!city) {
        console.error("You need a search input value!");
        return;
    }

    searchApi(city);
    searchHistory(city)
};


button.addEventListener("click", searchFormSubmit)
    // event.preventDefault();