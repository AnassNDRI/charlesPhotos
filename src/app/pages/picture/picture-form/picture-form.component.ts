import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Picture } from 'src/app/mockData/pictures';
import { PicturesService } from 'src/app/service/pictures.service';


@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.css']
})
export class PictureFormComponent implements OnInit {

   /// lorsqu'on veut utiliser l'App-PokemonFormComponent
  // (l'on veut editer ou afficher) => il faut passer une propriété d'entrée qui sera un un pokemon
  @Input() picture : Picture; // picture courant
  //////////////////////////////////////////////////////////////////////////
  category$:  Observable<string[]>;
  pictureLinks$: Observable<string[]>;

  IsAddForm: boolean;// cette propriété permet de verifier si l'utilisateur veut bien faire un ajout

 constructor(
  private pictureService : PicturesService,
  private route : Router
  ) {}

 ngOnInit() {
  // la liste de tous les pictrues
  //this.category$ = this.pictureService.getPictureCategoryList();
  // la liste de tous les pictureLink
  this.pictureLinks$ = this.pictureService.getPictureLinks();
  this.IsAddForm = this.route.url.includes('picture/add');

 }

// hasCategory(category: string): boolean {

  // verifie si  le picture a la category passer en paramètre ? ("includes" est une methode JavaScript)
//  return this.picture.category.includes(category);
 //}

  ///// selection si le type existe, sinon il decoche le type selectionné
  //// Paramètre ($event: Event, type: string) => ecoute pour savoir si
  // l'utilisateur a coché ou décoché la checkbox  et egalement savoir le type ccoché/décoché
//  selectCategory($event: Event, category: string) {
//   //verifie si l'utilisateur a coché ou non la checkbox
//   const isChecked: boolean =($event.target as HTMLInputElement).checked;
//   if(isChecked) {
//     this.picture.category.push(category);
//   } else {
//     ///sinon on recherche l'index du type coché
//     // avec la methode indexOf() de Angular.
//     const index = this.picture.category.indexOf(category);
//     ///après modifier le tableau pour le retirer
//     this.picture.category.splice(index, 1); // supprime 1 élément à partir de l'"index"
//   }

//  }

//  isCategoryValid(category: string): boolean {

//   /// si le picture à une seul categorie et que l'on travaille sur la categorie courant on lui bloque sa
//   // checkbox
//   if(this.picture.category.length == 1 && this.hasCategory(category)) {
//      return false;
//   }

//   if(this.picture.category.length > 2 && !this.hasCategory(category)) {
//     return false;
//  }


//   return true;
//  }

//  // lorsque l'utilisateur soumet le formulaire

 onSubmit() {
  // if(this.IsAddForm) {
  //   this.pictureService.addPicture(this.picture)
  //   .subscribe((picture: Picture)=>
  //       this.route.navigate(['/picture', picture.id]));
  // } else {

  // this.pictureService.updatePicture(this.picture)
  // .subscribe(()=>
  //     this.route.navigate(['/picture', this.picture.id]));
  // }
 }

}
