import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/Services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  providers: [AreaService]
})
export class AreaComponent implements OnInit {
  result: number;
  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.result = 0 ;
  }

  callSquare(nb) {
     this.result = this.areaService.square(nb);
  }

  callCircle(nb) {
    this.result = this.areaService.circle(nb);
  }

}
