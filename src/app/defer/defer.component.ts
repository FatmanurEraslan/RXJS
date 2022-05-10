import { Component, OnInit } from '@angular/core';
import { defer, empty, of, timer } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.css']
})
export class DeferComponent implements OnInit {

  constructor() { }
/*
Defer, Bir observable nesnesini , observer abone olduğunda oluşturmamızı ve her bir observer için yeni bir Observable nesnesini oluşturmasını sağlar.
Bir observer subscribe olana kadar bekler ve olunduktan sonra bir Observable oluşturur
Bunu her abone için yeniden yapar.
*/
/* Empty operatörü boş bir observable nesnesi döndürüyor.*/
  ngOnInit(): void {
    const obs1 = of(new Date()); // Direkt olarak oluşturuluyor.
    const obs2= defer(()=>of(new Date())); // Defer de ise subscribe oldunduğunda Observable oluşturuluyor.
    const result = empty();
    timer(5000).subscribe(()=>{
      obs1.subscribe(data=>console.log(data));
      obs2.subscribe(data=>console.log(data));

    })
  }

}
