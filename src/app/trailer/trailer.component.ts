import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";



@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent {
  movie: any = {};
  innerWidth: any;
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.movie = data;

  }
  apiLoaded = false;

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
      this.innerWidth = window.innerWidth;
    }
  }
  adjustStyle(): void {
    const trailer_iframe: any = document.querySelector("youtube-player iframe");
    trailer_iframe.style.maxWidth = "100%";
  }

}