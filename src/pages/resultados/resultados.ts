import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
// import { BuscadorProvider } from '../../providers/buscador/buscador';
import { HuespedPage } from '../../pages/huesped/huesped';
import { TodosProvider } from '../../providers/todos/todos';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'page-resultados',
    templateUrl: 'resultados.html',
})
export class ResultadosPage implements OnInit {

    huespedPage = HuespedPage;


    // Funcionaria como base de datos local
    resultado: any = [];
    // Esta variable se cambiaria en el html de la vista en ves de resultados
    arrayHuesped: any = [];
    isConnected = false;
    Counter = 1;
    limit = 1

    ngOnInit() {
           this.CargarDataTiming()
    }

    constructor(public navCtrl: NavController,
            public navParams: NavParams,
            public _hs: TodosProvider,
            private alertCtrl: AlertController,
            private platform: Platform,
            private storage: Storage) {
        }



    public alert(mensaje: string){
        const alert = this.alertCtrl.create({
            title: 'Alerta de wifi!',
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    }

    public CargarData() {
    this._hs.getNetworkStatus().subscribe((connected: boolean) => {
        this.isConnected = connected;
        if (this.isConnected && this.Counter <= this.limit) {
            try {
                this._hs.obtenerHuesped().subscribe(
                success => {
                    this.resultado = success;
                    this.guardarStorage()
                    //this.alert('Hay internet android')
                }, error => {
                    this.obtenerStorage()
                    //this.alert('No tiene internet android '+ this.resultado)
                    console.log(JSON.stringify(error))
                });

            } catch (err) {
                console.log('error en el servicio', err);
                this.obtenerStorage()
                this.alert('No tiene internet '+ this.resultado)
            }

        } else if(!this.isConnected && this.Counter <= this.limit){
            try {
                this._hs.obtenerHuesped().subscribe(
                success => {
                    this.resultado = success;
                    this.guardarStorage()
                    //his.alert('Hay internet')
                }, error => {
                    this.obtenerStorage()
                    //this.alert('No tiene internet '+ this.resultado)
                    console.log(JSON.stringify(error))
                });

            } catch (err) {
                console.log('err testNetworkConnection', err);
                this.obtenerStorage()
                this.alert('No tiene internet '+ this.resultado)
            }
        }
        this.Counter++;
    })
    }

    public CargarDataTiming(){
        setInterval( () =>{
            this.CargarData()
        })
    }

    public guardarStorage() {
        if (this.platform.is('cordova')) {
            //Celular
            this.storage.ready().then( () =>{
              this.storage.set('huesped', JSON.stringify(this.resultado));
            })
        } else {
            localStorage.setItem('huesped', JSON.stringify(this.resultado));
        }
    }

    public obtenerStorage() {
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

    public buscar_huesped(ev: any) {
        // CAMBIAR EN huesped.title por el que se tenia anterior
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

    public arrayColores: any = {
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

}
