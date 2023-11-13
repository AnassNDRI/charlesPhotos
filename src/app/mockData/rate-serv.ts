
import { IdGenerator } from "./id-generator.service";

export class RateServ {

  readonly id: number;
  title: string;
  description: string;
  rate: number;
  pictureLink: string ;

  constructor(
    title: string = '',
    rate: number = 0 ,
    description: string = '',
    pictureLink: string = '',
    id?: number,
  ) {
     this.id = id ?? IdGenerator.generateId();
    this.title = title;
    this.rate = rate;
    this.description = description;
    this.pictureLink = pictureLink;
  }

}

