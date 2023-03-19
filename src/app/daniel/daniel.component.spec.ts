import { Component } from '@angular/core';
import { servicios } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-daniel',
  templateUrl: './daniel.component.html',
  styleUrls: ['./daniel.component.css']
})
export class daniel {
 
  constructor (private servicio1: servicios){}

  ngOnInit(){
    this.getServicios()
  }


  getServicios(){
    this.servicio1.getApiDaniel()
    .subscribe(data=>{
      console.log(data);
    
    })
  }
}
