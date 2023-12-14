const getWeather = (weatherService, coordinates) => {
    return weatherService.request(coordinates).then((response) => {
        console.log(response);
    })
};

export default getWeather;