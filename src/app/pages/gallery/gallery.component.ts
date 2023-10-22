import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Picture } from 'src/app/mockData/pictures';
import { PicturesService } from 'src/app/service/pictures.service';
import { Category } from '../../mockData/category';
import { CategoryService } from 'src/app/service/category.service';

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

  constructor (
    private route: Router,
    private pictureService: PicturesService,
    private categoryService : CategoryService
  ) {}

  ngOnInit()  {

    this.pictureService.getPictureList().subscribe(pictureList => this.pictureList = pictureList);
    this.categoryService.getCategoryList().subscribe(categoryList => this.categoryList = categoryList);
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
 // filtrer la gallerie


  // filtrerPictures(pictures: Picture[]){
  //   return pictures.filter ( photo => {
  //     return (photo.categorieId === this.categoryIdSelected || this.categoryIdSelected === null) &&
  //       photo.name.toUpperCase().includes( this.filtre.trim().toUpperCase())});
  // }

  // filtrerProducts(pictures: Picture[]){

  //   return pictures.filter ( art => {

  //     return (art.category === this.categoryIdSelected || this.categoryIdSelected === null) &&
  //       art.category.toUpperCase().includes( this.filtre.trim().toUpperCase())});
  // }

  // filtrerPictures(pictures: Picture[]) {
  //   return pictures.filter(photo => {
  //     const categoryMatch = this.categoryIdSelected === null || photo.category.some(cat => cat.id === this.categoryIdSelected);
  //     const filterMatch = this.filtre.trim() === "" || photo.category.some(cat => cat.nameCate.toUpperCase().includes(this.filtre.trim().toUpperCase()));
  //     return categoryMatch && filterMatch;
  //   });
  // }

}
