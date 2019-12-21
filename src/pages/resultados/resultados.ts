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

        }
        // Ciclo de vida que se inicializa cuando se entra a una pagina
    ionViewDidLoad() { console.log("entra")
         this._hs.obtener_huespedes()
             .subscribe((data: any) => {
                 this.resultado = data
                 this.guardarStorage();
             })

        // // Detecta si se ha desconectado de internet
        // this.network.onDisconnect().subscribe(() => {
        //     this.obtenerStorage()
        // });

        // // Detecta si se ha conectado a internet
        // this.network.onConnect().subscribe(() => {
        //     this._hs.obtener_huespedes()
        //         .subscribe((data: any) => {
        //             this.resultado = data
        //             this.guardarStorage();
        //         })
        // });
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
            this.resultado = JSON.stringify(this.storage.get('huesped'));
        } else {
            //Escritorio
            this.resultado = JSON.parse(localStorage.getItem("huesped"));
        }
    }

    guardarStorage() {
        if (this.platform.is('cordova')) {
            //Celular
            this.storage.set('huesped', this.resultado);
        } else {
            //Escritorio
            localStorage.setItem('huesped', JSON.stringify(this.resultado));
        }

    }


}
