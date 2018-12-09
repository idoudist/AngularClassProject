import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {
  position: string;
  nbchar: number;
  estimation: number;

  constructor() { }

  ngOnInit() {
    this.nbchar = 0;
  }

  estimer() {
    this.estimation = 0;
    if (this.nbchar > 30) {
         this.estimation = 10;
    } else if (this.nbchar < 30) {
        this.estimation = 20;
    }
    }


}
