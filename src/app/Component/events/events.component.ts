import { Component, OnInit } from '@angular/core';
import { EventsServices } from 'src/app/Services/Events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'] ,
  providers: [EventsServices]
})
export class EventsComponent implements OnInit {

  listEvents: Event[];

  constructor(private Events: EventsServices) {
    console.log('events ts work');
   }

  ngOnInit() {
  /*this.Events.getEvents().subscribe(data => {this.events = data});*/
    this.Events.getEvents().subscribe(data => this.listEvents = data);
  }

}
