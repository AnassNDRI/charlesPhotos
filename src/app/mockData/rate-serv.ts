export class RateServ {

  id: number;
  title: string;
  description: string;
  rate: number;
  pictureLink: string ;

  constructor(
    title: string = 'Entrer un Titre...',
    rate: number = 0.0,
    description: string = 'Entrer un Titre...',
    pictureLink: string = "../../../assets/pictures/XXXXXXX.jpg",

  ) {

    this.title = title;
    this.rate = rate;
    this.description = description;
    this.pictureLink = pictureLink;
  }

}
