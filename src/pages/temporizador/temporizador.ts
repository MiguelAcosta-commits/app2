import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


let temporizador:number;


@Component({
  selector: 'page-temporizador',
  templateUrl: 'temporizador.html',
})
export class TemporizadorPage {
  huesped:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemporizadorPage');
  }

}
