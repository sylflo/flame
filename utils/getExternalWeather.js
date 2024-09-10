const Weather = require('../models/Weather');
const axios = require('axios');
const loadConfig = require('./loadConfig');

const getExternalWeather = async () => {
  const { lat, long, isCelsius } = await loadConfig();
  const params = {
    latitude: lat,
    longitude: long,
    current: ['is_day', 'temperature_2m', 'relative_humidity_2m', 'cloud_cover', 'wind_speed_10m', 'weathercode'],
  };
  if (!isCelsius) {
    params.temperature_unit = "fahrenheit";
  }

  // Fetch data from external API
  try {
    const res = await axios.get('https://api.open-meteo.com/v1/forecast', { params });
    // TODO weather code
    // Save weather data
    const cursor = res.data.current;
    const weatherData = await Weather.create({
      externalLastUpdate: cursor.time,
      tempC: cursor.temperature_2m,
      tempF: cursor.temperature_2m,
      isDay: Boolean(cursor.is_day),
      cloud: cursor.cloud_cover,
      conditionText: '',
      conditionCode: cursor.weathercode,
      humidity: cursor.relative_humidity_2m,
      windK: cursor.wind_speed_10m,
      windM: cursor.wind_speed_10m,
    });
    return weatherData;
  } catch (err) {
    throw new Error('External API request failed');
  }
};

module.exports = getExternalWeather;
