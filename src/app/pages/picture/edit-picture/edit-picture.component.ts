import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Picture } from 'src/app/mockData/pictures';
import { PicturesService } from 'src/app/service/pictures.service';

@Component({
  selector: 'app-edit-picture',
  template: `
  <h2 class="center">
     Editer {{picture?.name}}
  </h2>
  <p *ngIf="picture" class="center">
    <img [src]="picture.pictureLink">
  </p>
  <app-picture-form *ngIf="picture" [picture]="picture"></app-picture-form>
`
})
export class EditPictureComponent implements OnInit {

  picture: Picture | undefined ;

  constructor(
    private activeRoute: ActivatedRoute,
    private pictureService: PicturesService

    ) {}


  ngOnInit() {
    const pictureId: string|null = this.activeRoute.snapshot.paramMap.get('id');
    if(pictureId) {
      this.pictureService.getPictureById(+pictureId)
      .subscribe(picture => this.picture = picture);
    } else {
      this.picture = undefined;
    }
  }

}
