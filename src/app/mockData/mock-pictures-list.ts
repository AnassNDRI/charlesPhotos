import { CATEGORY } from "./mock-category-list";
import { Picture } from "./pictures";

export const PICTURES: Picture[] = [
  new Picture("Grossesse", "../../../assets/pictures/grossesse.jpg", CATEGORY[2]),
  new Picture("Grossesse", "../../../assets/pictures/grossesse1.jpg", CATEGORY[2]),
  new Picture("Mariage", "../../../assets/pictures/mariage.jpg", CATEGORY[1]),
  new Picture("Mariage", "../../../assets/pictures/mariage1.jpg", CATEGORY[1]),
  new Picture("Baptême", "../../../assets/pictures/bapteme1.jpg", CATEGORY[5]),
  new Picture("Baptême", "../../../assets/pictures/bapteme.jpg", CATEGORY[5]),
  new Picture("Bébé", "../../../assets/pictures/bébé1.jpg", CATEGORY[3]),
  new Picture("Bébé", "../../../assets/pictures/bébé.jpg", CATEGORY[3]),
  new Picture("Famille", "../../../assets/pictures/famille.jpg", CATEGORY[4]),
  new Picture("Famille", "../../../assets/pictures/famille1.jpg", CATEGORY[4]),
  new Picture("Couple", "../../../assets/pictures/couple.jpg", CATEGORY[0]),
  new Picture("Couple", "../../../assets/pictures/couple1.jpg", CATEGORY[0]),
];
