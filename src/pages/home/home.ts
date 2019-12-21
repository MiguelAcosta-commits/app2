import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';
import { TemporizadorPage } from '../temporizador/temporizador';
import { ConfigbdPage } from '../configbd/configbd';
import { ConfighotelesPage } from '../confighoteles/confighoteles';
import { InfohotelPage } from '../infohotel/infohotel';
import { Storage } from '@ionic/storage';
import { TodosProvider } from '../../providers/todos/todos';
import { Network } from '@ionic-native/network';

let nombrehuesped:string;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public _hs:TodosProvider,
              public platform: Platform,
              public storage: Storage,
              public network: Network) {

                this.ngOnlnit();


  }
  todos:any=[];

  ngOnlnit()
  {
    console.log('ngOninit');
  }
  otraPagina()
  {
    this.navCtrl.push(ResultadosPage);
  }
  abrirPaginaTemp()
  {
    this.navCtrl.push(TemporizadorPage);
  }
  abrirPaginaConfigBD()
  {
    this.navCtrl.push(ConfigbdPage);
  }
  abrirPaginaConfigH()
  {
    this.navCtrl.push(ConfighotelesPage);
  }

}
