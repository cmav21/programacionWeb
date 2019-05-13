// let axios = require('axios');

// axios.get('https://api.darksky.net/forecast/98c6dde1e30901cf32db92c65f79fac9/37.8267,-122.4233')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
let request = require('request');
let celsiusToFahrenheit = require('celsius-to-fahrenheit');
let fahrenheitToCelsius = require('fahrenheit-to-celsius');
// request.get('https://api.darksky.net/forecast/98c6dde1e30901cf32db92c65f79fac9/37.8267,-122.4233')
// .on('response', response => console.log(response))
// request('https://api.darksky.net/forecast/98c6dde1e30901cf32db92c65f79fac9/19.2433,-103.725', (err, res, body)=>{
//     let data = JSON.parse(body);
//     let temperature = fahrenheitToCelsius(data['currently']['temperature']);
//     console.log(temperature);
//     console.log(data['currently']['temperature']);
// });

// request('https://api.darksky.net/forecast/98c6dde1e30901cf32db92c65f79fac9/19.2433,-103.725', (err, res, body)=>{
//     let data = JSON.parse(body);
//     let temperature = fahrenheitToCelsius(data['currently']['temperature']);
//     console.log(temperature);
//     console.log(data['currently']['temperature']);
// });

request('https://api.darksky.net/forecast/98c6dde1e30901cf32db92c65f79fac9/19.2433,-103.725', (err, res, body) => {
    promise = new Promise((res, rej)=>{
        if(body){
            let data = JSON.parse(body);
        let temperature = fahrenheitToCelsius(data['currently']['temperature']);
            res(data['currently']['temperature']);
        } else {
            rej(err);
        }
    }).then(data => console.log(data)).catch(e => console.log(e))
    
});

//api de google

