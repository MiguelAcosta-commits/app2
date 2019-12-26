import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
// import { BuscadorProvider } from '../../providers/buscador/buscador';
import { HuespedPage } from '../../pages/huesped/huesped';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { TodosProvider } from '../../providers/todos/todos';


@Component({
    selector: 'page-resultados',
    templateUrl: 'resultados.html',
})
export class ResultadosPage {

    huespedPage = HuespedPage;

    // Funcionaria como base de datos local
    resultado: any = [];
    // Esta variable se cambiaria en el html de la vista en ves de resultados
    arrayHuesped: any = [];


    constructor(public navCtrl: NavController,
            public navParams: NavParams,
            public _hs: TodosProvider,
            private platform: Platform,
            private storage: Storage,
            private network: Network) {
              this.EstadoDeRed();

        }
        // Ciclo de vida que se inicializa cuando se entra a una pagina
    ionViewDidLoad() {

        // Descomentar Cuando se este haciendo pruebas en el navegador
        // Comentar las lineas cuando se va a ejecuatar en android apk
        // this._hs.obtener_huespedes()
        //     .subscribe((data: any) => {
        //         this.resultado = data
        //         this.guardarStorage();
        //         console.log("entra a ionviewdidload")
        //     })

        // Comentar Cuando se este haciendo pruebas en el navegador
        // Descomenatr las lineas cuando se va a ejecuatar en android apk

        // // // Detecta si se ha desconectado de internet

    }

    EstadoDeRed()
    {
      console.log("Ingreso a la funcion de red");
      this.network.onDisconnect().subscribe(() => {
        this.obtenerStorage()
        console.log("Desconectado de Internet");
    });

  // // // Detecta si se ha conectado a internet
  console.log("Conectado a Internet");
    this.network.onConnect().subscribe(() => {
        this._hs.obtener_huespedes()
            .subscribe((data: any) => {
                this.resultado = data
                this.guardarStorage();
            })
    });
    }



    array: any = {
        //Mayan Palace Golf
        'MST': 'mayangolf',
        'MMR': 'mayangolf',
        'MSS': 'mayangolf',
        //Grand Mayan
        'GST': 'grandmayan',
        'GMR': 'grandmayan',
        'GSS': 'grandmayan',
        //Mayan Palace Playa
        'PST': 'mayanplaya',
        'PMR': 'mayanplaya',
        'PSS': 'mayanplaya',
        //Sea Garden
        'SST': 'seagarden',
        'SMR': 'seagarden',
        'SSS': 'seagarden',
    }


    buscar_huesped(ev: any) {

        let valor = ev.target.value.toLowerCase();
        this.arrayHuesped = [];
        console.log(valor);
        if (valor != '') {
            for (let huesped of this.resultado) {
                let nombre = huesped.h_nom.toLowerCase();
                if (nombre.indexOf(valor) >= 0) {
                    this.arrayHuesped.push(huesped);
                }
            }
        } else {
            this.arrayHuesped = [];
        }
    }

    obtenerStorage() {

      if (this.platform.is('cordova')) {
        //Celular


        this.storage.get('huesped').then((data) => {
            this.resultado = JSON.parse(data);
        })

    } else {
        //Escritorio
        this.resultado = JSON.parse(localStorage.getItem("huesped"));
    }

    }

    guardarStorage() {
        if (this.platform.is('cordova')) {
            //Celular

            this.storage.ready()
            .then(()=>
            {
              this.storage.set('huesped', JSON.stringify(this.resultado));
            })


        } else {
            //Escritorio
            localStorage.setItem('huesped', JSON.stringify(this.resultado));
        }

    }


}
