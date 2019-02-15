import Dep from "./Dep";

class Watcher {
  constructor(vm, expOrFn, cb) {
    this.depIds = {};
    this.vm = vm;
    this.cb = cb;
    this.expOrFn = expOrFn;
    this.val = this.get();
  }

  // when dep update will call update
  update() {
    this.run();
  }

  // avoid add same dep multiple
  addDep(dep) {
    if (!this.depIds.hasOwnProperty(dep.id)) {
      dep.addSub(this);
      this.depIds[dep.id] = dep;
    }
  }

  // Only call callback function in difference value
  run() {
    const val = this.get();
    if (val !== this.val) {
      this.val = val;
      this.cb.call(this.vm, val);
    }
  }

  // dep collect
  get() {
    Dep.target = this;
    // Dep Add the Watchers ⬇
    // 🐞 bug here can't listern object properties
    // now fix ..
    const val = this.expOrFn.split(".").reduce((o, i) => o[i], this.vm._data);
    Dep.target = null;
    return val;
  }
}

export default Watcher;
