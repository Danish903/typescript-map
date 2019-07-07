import { Callback } from "./Eventing";
import { AxiosPromise, AxiosResponse } from "axios";


interface ModelAttributes<T> {

  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(update: T): void;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise;
}

interface Events {
  on: (eventName: string, callBack: Callback) => void;
  trigger: (eventName: string) => void;
}

interface HasId {
  id?: number
}
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) { }
  // get on() {
  //   return this.events.on;
  // }
  on = this.events.on;
  // get trigger() {
  //   return this.events.trigger;
  // }
  trigger = this.events.trigger;

  // get get() {
  //   return this.attributes.get;
  // }
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  async fetch(): Promise<void> {
    const id = this.get('id');
    if (typeof id !== 'number') {
      throw new Error("Cannot fetch without an id")
    }
    const response: AxiosResponse = await this.sync.fetch(id);
    this.set(response.data);
  }

  async save(): Promise<void> {
    const data = this.attributes.getAll();
    try {
      await this.sync.save(data);
      this.events.trigger("save");
    } catch (error) {
      this.events.trigger("error")
    }
  }
}