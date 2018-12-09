import { Injectable } from '@angular/core';



@Injectable()
export class AreaService {
constructor() {
    console.log('Areaservice initialized');
}

square(nb) {
   return nb * nb ;
}
circle(nb) {
    return nb * nb * 3.14 ;
 }
}
