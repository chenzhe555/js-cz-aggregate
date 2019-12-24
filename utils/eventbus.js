const eBus = require('eventbusjs');

export default class EventBus {
    /**
     * 注册通知
     * @param {String} type 监听Key
     * @param {Function} callback 回调事件
     * @param {Object} scope 回调绑定的对象
     */
    static addEventListener(type, callback, scope) {
        eBus.addEventListener(type, callback, scope);
    }

    /**
     * 分发通知
     * @param {String} type 通知Key
     * @param {Object} target 通知目标
     * @param {Object} args 参数
     */
    static dispatch(type, target, args) {
        eBus.dispatch(type, target, args);
    }

    /**
     * 移除通知
     * @param {String} type 监听Key
     * @param {Function} callback 回调事件
     * @param {Object} scope 回调绑定的对象
     */
    static removeEventListener(type, callback, scope) {
        eBus.removeEventListener(type, callback, scope);
    }

    /**
     * 获取所有注册通知事件
     */
    static getEvents() {
        return eBus.getEvents();
    }

    /**
     * 判断是否注册某通知
     * @param {String} type 通知Key
     * @param {Object} target 通知目标
     * @param {Object} args 参数
     */
    static hasEventListener(type, callback, scope) {
        return eBus.hasEventListener(type, callback, scope);
    }
}