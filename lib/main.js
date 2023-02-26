import { start, getConfigValue } from "./utils/bpmHelper";
(function () {
  start();
  if (window.formApi) {
    function ready() {
      console.log("Ready!", getConfigValue());
    }
    function onChange(currentValue) {
      // 参数说明详见下方
    }
    function func() {}

    // 注册一个新的ready事件，页面加载完成后执行
    formApi.utils.addEvent("ready", ready);

    // 注册一个新的onChange事件，表单字段发生改变时执行
    formApi.utils.addEvent("onChange", onChange);

    // 注册一个新的printReady事件，pc端打印弹窗加载完成后执行
    formApi.utils.addEvent("printReady", ready);

    // 明细表新增行时回调
    formApi.utils.addEvent("createRow", func);

    // 明细表删除行时回调
    formApi.utils.addEvent("removeRow", func);

    // 点击提交/审批按钮进行校验后执行，value是提交的数据， 返回false则终止提交 支持promise
    formApi.buttonCallback.submitBefore = function (value) {
      return value;
    };

    // 点击任意按钮，在触发接口调用前，进行一次回调拦截， value是提交的数据，返回false则阻止此次动作
    // bottonKey是当前点击的按钮标识key，支持promise
    // 与submitBefore用法相同，因submitBefore已在现有流程中使用，增加触发条件有兼容风险，故此增加一个buttonClick回调事件
    formApi.buttonCallback.buttonClick = function (value, buttonKey) {
      return value;
    };
  }
})();
