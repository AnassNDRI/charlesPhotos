import { Category } from "./category";
import { IdGenerator } from "./id-generator.service";

export class Rate {

  readonly id: number;
  title: string;
  description: string;
  rate: number;
  pictureLink: string ;
  category: Category[];

  constructor(
    title: string = 'Entrer un Titre...',
    rate: number = 0.0,
    description: string = 'Entrer une description...',
    pictureLink: string = "../../../assets/pictures/XXXXXXX.jpg",
    category: Category[] = [new Category('Couple')],

  ) {

    this.id = IdGenerator.generateId();
    this.title = title;
    this.rate = rate;
    this.description = description;
    this.pictureLink = pictureLink;
    this.category = category;
  }

}
