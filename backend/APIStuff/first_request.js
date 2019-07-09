const rp = require('request-promise');
rp('https://api.openweathermap.org/data/2.5/weather?q=Sacramento&APPID=8739ee1e9fbbea9fca9ef7bb771ef0dd').then((body) => {
    var parsedData = JSON.parse(body);
    console.log(parsedData.main.temp);
    var tempKelvin = parsedData.main.temp;
    var tempFahr = ((tempKelvin - 273.15) * (9/5)) + 32;
    console.log(`The temperature in ${parsedData.name} is ${String(Math.round(tempFahr))} F`); 
}).catch((err))