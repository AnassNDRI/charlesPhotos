import { IdGenerator } from "./id-generator.service";

export class Category {
  id: number;
  nameCate: string;

  constructor(nameCate: string) {
    this.id = IdGenerator.generateId();
    this.nameCate = nameCate;
  }
}
