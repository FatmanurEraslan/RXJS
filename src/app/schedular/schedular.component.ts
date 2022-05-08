import { Component, OnInit } from '@angular/core';
import { asyncScheduler, Observable } from 'rxjs';
import {observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-schedular',
  templateUrl: './schedular.component.html',
  styleUrls: ['./schedular.component.css']
})
export class SchedularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* ÖRNEK1 */
    console.log("Schedular kullanılmayan")
    const observable = new Observable(data =>{
      data.next(1);
      data.next(2);
      data.next(3);
      data.complete();
      
    });
    observable.subscribe(data => console.log(data)
    )
    console.log("Schedular kullanılmayan");

    console.log("------------------------");

    console.log("Schedular kullanılan")
    const observable2 = new Observable(data =>{
      data.next(1);
      data.next(2);
      data.next(3);
      data.complete();
      
    }).pipe(observeOn(asyncScheduler))
    observable2.subscribe(data => console.log(data)
    )
    console.log("Schedular kullanılan")

    /* queueSchedular: Yapılacak işleri kuyruga alır.Belirli bir sıra ile arka arkaya çalıştırılacak işler için kullanılır.
       asapSchedular: Micro tasklar için kullanılır.Meccut işten önce çalışır.Asenkron dönüşümler için kullanılır.
       asyncSchedualr: Zaman tabanlı işlermlerde kullanılır.SetTimeout fonksiyonu ileçalışır haliyle veriler observer'a asenkron ileitilir.
       animationFrameSchedular: Browserın bir sonraki içeriğini yeniden boyamadanönce tetiklenen schedular türüdür.
    
    
    */
 
  }

}


