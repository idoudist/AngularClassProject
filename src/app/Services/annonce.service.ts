
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';




@Injectable()
export class AnnonceServices {
    constructor (private http: Http) {
        console.log('Annonce Services');
    }

    getAnnonces() {
        return this.http.get('../assets/annonce.json').map(res => res.json());
    }
}
