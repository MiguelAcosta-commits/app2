import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';
import { TemporizadorPage } from '../temporizador/temporizador';
import { ConfigbdPage } from '../configbd/configbd';
import { ConfighotelesPage } from '../confighoteles/confighoteles';
import { InfohotelPage } from '../infohotel/infohotel';
import { Storage } from '@ionic/storage';
import { TodosProvider } from '../../providers/todos/todos';



let nombrehuesped:string;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public _hs:TodosProvider,
              private platform: Platform,
              private storage: Storage) {

                this.ngOnlnit();

                this.guardarStorage();
                this.obtenerStorage();

  }
  todos:any=[];

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

  ngOnlnit()
  {
    console.log('ngOninit');
    this.obtener_todos_huesped;


  }

  obtener_todos_huesped(ev:any)
  {
    let valor = ev.target.value;
    console.log(valor);

    this._hs.obtener_huespedes()
    .subscribe( (data:any) => {
        this.todos = data
        console.log(data)
        this.guardarStorage();
    })

  }
  guardarStorage()
  {
    if (this.platform.is('cordova') )
    {
      //Celular
      this.storage.set('todos',this.todos);
    }
    else
    {
      //Escritorio
      localStorage.setItem('todos',JSON.stringify(this.todos));
    }

  }

  cargarStorage()
  {
    return new Promise((resolve, reject) => {

    if (this.platform.is('cordova') )
    {
      //Celular

      this.storage.get('todos').then(val =>
        {
          if (val)
          {
            this.todos=val;
            resolve(true);
          }else
          {
            resolve(false);
          }
        })



      this.storage.set('todos',this.todos);
    }
    else
    {
      //Escritorio
      if (localStorage.getItem('todos') )
      {
        this.todos=localStorage.getItem('todos');
        resolve(true);

      }
      else {
        resolve(false);
      }
    }

  });

  }

  obtenerStorage()
  {
    let huesped =JSON.parse( localStorage.getItem("todos") );
    console.log("todos:" , huesped);
  }

}
