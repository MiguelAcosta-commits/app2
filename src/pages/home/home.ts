import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';
import { TemporizadorPage } from '../temporizador/temporizador';
import { ConfigbdPage } from '../configbd/configbd';
import { ConfighotelesPage } from '../confighoteles/confighoteles';
import { InfohotelPage } from '../infohotel/infohotel';

let nombrehuesped:string;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
