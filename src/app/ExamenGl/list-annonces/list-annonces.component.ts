import { Component, OnInit } from '@angular/core';
import { AnnonceServices } from 'src/app/Services/annonce.service';
import { Annonce } from 'src/Models/Annnoce';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css'],
  providers: [AnnonceServices]
})
export class ListAnnoncesComponent implements OnInit {

  listAnnonce: Annonce[];

  constructor(private serviceAnnonce: AnnonceServices) { }

  ngOnInit() {
    this.serviceAnnonce.getAnnonces().subscribe(data => this.listAnnonce = data);
  }

}
