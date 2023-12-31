import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { DirectorCardComponent } from '../director-card/director-card.component';
import { GenreCardComponent } from '../genre-card/genre-card.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TrailerComponent } from '../trailer/trailer.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  titleFilter: string = '';
  movies: any[] = [];
  loading: boolean = true;
  filteredMovies: any[] = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public router: Router,
    public snackBar: MatSnackBar) { if (!localStorage.getItem("token")) this.router.navigate(['welcome']) }


  ngOnInit(): void {
    this.getMovies();

  }

  /**
   * @method applyFilter
   * @description filters the movies by title
   * @memberof MovieCardComponent
   */

  applyFilter(): void {
    this.loading = true;
    this.filteredMovies = this.movies.filter((movie: any) => movie.Title.toLowerCase().includes(this.titleFilter.toLowerCase()));
    this.loading = false;
    console.log(this.filteredMovies);

  }

  /**
   * 
   * @method getMovies
   * @description gets the list of movies from the API
   * @returns list of movies
   * @memberof MovieCardComponent
   */


  getMovies(): void {
    this.loading = true;
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp
      console.log(this.movies);
      this.filteredMovies = [...this.movies]
      this.loading = false;
    });
  }



  /**
   * 
   * @description opens the director dialog
   * @param director 
   * @method openDirectorDialog
   * 
   */
  openDirectorDialog(director: any): void {
    this.dialog.open(DirectorCardComponent, {
      width: '500px',
      data: director,
    });
  }

  openTrailerDialog(movie: any): void {
    this.dialog.open(TrailerComponent, {
      width: '500px',
      data: movie,
    });
  }

  /**
   * @description
   * @param genre
   * @method openGenreDialog
   */
  openGenreDialog(genre: any): void {
    this.dialog.open(GenreCardComponent, {
      width: '500px',
      data: genre,
    });
  }
  /**
   * @description adds movie to favorites
   * @param _id 
   * @method addFavorite
   */
  addFavorite(_id: string): void {
    this.fetchApiData.addFavMovie(_id).subscribe((result) => {
      localStorage.setItem('user', JSON.stringify(result));
      this.snackBar.open('Movie added to favorites.', 'OK', {
        duration: 2000
      });
    });
  }

  /**
  * @description checks if movie is in favorites (calls the isFavMovie method on the fetchApiData service)
  * @param id The movie ID
  */
  isFavorite(_id: string): boolean {
    return this.fetchApiData.isFavMovie(_id);
  }

  /**
   * @description removes movie from favorites (calls the deleteFavoriteMovie method on the fetchApiData service)
   * @param id The movie ID
   * @method removeFavorite
   */
  removeFavorite(movieId: string): void {
    this.fetchApiData.deleteFavoriteMovie(movieId).subscribe((result) => {
      localStorage.setItem('user', JSON.stringify(result));
      this.snackBar.open('Movie removed from favorites.', 'OK', {
        duration: 2000
      });
    });
  }

}