
// 用 JS 实现一个观察者模式，支持 **subscribe**、**unsubscribe** 和 **publish** 方法
class Observable {
    constructor() {
        // 存储所有订阅项
        this.observables = [];
    }

    /**
     * 订阅事件
     * @param {string} eventName 事件名
     * @param {function} execute 回调函数
     * @returns {function} 取消订阅函数
     */
    subscribe(eventName, execute) {
        this.observables.push({ eventName, execute });
        // 返回一个取消订阅的函数
        return () => this.unsubscribe(eventName, execute);
    }

    /**
     * 取消订阅事件
     * @param {string} eventName 事件名
     * @param {function} execute 回调函数
     */
    unsubscribe(eventName, execute) {
        // 移除所有匹配的订阅项
        this.observables = this.observables.filter(obj => !(obj.eventName === eventName && obj.execute === execute));
    }

    /**
     * 发布事件
     * @param {string} eventName 事件名
     * @param {*} data 发布的数据
     */
    publish(eventName, data) {
        // 找到所有匹配的订阅项并执行
        this.observables
            .filter(item => item.eventName === eventName)
            .forEach(obj => obj.execute(data));
    }
}

// 示例用法
const observable = new Observable();
// 订阅 example1 事件
const unsubscribe1 = observable.subscribe("example1", (data) => { console.log("#subscribe1", data) });
// 订阅 example2 事件
const unsubscribe2 = observable.subscribe("example2", (data) => { console.log("#subscribe2", data) });

observable.publish("example1", "hello world"); // 输出 #subscribe1 hello world
observable.publish("example2", "hello world33"); // 输出 #subscribe2 hello world33

// 取消 example1 的订阅
unsubscribe1();
observable.publish("example1", "should not print"); // 不输出