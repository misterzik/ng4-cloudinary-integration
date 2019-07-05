import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbumViewComponent } from './photo-album-view.component';

describe('PhotoAlbumViewComponent', () => {
  let component: PhotoAlbumViewComponent;
  let fixture: ComponentFixture<PhotoAlbumViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAlbumViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
