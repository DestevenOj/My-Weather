let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
let temperatureSection = document.querySelector('.temperature-section');
const temperatureSpan = document.querySelector('.temperature-section span');

let city = document.getElementById('city-name').value;
let cityHolder = document.getElementById('city-name')
let appId = 'd5c497e293875d0f73a43fed9b573ae2';

// call for api by -- jquery ajax
$(document).ready(function(){
    $('button').click(function(){
        let api = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+ appId+'&units=imperial';
      $.get(api, function(data, status){
          alert( status );
          console.log(data);
         
          // create variables to store data from api objects
          const {temp, pressure} = data.main;
          const {description, icon} = data.weather[0];

          const temperatureFahrenheit = temp;
 
          //set DOM Elements from the API
          temperatureDegree.textContent = temperatureFahrenheit.toFixed(1);
          temperatureDescription.textContent = description;
          locationTimezone.textContent = data.name;
          // FORMULA FOR CELSIUS
          let celsius = (temperatureFahrenheit - 32) * (5 / 9);
          //Set Icon

          //Change temperature to Celsius/Farenheit
          temperatureSection.addEventListener('click', () => {
              if(temperatureSpan.textContent === "°F"){
                  temperatureSpan.textContent = "℃";
                  temperatureDegree.textContent = celsius.toFixed(1);
    
              } else {
                  temperatureSpan.textContent = "°F";
                  temperatureDegree.textContent= temperatureFahrenheit.toFixed(1);
              }
          });
      });
    });
    $("#city-name").click(function() {
        $(this).select();

    });
  });