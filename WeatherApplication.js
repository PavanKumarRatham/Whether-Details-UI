//weather application
let searchInputBox=document.getElementById("city_name_input_box");
let searchIconContainer=document.getElementById("search_icon_container");
let weatherAPIURL;
searchIconContainer.addEventListener("click",async ()=>{
    let cityName=searchInputBox.value;
    weatherAPIURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0b244960c2639c0a240de351ba7fc2a6`;
    let weatherAPIResponse=await fetch(weatherAPIURL);
    let weatherReport=await weatherAPIResponse.json();
    console.log(weatherReport);

    document.getElementById("city_name").textContent=weatherReport.name;
    document.getElementById("weather_status_name").textContent=weatherReport.weather[0].description;
    document.getElementById("temperature_value").textContent=parseInt(weatherReport.main.temp-273.15);
    document.getElementById("humidity_value").textContent=`${weatherReport.main.humidity}%`;
    document.getElementById("wind_value").textContent=`${weatherReport.wind.speed}m/s`;
    let weatherID=weatherReport.weather[0].id;
    let weatherImage=document.getElementById("weather_image_element");
    if(weatherID>=200 && weatherID<=232){
        weatherImage.src="../../../assets/images/WeatherThunder.png";
    }
    else if(weatherID>=300 && weatherID<=321){
        weatherImage.src="../../../assets/images/WeatherDrizzle.png";
    }
    else if(weatherID>=500 && weatherID<=532){
        weatherImage.src="../../../assets/images/WeatherRainy.png";
    }
    else if(weatherID>=600 && weatherID<=622){
        weatherImage.src="../../../assets/images/WeatherSnow.png";
    }
    else if(weatherID>=700 && weatherID<=781){
        weatherImage.src="../../../assets/images/WeatherAtmosphere.png";
    }
    else if(weatherID==800){
        weatherImage.src="../../../assets/images/WeatherClearSky.png";
    }
    else if(weatherID>=801 && weatherID<=804){
        weatherImage.src="../../../assets/images/WeatherCloudy.png";
    }
    searchInputBox.value="";
    document.getElementById("degree_celcius_container").style.display="inline";
})