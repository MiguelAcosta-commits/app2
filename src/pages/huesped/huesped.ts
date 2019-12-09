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



}
