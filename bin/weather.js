#!/usr/bin/env node

import weatherService from "../src/httpClient.js";
import getWeather from "../src/getWeather.js";

const city = process.argv[2];

console.log(getWeather(weatherService, city));