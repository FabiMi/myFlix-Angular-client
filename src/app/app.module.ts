import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DirectorCardComponent } from './director-card/director-card.component';
import { GenreCardComponent } from './genre-card/genre-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from "@angular/material/toolbar";
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TrailerComponent } from './trailer/trailer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];



@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    DirectorCardComponent,
    GenreCardComponent,
    UserProfileComponent,
    TrailerComponent,
   

  ],


  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
