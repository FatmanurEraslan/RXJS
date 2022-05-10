import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

declare var $ : any ;
@Component({
  selector: 'app-bind-call-back',
  templateUrl: './bind-call-back.component.html',
  styleUrls: ['./bind-call-back.component.css']
})
export class BindCallBackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs: (url: string) => any = bindCallback($.getJSON);
    obs("https://jsonplaceholder.typicode.com/posts").subscribe((data: any)=>{ console.log(data)})
  }

}
