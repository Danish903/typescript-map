
import faker from 'faker';
import { Marker } from "./Map";
export class User implements Marker {
   name: string;
   location: {
      lat: number;
      lng: number;
   }
   color: string = 'red';

   constructor() {
      this.name = faker.name.firstName();
      this.location = {
         lat: parseFloat(faker.address.latitude()),
         lng: parseFloat(faker.address.longitude())
      }
   }

   markerContent(): string {
      return `User name is: ${this.name}`
   }
}