import { Sorter } from "./Sorter";

class Node {
   next: Node | null = null;
   constructor(public data: number) { }
}

export class LinkedList extends Sorter {
   head: Node | null = null;

   add(data: number): void {
      const node = new Node(data);
      if (!this.head) {
         this.head = node
         return;
      }
      let tail = this.head;
      while (tail.next) {
         tail = tail.next;
      }
      tail.next = node;
   }
   get length(): number {
      let length = 0;
      let cur = this.head;
      while (cur) {
         cur = cur.next;
         length++
      }
      return length;
   }
   at(index: number): Node {
      if (!this.head) { throw new Error("Index out of bounds") }

      let counter = 0;
      let cur: Node | null = this.head;

      while (cur) {
         if (counter === index) {
            return cur;
         }
         cur = cur.next;
         counter++;
      }
      throw new Error("index out of bounds")
   }

   compare(leftIndex: number, rightIndex: number): boolean {
      return this.at(leftIndex).data > this.at(rightIndex).data
   }

   swap(leftIndex: number, rightIndex: number): void {
      const temp = this.at(leftIndex).data;
      this.at(leftIndex).data = this.at(rightIndex).data;
      this.at(rightIndex).data = temp;
   }

   print(): void {
      if (!this.head) return;
      let node: Node | null = this.head;
      while (node) {
         console.log(node.data)
         node = node.next
      }
   }

}