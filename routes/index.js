let express = require('express');
let router = express.Router();
let url    = 'http://api.openweathermap.org/data/2.5/weather?q='
let appId  = 'appid=b7df2b21211ac075ad73e8c0e0c1a4b1';
let units  = '&units=metric'; 
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  let city = "Copenhagen";
   url = url+city+"&"+appId;
request(url, function (error, response, body) {
      body = JSON.parse(body);
      console.log(body);
      if(error && response.statusCode != 200){
        throw error;
      }
    let country = (body.sys.country) ? body.sys.country : '' ;
    let forecast = "for "+city;
    res.render('index', {body : body, forecast: forecast});
   });
});

router.post('/weather', function(req, res, next){
  let city = req.body.city;
  url = url+city+"&"+appId;
 request(url, function (error, response, body) {
      body = JSON.parse(body);
      console.log(body);
      if(error && response.statusCode != 200){
        throw error;
      }
    let country = (body.sys.country) ? body.sys.country : '' ;
    let forecast = "for "+city;
    res.render('index', {body : body, forecast: forecast});
   });
});
module.exports = router;
