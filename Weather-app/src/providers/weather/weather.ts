import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey = '327ac473a3fd11bd371da1f171677064';
  urlbase;

  constructor(public http: Http) {
    //console.log('Hello WeatherProvider Provider');
    this.urlbase = 'https://api.openweathermap.org/data/2.5/weather?q=';
    //console.log(this.getWeather('Helsinki','fi'));
  }

  getWeather(city, country) {
    return this.http.get(this.urlbase + city + ',' + country + '&APPID=' + this.apiKey + '&units=metric')
    .map(res => res.json());
  }

}
