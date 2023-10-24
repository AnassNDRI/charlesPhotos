import { Category } from "./category";
import { IdGenerator } from "./id-generator.service";

export class Picture {

  id: number;
  name: string;
  pictureLink: string;
  category: Category[];


  constructor(

    name: string = 'Entrer un nom...',
    pictureLink: string = "../../../assets/pictures/XXXXXXX.jpg",
    category: Category[] = [new Category('Couple')],

  ) {
    this.id = IdGenerator.generateId();
    this.name = name;
    this.pictureLink = pictureLink;
    this.category = category;
  }

}
