import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Picture } from 'src/app/mockData/pictures';
import { PicturesService } from 'src/app/service/pictures.service';
import { Category } from '../../mockData/category';
import { CategoryService } from 'src/app/service/category.service';
import { AuthenticationService } from 'src/app/security/services/authentication.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {

  pictureList: Picture[] = [];
  categoryList: Category [] = [];
  categoryIdSelected: number | null = null;
  filtre = '';
  filteredPictures: Picture[] = [];
  isLoggedIn: boolean = false;

  constructor (
    private route: Router,
    private pictureService: PicturesService,
    private categoryService : CategoryService,
    private authService: AuthenticationService
  ) {}

  ngOnInit()  {

   // this.pictureService.getPictureList().subscribe(pictureList => this.pictureList = pictureList);
    this.categoryService.getCategoryList().subscribe(categoryList => this.categoryList = categoryList);

    this.pictureService.getPictureList().subscribe(pictures => {
      this.pictureList = pictures;
      this.filteredPictures = this.filtrerPictures(this.pictureList);
    });

    // Initialisez l'état de connexion
    this.isLoggedIn = this.authService.isLoggedIn();

  }
  goToPictureDetail(picture: Picture) {

    this.route.navigate(['/picture', picture.id])
  }

  askAdd() {
    this.route.navigate(['picture/add'])
  }

  filtrerPictures(pictures: Picture[]): Picture[] {
    if (this.categoryIdSelected == null) {
      return pictures;
    } else {
      return pictures.filter(picture => picture.category.id === this.categoryIdSelected);
    }
  }


  onCategoryChange() {
    this.filteredPictures = this.filtrerPictures(this.pictureList);
  }




  deletePicture(picture: Picture) {
    let categoryName = picture.category.nameCate;
    let confirmation = confirm(`Voulez-vous vraiment supprimer cette photo de la catégorie ${categoryName} ?`);
    if (confirmation) {
      this.pictureService.deletePictureById(picture.id).subscribe(() => {
        // Retire la photo de la liste filteredPictures
        this.filteredPictures = this.filteredPictures.filter(p => p.id !== picture.id);
        // Rafraichissement de la liste
        this.pictureList = this.pictureList.filter(p => p.id !== picture.id);
      });
    }
  }


  goToEditPicture(picture: Picture) {
    this.route.navigate(['/edit/picture', picture.id]);
  }

  goBack() {
    this.route.navigate(['/pictures'])
  }

}
