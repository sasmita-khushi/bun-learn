import { EventEmitter } from "events";
//import MyEventEmitter from "./my-eventemitter.js";

class myEmitter extends EventEmitter {
  constructor() {
    super();
  }
}

let me = new myEmitter();
me.on("foo", () => {
  console.log("an event occured -1");
});

me.on("foo", () => {
  console.log("an event occured -2");
});

me.on("foo", (x) => {
  console.log("an event occured -3");
  console.log(x);
});

me.on("bar", () => {
  console.log("an event occured bar");
});

me.emit("foo");
me.emit("foo", "some text");
me.emit("bar");
