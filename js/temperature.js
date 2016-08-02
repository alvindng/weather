function Temperature (kelvin) {
  this.celsius = (kelvin - 273).toFixed(2);
};

exports.temperatureModule = Temperature
