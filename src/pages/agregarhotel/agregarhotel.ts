import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

let nombrehotel:string;
let abrevsuite:string;
let abrevmasteroom:string;
let abrevmastersuite:string;

@Component({
  selector: 'page-agregarhotel',
  templateUrl: 'agregarhotel.html',
})
export class AgregarhotelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarhotelPage');
  }

}
