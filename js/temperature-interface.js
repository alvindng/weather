var Temperature = require('./../js/temperature.js').temperatureModule;
var apiKey = require('./../.env').apiKey;
$(document).ready(function() {
  $('#weatherTemperature').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var celsius = new Temperature(response.main.temp);
      $('.showTemperature').html("The temperature in " + city + " is " + response.main.temp + "K, " + celsius.celsius + "&#x2103 .");
    }).fail(function(error) {
      $('.showTemperature').text(error.responseJSON.message);
    });
  });
});
