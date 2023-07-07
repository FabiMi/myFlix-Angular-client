import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFlix-Angular-client';
  constructor(
     public dialog: MatDialog,
     private route: Router    
     ){}


     getToken(): any {
    return localStorage.getItem('token');
  }

logOut(): void {
  localStorage.clear();
  
  this.route.navigate(['welcome']);

}}