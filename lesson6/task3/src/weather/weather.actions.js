import { fetchWeatherData } from './weather.gateway.js';

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const getData = weatherData => ({
  type: GET_WEATHER_DATA,
  payload: {
    weatherData,
  },
});

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then(data => {
      dispatch(getData(data));
    });
  };
};
