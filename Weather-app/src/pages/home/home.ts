import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: {
    city: string,
    country: string
  };
  iconURL: string;

  constructor(
    public navCtrl: NavController, 
    private WeatherProvider:WeatherProvider,
    private Storage:Storage) {

  }

  ionViewWillEnter(){
    this.Storage.get('location').then((val) => {
      if(val != null) {
      this.location = JSON.parse(val);
    } else {
      this.location = {
        city: 'Helsinki',
        country: 'fi'
      }
    }

    this.WeatherProvider.getWeather(this.location.city, this.location.country).subscribe(weather =>{  
      this.weather = weather;
    });

    });

   
   
  }
}
