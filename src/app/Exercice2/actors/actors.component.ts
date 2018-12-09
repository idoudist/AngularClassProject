import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/Models/Actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  listActors: Actor[];
  listFav: Actor[];
  show: boolean;
  constructor() {
    console.log('ActorsComponent:Constructor');
  }

  ngOnInit() {
    this.listActors = [
      {'lastName': 'Robert', 'firstName': 'Julia'},
     {'lastName': 'Walker', 'firstName': 'Paul'},
      {'lastName': 'Pitt', 'firstName': 'Brad'}, ];

      this.listFav = [];
      this.show = true;
      console.log('ActorsComponent:OnInit');
  }

  delete2(actor) {
    let index: number;
    index = this.listActors.indexOf(actor);
    this.listActors.splice(index , 1);
  }

  fav2(actor) {
    this.listFav.push(actor);
  }

  toggel() {
    this.show = !this.show;
  }

}
