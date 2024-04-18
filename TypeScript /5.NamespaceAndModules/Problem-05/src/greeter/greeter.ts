export namespace Greeter {
  export interface Greeting<T> {
    introduction(): T;
    sayGoodbye(name: T): T;
  }
}
