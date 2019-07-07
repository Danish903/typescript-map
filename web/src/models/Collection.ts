import axios, { AxiosResponse } from 'axios';
import { Eventing } from "./Eventing";


export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();
  constructor(public rootUrl: string, public deserilaize: (json: K) => T) { }

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  async fetch(): Promise<void> {
    const response: AxiosResponse = await axios.get(this.rootUrl);
    response.data.forEach((value: K) => {
      this.models.push(this.deserilaize(value));
    })
    this.trigger("change")
  }

}