const apiUrl = '';

class WeatherService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    };

    async requet(city) {
        const url = new URL(`cities/${city}`, apiUrl);
        const response = await this.httpClient.get(url);
        return response;
    }
};

export default WeatherService;