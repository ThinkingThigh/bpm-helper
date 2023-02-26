export function start() {
  console.log("start!");
}
// 获取表单格式化后的value与label，pc/h5 返回结构相同，主要解决getFieldsValue返回的数据结构不同的情况
export function getConfigValue(name = "") {
  return formApi.getFieldsValue(name);
}
