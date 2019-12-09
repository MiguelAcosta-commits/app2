import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//import necesario para manejar el local storage
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResultadosPage } from '../pages/resultados/resultados';
import { TemporizadorPage } from '../pages/temporizador/temporizador';
import { HuespedPage } from '../pages/huesped/huesped';
import { ConfigbdPage } from '../pages/configbd/configbd';
import { ConfighotelesPage } from '../pages/confighoteles/confighoteles';
import { AgregarhotelPage } from '../pages/agregarhotel/agregarhotel';
import { InfohotelPage } from '../pages/infohotel/infohotel';

import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { BuscadorProvider } from '../providers/buscador/buscador';
import { UsuarioProvider } from '../providers/usuario/usuario';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultadosPage,
    TemporizadorPage,
    HuespedPage,
    ConfigbdPage,
    ConfighotelesPage,
    AgregarhotelPage,
    InfohotelPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    CustomFormsModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultadosPage,
    TemporizadorPage,
    HuespedPage,
    ConfigbdPage,
    ConfighotelesPage,
    AgregarhotelPage,
    InfohotelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BuscadorProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
