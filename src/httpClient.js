import axios from "axios";
import WeatherService from "./weatherService.js";

const weatherService = new WeatherService(axios);

export default weatherService;