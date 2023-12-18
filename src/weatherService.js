import fs from 'node:fs';

const apiUrl = 'https://api.weather.yandex.ru/v2/informers';
const apiKey = fs.readFileSync('assets/api_key.txt', 'utf-8');

class WeatherService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    };

    async request([lat, lon]) {
        const url = new URL(`?lat=${lat}&lon=${lon}`, apiUrl);
        const response = await this.httpClient.get(url, { headers: {'X-Yandex-API-Key': apiKey} });;
        return response.data;
    }
};

export default WeatherService;