
import { IdGenerator } from "./id-generator.service";

export class RateServ {

  readonly id: number;
  title: string;
  description: string;
  rate: number;
  pictureLink: string ;

  constructor(
    title: string = 'Entrer un Titre...',
    rate: number = 0.0,
    description: string = 'Entrer une description...',
    pictureLink: string = "../../../assets/pictures/XXXXXXX.jpg",
    id?: number,
  ) {
     this.id = id ?? IdGenerator.generateId();
    this.title = title;
    this.rate = rate;
    this.description = description;
    this.pictureLink = pictureLink;
  }

}

