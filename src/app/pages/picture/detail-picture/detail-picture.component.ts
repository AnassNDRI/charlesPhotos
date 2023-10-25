import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/mockData/category';
import { Picture } from 'src/app/mockData/pictures';
import { AuthenticationService } from 'src/app/security/services/authentication.service';

import { PicturesService } from 'src/app/service/pictures.service';

@Component({
  selector: 'app-detail-picture',
  templateUrl: './detail-picture.component.html',
  styleUrls: ['./detail-picture.component.css']
})
export class DetailPictureComponent implements OnInit{


  picturList: Picture [];
  categoryList: Category [];
  picture: Picture | undefined;
  isLoggedIn: boolean = false;

  constructor (
      private routeActive: ActivatedRoute,
      private route: Router ,
      private pictureService : PicturesService,
      private authService: AuthenticationService

    ){}

  ngOnInit() {

    const pictureId: string|null = this.routeActive.snapshot.paramMap.get('id');

    if(pictureId) {
      this.pictureService.getPictureById(+pictureId)
      .subscribe(picture => this.picture = picture);
    }
    // Initialisez l'état de connexion
    this.isLoggedIn = this.authService.isLoggedIn();

  }

  deletePicture(picture: Picture) {
    let categoryNames = picture.category.map(categ => categ.nameCate).join(', ');
    let confirmation = confirm(`Voulez-vous vraiment supprimer cette photo de la catégorie ${categoryNames} ?`);
    if (confirmation) {
      this.pictureService.deletePictureById(picture.id)
        .subscribe(() => this.goBack());
    }
  }


  goToEditPicture(picture: Picture) {
    this.route.navigate(['/edit/picture', picture.id]);
  }

  goBack() {
    this.route.navigate(['/pictures'])
  }

}
