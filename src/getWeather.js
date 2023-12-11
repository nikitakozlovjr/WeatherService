const getWeather = (weatherService, coordinates) => {
    return response = weatherService.request(coordinates).then((response) => {
        const data = JSON.parse(response.data);
        return data;
    })
};

export default getWeather;