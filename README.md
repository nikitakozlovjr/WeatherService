<picture>
  <img alt="Yandex Weather" src="./img/logo_weather_ru_indoor.png">
</picture> 

### 

[![Maintainability](https://api.codeclimate.com/v1/badges/c588849596f27f112c5a/maintainability)](https://codeclimate.com/github/nikitakozlovjr/WeatherService/maintainability)

# WeatherService
### Discription
___

This utility is a weather service and returns the temperature at the specified coordinates according to the [Yandex Weather](https://yandex.ru/pogoda) service.

### Installation Instructions
___

Clone this file to yourself using the `git clone` command and run the following commands:

```
make install
make publish
npm link
```

### Using the service

___

The Meteorological Service is waiting for the input of two parameters separated by a **space**:
- latitude 
- longitude
  
The command to call the weather `weatherservice`.

```
weatherservice 45.89 89.34
```
The decimal parts of latitude and longitude are passed through a dot.

### The result of the service

___

The result of the service is the temperature at the moment and how this temperature feels. The first line mentions the Yandex Weather service, according to which the result is returned.

### An example of the work

____

[![asciicast](https://asciinema.org/a/hGsXqZOIk2DsetqM9PK05b34x.svg)](https://asciinema.org/a/hGsXqZOIk2DsetqM9PK05b34x)