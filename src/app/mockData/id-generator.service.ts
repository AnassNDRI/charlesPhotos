export class IdGenerator {
  private static currentId = 0;

  static generateId(): number {
    this.currentId += 1;
    return this.currentId;
  }
}
