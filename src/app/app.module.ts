import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

import { RouterModule, Routes } from '@angular/router';

import * as cloudinary from 'cloudinary-core';
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import cloudinaryConfiguration from './cloudinary.config';

import { PhotoAlbumComponent } from './photo-album/photo-album.component';

import { Http, HttpModule, Response, RequestOptions, Headers } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { PhotoAlbum } from './providers/photo-album.service';
import { PhotoAlbumViewComponent } from './photo-album-view/photo-album-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const cloudinaryAppRouter: Routes = [
  {
    path: 'upload',
    component: PhotoAlbumComponent,
    data: { title: 'Photo Album - Upload' }
  },
  {
    path: 'photo',
    component: PhotoAlbumViewComponent,
    data: { title: 'Photo Album - Upload' }
  },
  { path: '',
    redirectTo: '/photo',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PhotoAlbumComponent,
    FileDropDirective,
    FileSelectDirective,
    PhotoAlbumViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfiguration),
    RouterModule.forRoot(
      cloudinaryAppRouter,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PhotoAlbum],
  bootstrap: [AppComponent]
})
export class AppModule { }
