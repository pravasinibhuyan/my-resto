import { Component, OnInit } from '@angular/core';
import{UserapiService} from 'src/app/userapi.service';
import { Observable } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private x:UserapiService) { }
  // collection={};
  ngOnInit(): void {
    // this.x.getList().subscribe((data)=>
    // {
    //   console.log(data)
    // })
    const response=fetch("http://localhost:3000/restaurants",{method:"GET"});
console.log(response)
  }
  
}
