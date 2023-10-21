import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Picture } from 'src/app/mockData/pictures';
import { PicturesService } from 'src/app/service/pictures.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {

  pictureList: Picture[] = [];

  constructor (
    private route: Router,
    private pictureService: PicturesService
  ) {}

  ngOnInit()  {

    this.pictureService.getPictureList().subscribe(pictureList => this.pictureList = pictureList);
  }
  goToPictureDetail(picture: Picture) {

    this.route.navigate(['/picture', picture.id])
  }

  goToEditePicture() {
    this.route.navigate(['picture/add'])
  }

  // goToPictureDetail() {
  //   this.route.navigate(['picture/:id'])
  // }

}
