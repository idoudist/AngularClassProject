import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/Models/Actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input() actor: Actor;
  @Output() deleteEvent = new EventEmitter();
  @Output() favEvent = new EventEmitter();

  constructor() {
    console.log('ActorComponent:Constructor');
   }

  ngOnInit() {
    console.log('ActorComponent:OnInit') ;
  }

  ngOnChange() {
    console.log('ActorComponent:OnChange') ;
  }
  delete1(actor) {
     this.deleteEvent.emit(actor);
  }

  fav1(actor) {
    this.favEvent.emit(actor);
  }


}
