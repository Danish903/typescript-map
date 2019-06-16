import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
   constructor(public data: string) {
      super();
   }

   get length(): number {
      return this.data.length
   }
   compare(leftIndex: number, rightIndex: number): boolean {
      return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
   }
   swap(leftIndex: number, rightIndex: number): void {
      const array = this.data.split("");
      const temp = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;
      this.data = array.join("");
   }
}