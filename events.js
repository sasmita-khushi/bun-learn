import { EventEmitter } from "events";
import MyEventEmitter from "./my-eventemitter.js";

class FireDetector extends MyEventEmitter {
  constructor() {
    super();
    this.smokeLevel = 0;
  }
  start() {
    setInterval(() => {
      this.smokeLevel = Math.random();
      if (this.smokeLevel > 0.5) {
        this.emit("fire", this.smokeLevel);
      } else {
        console.log("No fire detected");
      }
    }, 500);
  }
}

function foo(smokeLevel) {
  console.log("Fire detected", smokeLevel);
}

function boom() {
  console.log("Boom is once called");
}

let fd = new FireDetector();

fd.on("fire", () => {
  console.log("anonymous function is called");
});

fd.on("fire", foo);
fd.once("fire", boom);
fd.start();
