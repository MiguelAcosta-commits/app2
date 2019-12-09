import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AgregarhotelPage } from '../agregarhotel/agregarhotel';
import { InfohotelPage } from '../infohotel/infohotel';
import {HOTELES} from "../../data/data.hoteles";
import { Hotel } from "../../interfaces/hotel.interface";


let hoteles:string;

@Component({
  selector: 'page-confighoteles',
  templateUrl: 'confighoteles.html',
})
export class ConfighotelesPage {

  lista = [];

 //hoteles:Hotel[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = [
      {
        'title': 'The Grand Mayan',
        'description': 'GST(Suite), GMR(Master Room), GMS(Master Suite)'
      },
      {
        'title': 'Mayan Palace Golf',
        'description': 'MST(Suite), MMR(Master Room), MMS(Master Suite)'
      },
      {
        'title': 'Sea Garden',
        'description': 'SST(Suite), SMR(Master Room), SMS(Master Suite)'
      },
      {
        'title': 'Mayan Palace Playa',
        'description': 'PST(Suite), PMR(Master Room), PMS(Master Suite)'
      },
      {
        'title': 'Grand Luxxe',
        'description': 'LST(Suite), LMR(Master Room), LMS(Master Suite)'
      },

    ]

    //this.hoteles=HOTELES.slice(0); //Con esto se crea un clon o copia del arreglo de hoteles



  }

  openNavDetailsPage(item) {
    this.navCtrl.push(InfohotelPage, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfighotelesPage');
  }

  otraPagina()
  {
    this.navCtrl.push(AgregarhotelPage);
  }

  borrar_hotel( idx:number)
  {
    this.lista.splice(idx,1);

  }

}
