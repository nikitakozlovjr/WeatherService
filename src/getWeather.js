const getWeather = (weatherService, coordinates) => {
    return weatherService.request(coordinates).then((response) => {
        const data = JSON.parse(response.data);
        return data;
    })
};

export default getWeather;