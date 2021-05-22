import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import{UserapiService} from './userapi.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-resto';
  
  constructor(){
    
  }
}

 