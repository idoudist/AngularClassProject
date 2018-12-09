import { Component, OnInit } from '@angular/core';
import { Film } from 'src/Models/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  listFilms: Film[];
  raction: number;
  rnaction: number;
  nbfilm: number;

  constructor() { }

  ngOnInit() {
    this.listFilms = [  {'nom': 'MANDY', 'duree': '2 heures', 'categorie': 'action'},
      {'nom': 'LOVE AFTER LOVE', 'duree': '3 heures', 'categorie': 'drama'},
       {'nom': 'YOU WERE NEVER REALLY HERE', 'duree': '2 heures', 'categorie': 'comic'},
        {'nom': 'THE RIDER', 'duree': '3 heures', 'categorie': 'drama'},
     {'nom': 'FIRST REFORMED', 'duree': '2 heures', 'categorie': 'action'}];
     this.raction = 0;
     this.rnaction = 0;
     this.nbfilm = 0;
  }

  calculer () {
    this.raction = 0;
     this.rnaction = 0;
     this.nbfilm = 0;
    for (let i = 0; i < this.listFilms.length; i++) {

      if (this.listFilms[i].categorie === 'action') {
          this.raction++;
      } else {
        this.rnaction++;
      }
      this.nbfilm = this.raction + this.rnaction;
  }
  }

}
