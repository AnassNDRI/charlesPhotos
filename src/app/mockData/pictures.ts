export class Picture {

  id: number;
  name: string;
  pictureLink: string;
  category: Array<string>;
  created: Date;

  constructor(
    name: string = 'Entrer un nom...',
    pictureLink: string = "../../../assets/pictures/XXXXXXX.jpg",
    category: string[] = ['Couple'],
    created: Date = new Date("dd/MM/YYYY")

  ) {

    this.name = name;
    this.pictureLink = pictureLink;
    this.category = category;
    this.created = created;
  }

}
