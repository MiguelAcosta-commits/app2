import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';

import { Platform } from 'ionic-angular';
import { Observable, BehaviorSubject } from 'rxjs';
import { Network } from '@ionic-native/network';

@Injectable()
export class TodosProvider {


    private online: Observable<boolean> = null;
    private hasConnection = new BehaviorSubject(false);

    constructor(
        private network: Network,
        private platform: Platform,
        private http: HttpClient) {

        if (this.platform.is('cordova')) {
            // on Device
            this.network.onConnect().subscribe(() => {
                console.log('El internet se ha conectado');
                this.hasConnection.next(true);
                return;
            });
            this.network.onDisconnect().subscribe(() => {
                console.log('Se ha desconectado');
                this.hasConnection.next(false);
                return;
            });
        }
    }

    public getNetworkType(): string {
        return this.network.type;
    }

    public getNetworkStatus(): Observable<boolean> {
        return this.hasConnection.asObservable();
    }

    public obtenerHuesped(): Observable<any> {
        return this.http.get(URL_SERVICIOS + "/prueba/obtener_todos_los_huespedes/");
    }

}

