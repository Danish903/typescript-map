import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

// const sorter = new Sorter(numbersCollection);

// sorter.sort();
// console.log(numbersCollection.data)

// const charCollection = new CharactersCollection("lasjidfasd");
// const charSorter = new Sorter(charCollection);

// charSorter.sort();
// console.log(charCollection.data)


const linkList = new LinkedList()
linkList.add(1)
linkList.add(3)
linkList.add(2)
linkList.add(-1)
linkList.sort();
linkList.print();