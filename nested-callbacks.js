let request = require('request');
let fahrenheitToCelsius = require('fahrenheit-to-celsius');

request('https://us1.locationiq.com/v1/search.php?key=44fcebb8c5c660&q=Colima&format=json', function(err, res, body){
    if(err)
    console.log(err);
    else {
        let data = JSON.parse(body);
        let latitud = data[0]['lat'];
        let longitud = data[0]['lon']
        console.log(`latitud:${latitud}, longitud:${longitud}`);
        request(`https://api.darksky.net/forecast/98c6dde1e30901cf32db92c65f79fac9/${latitud},${longitud}`, function(err, res, body){
            if(err)
            console.log(err);
            else 
            {
                let data = JSON.parse(body);
                let temperature = fahrenheitToCelsius(data['currently']['temperature']);
                console.log(temperature + '°C');                 
            }
        })
        let options = { method: 'GET',
        url: 'https://api.openuv.io/api/v1/uv',
        qs: { lat: `${latitud}`, lng: `${longitud}`},
        headers: 
         { 'content-type': 'application/json',
           'x-access-token': 'ee6fef521196eaa60d6e79743993c111' } };
       
       request(options, function (error, response, body) {
         if (error) throw new Error(error);
         let data = JSON.parse(body);
         console.log(data['result']['uv'] + '°');
       });
    }
});

