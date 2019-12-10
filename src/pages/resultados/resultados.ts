import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { BuscadorProvider } from '../../providers/buscador/buscador';
import { HuespedPage } from '../../pages/huesped/huesped';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  huespedPage = HuespedPage;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _hs:BuscadorProvider,
              private platform: Platform,
              private storage: Storage ) {

  }
  resultado:any=[];


   buscar_huesped(ev:any)
  {
    let valor = ev.target.value;
    console.log(valor);

    //this._hs.buscar_huesped1(valor);
    //console.log('valor:', this._hs.buscar_huesped1(valor));

    this._hs.buscar_huesped1(valor)
    .subscribe( (data:any) => {
        this.resultado = data
        console.log(data)
        this.guardarStorage();

        let arra=
        {
          //Mayan Palace Golf
          'MST': 'GREEN',
          'MMR': 'GREEN',
          'MSS': 'GREEN',
          //Grand Mayan
          'GST': 'RED',
          'GMR': 'RED',
          'GSS': 'RED',
          //Mayan Palace Playa
          'PST': 'BLUE',
          'PMR': 'BLUE',
          'PSS': 'BLUE',
          //Sea Garden
          'SST': 'ORANGE',
          'SMR': 'ORANGE',
          'SSS': 'ORANGE',
        }
        let tipoHotel= this.resultado.h_tpo_hab;
        let color = arra[tipoHotel];
        console.log(color);

    })

  }

  guardarStorage()
  {
    if (this.platform.is('cordova') )
    {
      //Celular
      this.storage.set('huesped',this.resultado);
    }
    else
    {
      //Escritorio
      localStorage.setItem('huesped',this.resultado);
    }

  }

  cargarStorage()
  {
    return new Promise((resolve, reject) => {

    if (this.platform.is('cordova') )
    {
      //Celular

      this.storage.get('huesped').then(val =>
        {
          if (val)
          {
            this.resultado=val;
            resolve(true);
          }else
          {
            resolve(false);
          }
        })



      this.storage.set('huesped',this.resultado);
    }
    else
    {
      //Escritorio
      if (localStorage.getItem('huesped') )
      {
        this.resultado=localStorage.getItem('huesped');
        resolve(true);

      }
      else {
        resolve(false);
      }
    }

  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }
}
