import observe from "./observe";
import Watcher from "./Watcher";

class Mvvm {
  constructor(options = {}) {
    this.$options = options;
    let data = (this._data = this.$options.data);
    Object.keys(data).forEach(key => this._proxy(key));
    observe(data);
  }

  // export function to outside
  $watch(expOrFn, cb) {
    new Watcher(this, expOrFn, cb);
  }

  // proxy value in this._data
  _proxy(key) {
    Object.defineProperty(this, key, {
      configurable: true,
      enumerable: true,
      get: () => this._data[key],
      set: val => {
        this._data[key] = val;
      }
    });
  }
}

export default Mvvm;
