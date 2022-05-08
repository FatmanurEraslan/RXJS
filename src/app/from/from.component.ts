import { Component, OnInit } from '@angular/core';
import { from, ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* ÖRNEK 1 */
    //From operatörü her bir diziyi ve yakut koleksiyoner verileri observable hale getirmesine sağlar 
    const numbers = [5,6,21];
    const obs = from(numbers);
    obs.subscribe(data =>{ // burda veriyi alıp obervable nesnesi döndürüyor burda tip güvenliğini typescript sağlıyor.
      console.log(data);
    });

    /* ÖRNEK 2*/
    const device = new Map<string,number>();
    //Map key value tarzında çalışan bir koleksiyoner yapılanma .
    device.set("Mouse",3);
    device.set("Keyboarad",7)
    const obs2 = from(device);
    obs2.subscribe(data =>{ 
      console.log(data);
    });
  }

}
