
async function retrieve () {
    var url = `https://api.weatherapi.com/v1/forecast.json?key=7bed2218a1ac4b92ba5171814221705&q=${sessionStorage.getItem("locationInput")}&days=2&aqi=yes&alerts=no`
    var req = new Request(url);
    
    const response = await fetch(req);
    const weatherData = await response.text();
    const weatherDataText = JSON.parse(weatherData)
    console.log(weatherDataText);
    // JSON parsing ^
    
    //data values for DOM v
    
    // weather icon handling current day
    let icon;
    switch (weatherDataText.current.condition.text){
        case "Mist":
            icon = "icons/misty.png";
            document.getElementById("grad").style = "background-image: linear-gradient(#8ca6af,#fdfdfd);"
            break;
        case "Overcast":
            icon = "icons/overcast.png";
            document.getElementById("grad").style = "background-image: linear-gradient(#b3b9bb,#fdfdfd);"
            break;
        case "Sunny":
            icon = "icons/sun.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#b4eaff,#fdfdfd);"
            break;
        case "Partly cloudy":
            icon = "icons/partlycloudy.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#b3b9bb,#fdfdfd);"
            break;
        case "Clear":
            icon = "icons/clear.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#1d4554,#fdfdfd);"
            break;
        case "Patchy rain possible":
            icon = "icons/patchyrainpossible.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#8d9fa5,#fdfdfd);"
            break;
        case "Torrential rain shower":
            icon = "icons/torrentialrainshower.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#1b2f36,#fdfdfd);"
            break;
        case "Light rain shower":
            icon = "icons/lightrainshower.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#5b8897,#fdfdfd);"
            break;
        case "Cloudy":
            icon = "icons/cloudy.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#b3b9bb,#fdfdfd);"
            break;
        case "Light rain":
            icon = "icons/lightrain.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#7e9ca7,#fdfdfd);"
            break;
        case "Light snow":
            icon = "icons/lightsnow.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#878b8d,#fdfdfd);"
            break;
        case "Light sleet showers":
            icon = "icons/lightsleetshower.svg"
            break;
        case "Moderate or heavy rain shower":
            icon = "icons/moderateorheavyrainshower.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#1b2f36,#fdfdfd);"
            break;
        case "Heavy rain":
            icon = "icons/rain.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#1b2f36,#fdfdfd);"
            break;
        case "Moderate or heavy rain with thunder":
            icon = "icons/storm.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#1b2f36,#fdfdfd);"
            break;
        case "Fog":
            icon = "icons/foggg.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#8ca6af,#fdfdfd);"
            break;
        case "Patchy light rain with thunder":
            icon = "icons/thunder.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#5b8897,#fdfdfd);"
            break;
        case "Thundery outbreaks possible":
            icon = "icons/thunder.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#2c434b,#fdfdfd);"
            break;
        case "Moderate rain":
            icon = "icons/rain.png"
            document.getElementById("grad").style = "background-image: linear-gradient(#2d4e5a,#fdfdfd);"
            break;
    }
    let iconTmr;
    switch (weatherDataText.forecast.forecastday[1].day.condition.text){
        case "Mist":
            iconTmr = "icons/misty.png";
            document.getElementById("nextDay").style = "background-image: linear-gradient(#8ca6af,#fdfdfd);"
            break;
        case "Overcast":
            iconTmr = "icons/overcast.png";
            document.getElementById("nextDay").style = "background-image: linear-gradient(#b3b9bb,#fdfdfd);"
            break;
        case "Sunny":
            iconTmr = "icons/sun.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#b4eaff,#fdfdfd);"
            break;
        case "Partly cloudy":
            iconTmr = "icons/partlycloudy.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#b3b9bb,#fdfdfd);"
            break;
        case "Clear":
            iconTmr = "icons/clear.png"
            if(weatherDataText.current.is_day == 1){
                document.getElementById("nextDay").style = "background-image: linear-gradient(#b4eaff,#fdfdfd);"
            }
            else{
                document.getElementById("nextDay").style = "background-image: linear-gradient(#1d4554,#fdfdfd);"
            }
            break;
        case "Patchy rain possible":
            iconTmr = "icons/patchyrainpossible.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#8d9fa5,#fdfdfd);"
            break;
        case "Torrential rain shower":
            iconTmr = "icons/torrentialrainshower.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#1b2f36,#fdfdfd);"
            break;
        case "Light rain shower":
            iconTmr = "icons/lightrainshower.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#5b8897,#fdfdfd);"
            break;
        case "Cloudy":
            iconTmr = "icons/cloudy.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#b3b9bb,#fdfdfd);"
            break;
        case "Light rain":
            iconTmr = "icons/lightrain.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#7e9ca7,#fdfdfd);"
            break;
        case "Light snow":
            iconTmr = "icons/lightsnow.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#878b8d,#fdfdfd);"
            break;
        case "Light sleet showers":
            iconTmr = "icons/lightsleetshower.svg"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#5b8897,#fdfdfd);"
            break;
        case "Moderate or heavy rain shower":
            iconTmr = "icons/moderateorheavyrainshower.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#1b2f36,#fdfdfd);"
            break;
        case "Heavy rain":
            iconTmr = "icons/rain.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#1b2f36,#fdfdfd);"
            break;
        case "Moderate or heavy rain with thunder":
            iconTmr = "icons/storm.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#1b2f36,#fdfdfd);"
            break;
        case "Fog":
            iconTmr = "icons/foggg.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#8ca6af,#fdfdfd);"
            break;
        case "Patchy light rain with thunder":
            iconTmr = "icons/thunder.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#5b8897,#fdfdfd);"
            break;
        case "Thundery outbreaks possible":
            iconTmr = "icons/thunder.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#2c434b,#fdfdfd);"
            break;
        case "Moderate rain":
            iconTmr = "icons/rain.png"
            document.getElementById("nextDay").style = "background-image: linear-gradient(#2d4e5a,#fdfdfd);"
            break;
    }
    //time icon handling
    let timeForIntify = weatherDataText.location.localtime.slice(10).trim()
    timeForIntify = timeForIntify.replace(":","") 
    let timeForIcon = parseInt(timeForIntify)
    if (timeForIcon > 500 && timeForIcon < 1900){
        document.getElementById("timeIcon").src = "time/day.png"
    }
    else{
        document.getElementById("timeIcon").src = "time/nightt.png"
    }
    
    //setting temperature units and handling temperature settings
    const temperatureText = document.getElementById("temp").textContent;
    let givenTemperature = localStorage.getItem("temperatureInput");
    switch(givenTemperature){
        case "Fahrenheit":
            document.getElementById("temp").textContent = temperatureText + weatherDataText.current.temp_f + "°";
            document.getElementById("temp").style = "font-size: 30pt;"
            document.getElementById("maxTemp").textContent += weatherDataText.forecast.forecastday[0].day.maxtemp_f + "°";
            document.getElementById("minTemp").textContent += weatherDataText.forecast.forecastday[0].day.mintemp_f + "°";
            document.getElementById("avgTempTmr").textContent += weatherDataText.forecast.forecastday[1].day.avgtemp_f + "°";
            document.getElementById("maxTempTmr").textContent += weatherDataText.forecast.forecastday[1].day.maxtemp_f + "°";
            document.getElementById("minTempTmr").textContent += weatherDataText.forecast.forecastday[1].day.mintemp_f + "°";
            break;
        case "Celsius":
            document.getElementById("temp").textContent = temperatureText + weatherDataText.current.temp_c + "°";
            document.getElementById("temp").style = "font-size: 30pt;"
            document.getElementById("maxTemp").textContent += weatherDataText.forecast.forecastday[0].day.maxtemp_c + "°";
            document.getElementById("minTemp").textContent += weatherDataText.forecast.forecastday[0].day.mintemp_c + "°";
            document.getElementById("avgTempTmr").textContent += weatherDataText.forecast.forecastday[1].day.avgtemp_c + "°";
            document.getElementById("maxTempTmr").textContent += weatherDataText.forecast.forecastday[1].day.maxtemp_c + "°";
            document.getElementById("minTempTmr").textContent += weatherDataText.forecast.forecastday[1].day.mintemp_c + "°";
            break;
    }
    
    //AQI card 
    let AQI = weatherDataText.current.air_quality["gb-defra-index"];
    if (AQI <=3){
        document.getElementById("AQICondition").textContent = "Low Air Pollution";
        document.getElementById("AQIGBIndex").textContent += weatherDataText.current.air_quality["gb-defra-index"];
        document.getElementById("AQIUSIndex").textContent += weatherDataText.current.air_quality["us-epa-index"];
        document.getElementById("AQIgrad").style = "background-image: linear-gradient(#69f794,#fdfdfd);"
    
    }
    else if(AQI>=4 && AQI <=6){
        document.getElementById("AQICondition").textContent = "Moderate Air Pollution";
        document.getElementById("AQIGBIndex").textContent += weatherDataText.current.air_quality["gb-defra-index"];
        document.getElementById("AQIUSIndex").textContent += weatherDataText.current.air_quality["us-epa-index"];
        document.getElementById("AQIgrad").style = "background-image: linear-gradient(#f7f569,#fdfdfd);"
    }
    else if(AQI>= 7 && AQI<=9){
        document.getElementById("AQICondition").textContent = "High Air Pollution";
        document.getElementById("AQIGBIndex").textContent += weatherDataText.current.air_quality["gb-defra-index"];
        document.getElementById("AQIUSIndex").textContent += weatherDataText.current.air_quality["us-epa-index"];
        document.getElementById("AQIgrad").style = "background-image: linear-gradient(#f76969,#fdfdfd);"
    }
    else{
        document.getElementById("AQICondition").textContent = "Very High Air Pollution";
        document.getElementById("AQIGBIndex").textContent += weatherDataText.current.air_quality["gb-defra-index"];
        document.getElementById("AQIUSIndex").textContent += weatherDataText.current.air_quality["us-epa-index"];
        document.getElementById("AQIgrad").style = "background-image: linear-gradient(#c92b33,#fdfdfd);"
    }
    document.getElementById("avgHumid").textContent += weatherDataText.forecast.forecastday[0].day.avghumidity + "%"
    
    //Wind Card
    document.getElementById("windSpeed").textContent += weatherDataText.current["wind_mph"] + " mph"
    document.getElementById("windDegree").textContent += weatherDataText.current["wind_degree"] + "°"
    document.getElementById("windDirection").textContent += weatherDataText.current["wind_dir"]
    document.getElementById("windGrad").style = "background-image: linear-gradient(#e5e7e7,#fdfdfd);"
    document.getElementById("maxWind").textContent += weatherDataText.forecast.forecastday[0].day.maxwind_mph + " mph"
    document.getElementById("windGust").textContent += weatherDataText.current["gust_mph"] +" mph"
    
    //Astro Card
    document.getElementById("sunset").textContent += weatherDataText.forecast.forecastday[0].astro.sunset
    document.getElementById("sunrise").textContent += weatherDataText.forecast.forecastday[0].astro.sunrise
    
     if((timeForIcon >=400 && timeForIcon <= 700) || timeForIcon >=1830 && timeForIcon <= 2000){
        document.getElementById("astroGrad").style = "background-image: linear-gradient(#f1a363,#fdfdfd);"
     }
     else if(timeForIcon > 800 && timeForIcon < 1830){
        document.getElementById("astroGrad").style = "background-image: linear-gradient(#75d0e7,#fdfdfd);"
     }
     else if(timeForIcon > 2000 || timeForIcon < 400){
        document.getElementById("astroGrad").style = "background-image: linear-gradient(#0a2830,#fdfdfd);"
     }
     console.log(timeForIcon)
    
     //Tomorrow Card (excluding switch statement for icon and avg temp)
    document.getElementById("conditionTmr").textContent = weatherDataText.forecast.forecastday[1].day.condition.text;
    document.getElementById("maxWindTmr").textContent += weatherDataText.forecast.forecastday[1].day.maxwind_mph + " mph"
    //add handling for when a location is not found
    //setting main card info / avg humidiity and maxtemp is in setting temperature section
    document.getElementById("locationHeader").textContent = weatherDataText.location.name + `, ${weatherDataText.location.country}`
    const theirTime = document.getElementById("localTime").textContent;
    const updated = document.getElementById("lastUpdated").textContent;
    document.getElementById("lastUpdated").textContent = updated + weatherDataText.current.last_updated
    document.getElementById("localTime").textContent = theirTime + weatherDataText.location.localtime
    document.getElementById("condition").textContent = weatherDataText.current.condition.text
    document.getElementById("conditionIcon").src = icon;
    document.getElementById("tmrIcon").src = iconTmr;
    if(weatherDataText.forecast.forecastday[0].day.daily_will_it_rain == 1||weatherDataText.forecast.forecastday[0].day.daily_will_it_snow == 1){
        document.getElementById("willItPrecipitate").textContent = "It will precipitate today."
        console.log("test")
    }
    else if(weatherDataText.forecast.forecastday[0].day.daily_will_it_rain == 0 || weatherDataText.forecast.forecastday[0].day.daily_will_it_snow == 0){
        document.getElementById("willItPrecipitate").textContent = "It won't precipitate today."
    }
    
    //button to go back to input.html
    document.getElementById("returnButton").onclick = () =>{
        location.href = "input.html"
        localStorage.setItem("savedTempInput",sessionStorage.getItem("temperatureInput"))
    }
    }
    retrieve();
    // if (weatherDataText.error.message) {
    //     $("body").hide();
    // }
    // else{
    //     retrieve();
    // }
    
    //doc.getelmntbyid("weathericon").image = current.condition.icon
    
    //when updating website, maybe add fetch request to a interval so that it updates every minute or so?
    //maybe transfer to glitch when finsihed so it's easier to share