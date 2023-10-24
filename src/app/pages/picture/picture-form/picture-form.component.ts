import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Picture } from 'src/app/mockData/pictures';
import { PicturesService } from 'src/app/service/pictures.service';
import { CategoryService } from '../../../service/category.service';
import { Category } from 'src/app/mockData/category';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.css']
})
export class PictureFormComponent implements OnInit {

  @Input() picture: Picture;

 // picture: Picture = new Picture();
  pictureLinks$: Observable<string[]>;
  category$: Observable<string[]>;
  IsAddForm: boolean = true;

  constructor(
    private pictureService: PicturesService,
    private route: ActivatedRoute,
    private categoryService : CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    const pictureId = +this.route.snapshot.params['id']; // Le + sert à convertir la chaîne en nombre
    if (pictureId) {
      this.IsAddForm = false;
      this.pictureService.getPictureById(pictureId).subscribe({
        next: (picture) => {
          if (picture) {
            this.picture = picture;
          } else {
            // Gérer le cas où la photo avec l'id donné n'est pas trouvée
            console.error(`Aucune photo trouvée avec l'id ${pictureId}`);
          }
        },
        error: (err) => {
          // Gérer les erreurs ici si nécessaire
          console.error(err);
        },
      });
    }
    this.pictureLinks$ = this.pictureService.getPictureLinks();
    this.category$ = this.categoryService.getCategoryList().pipe(
      map((categories: Category[]) => categories.map(category => category.nameCate))
    );
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

}
