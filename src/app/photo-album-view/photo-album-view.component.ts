import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {PhotoAlbum} from './../providers/photo-album.service';
import {Photo} from './photo';

@Component({
  selector: 'app-photo-album-view',
  templateUrl: './photo-album-view.component.html',
  styleUrls: ['./photo-album-view.component.css']
})
export class PhotoAlbumViewComponent implements OnInit {

  private photos: Observable<Photo[]>;

      constructor(
          private photoAlbum: PhotoAlbum
      ) { }

      ngOnInit(): void {
          this.photos = this.photoAlbum.getPhotos();
      }

}
