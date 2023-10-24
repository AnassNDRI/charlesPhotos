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
  filteredPictures: Picture[] = [];

  constructor (
    private route: Router,
    private pictureService: PicturesService,
    private categoryService : CategoryService
  ) {}

  ngOnInit()  {

   // this.pictureService.getPictureList().subscribe(pictureList => this.pictureList = pictureList);
    this.categoryService.getCategoryList().subscribe(categoryList => this.categoryList = categoryList);

    this.pictureService.getPictureList().subscribe(pictures => {
      this.pictureList = pictures;
      this.filteredPictures = this.filtrerPictures(this.pictureList);
    });

  }
  goToPictureDetail(picture: Picture) {

    this.route.navigate(['/picture', picture.id])
  }

  goToEditePicture() {
    this.route.navigate(['picture/add'])
  }

  filtrerPictures(pictures: Picture[]): Picture[] {
    if (this.categoryIdSelected == null) {
      return pictures;
    } else {
      return pictures.filter(picture => {
        return picture.category.some(category => category.id === this.categoryIdSelected);
      });
    }
  }

  onCategoryChange() {
    this.filteredPictures = this.filtrerPictures(this.pictureList);
  }

}
