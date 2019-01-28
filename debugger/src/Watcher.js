import Dep from "./Dep";

class Watcher {
  constructor(vm, expOrFn, cb) {
    this.depIds = {};
    this.vm = vm;
    this.cb = cb;
    this.expOrFn = expOrFn;
    this.val = this.get(); // save after update value
  }

  // when dep update will call update
  update() {
    this.run();
  }

  // Only save new dep instance
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

  // 当前订阅者(Watcher)读取被订阅数据的最新更新后的值时，通知订阅者管理员收集当前订阅者
  get() {
    Dep.target = this;
    const val = this.vm._data[this.expOrFn];
    Dep.target = null;
    return val;
  }
}

export default Watcher;
