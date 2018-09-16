import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;
   country: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {
   
     this.storage.get('location').then((val) => {
       if(val != null){
         let location = JSON.parse(val);
         this.city = location.city;
         this.country = location.city;
       } else {
         this.city = 'Helsinki';
         this.country = 'FI'
       }
     })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveLocation() {
    let location = {
      city: this.city,
      country: this.country
    }
    
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
