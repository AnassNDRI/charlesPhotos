import { CATEGORY } from "./mock-category-list";
import { Picture } from "./pictures";

export const PICTURES: Picture[] = [
  new Picture("Grossesse", "../../../assets/pictures/grossesse.jpg", "Une tendre célébration de la vie à venir, saisie dans un geste d'amour universel.", CATEGORY[2]),
  new Picture("Grossesse", "../../../assets/pictures/grossesse1.jpg", "Rayonnement maternel devant un scintillement de joie.", CATEGORY[2]),
  new Picture("Mariage", "../../../assets/pictures/mariage.jpg", "Élégance et union capturées dans une promesse de bonheur éternel.", CATEGORY[1]),
  new Picture("Mariage", "../../../assets/pictures/mariage1.jpg", "Instant éternel d'élégance partagée.", CATEGORY[1]),
  new Picture("Baptême", "../../../assets/pictures/bapteme1.jpg","Premier sacrement dans la douceur d'une bénédiction nouvelle.", CATEGORY[5]),
  new Picture("Baptême", "../../../assets/pictures/bapteme.jpg", "Grâce et pureté capturées en détails pour un baptême.", CATEGORY[5]),
  new Picture("Bébé", "../../../assets/pictures/bébé1.jpg", "Charme et malice en coulisse.", CATEGORY[3]),
  new Picture("Bébé", "../../../assets/pictures/bébé.jpg", "Balade matinale, pas à pas, dans l'éveil d'une nouvelle vie.", CATEGORY[3]),
  new Picture("Famille", "../../../assets/pictures/famille.jpg", "Joie familiale en plein cœur de la nature.", CATEGORY[4]),
  new Picture("Famille", "../../../assets/pictures/famille1.jpg", "Unité intergénérationnelle, main dans la main.", CATEGORY[4]),
  new Picture("Couple", "../../../assets/pictures/couple.jpg", "Liés par l'amour, unis par le destin.", CATEGORY[0]),
  new Picture("Couple", "../../../assets/pictures/couple1.jpg", "Amour en mouvement : une danse spontanée, un éclat de rire, un souvenir gravé dans le cœur de la nature.", CATEGORY[0]),
];
