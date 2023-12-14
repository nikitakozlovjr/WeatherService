const getWeather = (weatherService, coordinates) => {
    return weatherService.request(coordinates).then((response) => {
        const temp = response.fact.temp; // temperature on thermometer
        const feelsLike = response.fact.feels_like; // how does it feel

        console.log(`Now the temperature at these coordinates is ${temp} degrees, but feels like ${feelsLike}`);
    })
};

export default getWeather;