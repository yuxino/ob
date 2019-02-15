import Dep from "./Dep";
import observe from "./observe";

class Observer {
  constructor(value) {
    this.value = value;
    this.walk(value);
  }

  walk(value) {
    Object.keys(value).forEach(key => this.convert(key, value[key]));
  }

  convert(key, val) {
    this.defineReactive(this.value, key, val);
  }

  defineReactive(obj, key, val) {
    const dep = new Dep();
    // the properties of this.value when update
    // we need to update it
    let chlidOb = observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        // wathcer / nomarl data
        // if watcher run that ⬇
        if (Dep.target) {
          dep.depend();
        }
        return val;
      },
      set: newVal => {
        if (val === newVal) return;
        val = newVal;
        chlidOb = observe(newVal);
        dep.notify();
      }
    });
  }
}

export default Observer;
