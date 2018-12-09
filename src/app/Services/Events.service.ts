
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';




@Injectable()
export class EventsServices {
    constructor (private http: Http) {
        console.log('Events Services');
    }

    getEvents() {
        return this.http.get('../assets/events.json').map(res => res.json());
    }
}
