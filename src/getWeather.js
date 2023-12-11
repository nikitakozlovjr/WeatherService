const getWeather = (weatherService, city) => {
    return response = weatherService.request(city).then((response) => {
        const data = JSON.parse(response.data);
        return data;
    })
};

export default getWeather;