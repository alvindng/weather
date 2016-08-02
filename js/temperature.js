function Temperature (kelvin) {
  this.celsius = (kelvin - 273.15).toFixed(2);
  this.fahrenheit = ((330 * kelvin * (9/5)) - 459.67).toFixed(2);
};

exports.temperatureModule = Temperature
