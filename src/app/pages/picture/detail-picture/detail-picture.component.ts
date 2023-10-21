import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Picture } from 'src/app/mockData/pictures';
import { PicturesService } from 'src/app/service/pictures.service';

@Component({
  selector: 'app-detail-picture',
  templateUrl: './detail-picture.component.html',
  styleUrls: ['./detail-picture.component.css']
})
export class DetailPictureComponent implements OnInit{


  picturList: Picture [];
  picture: Picture | undefined;
  constructor (
      private routeActive: ActivatedRoute,
      private route: Router ,
      private pictureService : PicturesService
    ){}

  ngOnInit() {

    const pictureId: string|null = this.routeActive.snapshot.paramMap.get('id');

    if(pictureId) {
      this.pictureService.getPictureById(+pictureId)
      .subscribe(picture => this.picture = picture);
    }

  }

  deletePicture(picture: Picture) {
    alert(`Voulez-vous vraiment suppprimer ${picture.name} ?`);
    this.pictureService.deletePictureById(picture.id)
    .subscribe(() => this.goBack());
  }
  goBack() {
    this.route.navigate(['/pictures'])
  }

  goToEditPicture(picture: Picture) {
    this.route.navigate(['/edit/picture', picture.id]);
  }

}
