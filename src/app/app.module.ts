import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{RouterModule} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import{ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{UserapiService} from 'src/app/userapi.service'



@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    LoginComponent,
    RegisterComponent,
    ListRestoComponent,
    
    
    
  
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,


    
    
    
  ],
  providers: [UserapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
