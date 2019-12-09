import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

let ip:number;
let nombrebd:string;
let usuario:any;
let contrasena:any;



@Component({
  selector: 'page-configbd',
  templateUrl: 'configbd.html',
})
export class ConfigbdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigbdPage');
  }


}
