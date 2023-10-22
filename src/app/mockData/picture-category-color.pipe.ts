import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pictureCategoryColor'
})

/*
 * Affiche la couleur correspondant à la categorie du picture.
 * Prend en argument le categorie du picture.
 * Exemple d'utilisation:
 *   {{ picture.category | pictureCategoryColor }}
*/
export class PictureCategoryColorPipe implements PipeTransform {

  transform(category: string): string {

    let color: string;

    switch (category) {
      case 'Couple':
        color = 'red lighten-1';
        break;
      case 'Baptême':
        color = 'blue lighten-1';
        break;
      case 'Mariage':
        color = 'green lighten-1';
        break;
      case 'Grossesse':
        color = 'brown lighten-1';
        break;
      case 'Famille':
        color = 'deep-purple accent-1';
        break;
      case 'Bébé':
        color = 'pink lighten-4';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }

}
