import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

let temporizador:number;


@Component({
  selector: 'page-temporizador',
  templateUrl: 'temporizador.html',
})
export class TemporizadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemporizadorPage');
  }

}
