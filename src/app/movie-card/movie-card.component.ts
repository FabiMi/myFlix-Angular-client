import { Component, OnInit } from '@angular/core';
import {FetchApiDataService} from '../fetch-api-data.service';
import { DirectorCardComponent } from '../director-card/director-card.component';
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
movies: any[] = [];
constructor (
  public fetchApiData: FetchApiDataService,
  public dialog: MatDialog){}
ngOnInit (): void {
  this.getMovies();

}


/**
 * 
 * @method getMovies
 * @description gets the list of movies from the API
 * @returns list of movies
 * @memberof MovieCardComponent
 */
getMovies() : void {
this.fetchApiData.getAllMovies().subscribe((resp : any) => {
this.movies = resp; 
console.log(this.movies);
return this.movies})
}

openDirectorDialog(): void {
  this.dialog.open(DirectorCardComponent, {
    width: '500px'
  });
}
}