import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Picture } from 'src/app/mockData/pictures';
import { PicturesService } from 'src/app/service/pictures.service';
import { CategoryService } from '../../../service/category.service';
import { Category } from 'src/app/mockData/category';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.css']
})
export class PictureFormComponent implements OnInit {

  @ViewChild('pictureForm') pictureForm: NgForm;

  @Input() picture: Picture = new Picture();



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

  isCategoryValid(): boolean {
    return !!(this.picture.category && this.picture.category.nameCate !== '');
  }

  isPictureLinkValid(): boolean {
    return !!this.picture.pictureLink;
  }

  // isPictureLinkValid() {
  //   return this.picture.pictureLink !== ''; // Assurez-vous que pictureLink est initialisé à '' ou null
  // }

  isFormValid(): boolean {
    return !!this.pictureForm?.valid && this.isCategoryValid() && this.isPictureLinkValid();
  }

  onSubmit() {
    // Vérifier si le formulaire est valide
    if (this.isFormValid() ) {
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
    } else {
      // Gérer le cas où le formulaire n'est pas valide
      alert('Le formulaire n\'est pas valide ou aucune categorie n\'est selectionnée');
    }
  }


  goBack() {
    this.router.navigate(['/pictures'])
  }


}
