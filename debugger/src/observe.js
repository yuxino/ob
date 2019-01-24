import Observer from "./Observer";

function observe(value) {
  // 当值不存在，或者不是复杂数据类型时，不再需要继续深入监听
  if (!value || typeof value !== "object") {
    return;
  }
  return new Observer(value);
}

export default observe;
