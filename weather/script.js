const apikey="0cf9d221951f4fe6da8ec11b7b72c24b"
const link="https://api.openweathermap.org/data/2.5/weather?units=metric&q="


function getweather(){
fetch(link+document.getElementById("cit").value+`&appid=${apikey}`)
.then(function(response){response.json()
.then(function(data) {

        document.querySelector(".City").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"
        document.querySelector(".Humidity").innerHTML=data.main.humidity+"%"
        document.querySelector(".Wind").innerHTML=data.wind.speed+"km/h"
        console.log(data)
        if(data.weather[0].main=="Clouds"){
            document.querySelector(".WeatherIcon").src="img/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            document.querySelector(".WeatherIcon").src="img/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
            document.querySelector(".WeatherIcon").src="img/rain.png"
        } 
        else if(data.weather[0].main=="Drizzle"){
            document.querySelector(".WeatherIcon").src="img/drizzle.png"
        } 
        else if(data.weather[0].main=="Mist"){
            document.querySelector(".WeatherIcon").src="img/Mist.png"
        } 
        else if(data.weather[0].main=="Snow"){
            document.querySelector(".WeatherIcon").src="img/snow.png"
        }
        else if(data.weather[0].main=="Haze"){
            document.querySelector(".WeatherIcon").src="img/haze.png"
        }
        document.querySelector(".weather").style.display="block"
    });
})
}
document.getElementById("btn").addEventListener("click",()=>{
    getweather()

})

