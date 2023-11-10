import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Picture } from 'src/app/mockData/pictures';
import { PicturesService } from 'src/app/service/pictures.service';
import { CategoryService } from '../../../service/category.service';
import { Category } from 'src/app/mockData/category';



@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.css']
})
export class PictureFormComponent implements OnInit {

  @Input() picture : Picture = new Picture()

  pictureLinks$: Observable<string[]>;
  category$: Observable<Category[]>;
  IsAddForm: boolean = true;

  constructor(
    private pictureService: PicturesService,
    private route: ActivatedRoute,
    private categoryService : CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    const pictureId = +this.route.snapshot.params['id'];
    if (pictureId) {
      this.IsAddForm = false;
      this.pictureService.getPictureById(pictureId).subscribe({
        next: (picture) => {
          if (picture) {
            this.picture = picture;
          } else {
            console.error(`Aucune photo trouvée avec l'id ${pictureId}`);
          }
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
    this.pictureLinks$ = this.pictureService.getPictureLinks();
    this.category$ = this.categoryService.getCategoryList();
  }

  onSubmit() {
    if (this.IsAddForm) {
      this.pictureService.addPicture(this.picture).subscribe({
        next: (picture: Picture) => this.router.navigate(['/picture', picture.id]),
        error: (error) => console.error('Erreur lors de l\'ajout de la photo', error)
      });
    } else {
      this.pictureService.updatePicture(this.picture).subscribe({
        next: () => this.router.navigate(['/picture', this.picture.id]),
        error: (error) => console.error('Erreur lors de la mise à jour de la photo', error)
      });
    }
  }



  goBack() {
    this.router.navigate(['/pictures'])
  }


}
