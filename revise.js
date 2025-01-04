export default class My_eventEmitter {
  on(eventName, callBack) {
    if (!this[eventName]) {
      this[eventName] = [];
    }
    this[eventName].push({ isOnce: false, callBack });
  }
  once(eventName, callBack) {
    if (!this[eventName]) {
      this[eventName] = [];
    }
    this[eventName].push({ isOnce: true, callBack });
  }
  emit(eventName, ...rest) {
    if (this[eventName]) {
      for (let i = 0; i < this[eventName].length; i++) {
        if (this[eventName][i].isOnce) {
          this[eventName][i].callBack(...rest);
          this[eventName].splice(i, 1);
        } else {
          this[eventName][i].callBack(...rest);
        }
      }
    }
  }
}
