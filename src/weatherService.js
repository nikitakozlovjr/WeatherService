import fs from 'node:fs';

const apiUrl = 'https://api.weather.yandex.ru/v2/informers?';
const apiKey = fs.readFileSync('__fixtures__/api_key_weather.txt', 'utf-8');

class WeatherService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    };

    async request([lat, lon]) {
        const url = new URL(`lat=${lat}&lon=${lon}`, apiUrl);
        const response = await this.httpClient.get(`${url}\nX-Yandex-API-Key: ${apiKey}`);
        const data = JSON.parse(response.data);
        return data;
    }
};

export default WeatherService;