import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-huesped',
  templateUrl: 'huesped.html',
})
export class HuespedPage {

  huesped:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.navParams.get("huesped"));
    this.huesped=this.navParams.get("huesped");
  }
  array: any = {
    //Mayan Palace Golf
    'MST': 'mayangolf',
    'MMR': 'mayangolf',
    'MSS': 'mayangolf',
    //Grand Mayan
    'GST': 'grandmayan',
    'GMR': 'grandmayan',
    'GSS': 'grandmayan',
    //Mayan Palace Playa
    'PST': 'mayanplaya',
    'PMR': 'mayanplaya',
    'PSS': 'mayanplaya',
    //Sea Garden
    'SST': 'seagarden',
    'SMR': 'seagarden',
    'SSS': 'seagarden',
}



}
