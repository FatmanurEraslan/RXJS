import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax'
@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ajax.getJSON("https://jsonplaceholder.typicode.com/posts").subscribe(data => console.log(data));
    /* Burda Ajax Response döndürüyor. */
    ajax("https://jsonplaceholder.typicode.com/posts").subscribe(data=> console.log(data));
    ajax({
      url:"...",
      method:"post"
    })
  }

}
