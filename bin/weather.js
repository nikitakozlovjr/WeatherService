#!/usr/bin/env node

import weatherService from "../src/httpClient.js";
import getWeather from "../src/getWeather.js";

const coordinates = [process.argv[2], process.argv[3]]

console.log(getWeather(weatherService, coordinates));