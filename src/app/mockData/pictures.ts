import { Category } from "./category";
import { IdGenerator } from "./id-generator.service";

export class Picture {
  readonly id: number;
  name: string;
  pictureLink: string;
  category: Category;

  constructor(

    name: string = '',
    pictureLink: string = '',
    category: Category = new Category(''),
     id?: number,
  ) {
   this.id = id ?? IdGenerator.generateId();
    this.name = name;
    this.pictureLink = pictureLink;
    this.category = category;
  }
}
