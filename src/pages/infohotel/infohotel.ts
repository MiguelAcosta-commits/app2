import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-infohotel',
  templateUrl: 'infohotel.html',
})
export class InfohotelPage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfohotelPage');
  }

}
