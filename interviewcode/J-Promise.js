// 简易版 Promise 实现，支持 then 链式调用和异步 resolve
class MyPromise {
  /**
   * 构造函数，接收一个 executor 执行器
   * @param {function} executor - 执行器函数，参数为 resolve 和 reject
   */
  constructor(executor) {
    this.state = 'pending'; // 初始状态
    this.value = undefined; // 成功时的值
    this.reason = undefined; // 失败时的原因
    this.onFulfilledCallbacks = []; // 成功回调队列
    this.onRejectedCallbacks = []; // 失败回调队列

    // 成功时调用
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        // 执行所有成功回调
        this.onFulfilledCallbacks.forEach(fn => fn(value));
      }
    };

    // 失败时调用
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        // 执行所有失败回调
        this.onRejectedCallbacks.forEach(fn => fn(reason));
      }
    };

    // 执行 executor，捕获异常自动 reject
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  /**
   * then 方法，注册成功和失败回调，返回新的 Promise 实例，实现链式调用
   * @param {function} onFulfilled - 成功回调
   * @param {function} onRejected - 失败回调
   * @returns {MyPromise}
   */
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        // 异步执行回调，保证一致性
        setTimeout(() => {
          try {
            const x = onFulfilled ? onFulfilled(this.value) : this.value;
            resolve(x);
          } catch (err) {
            reject(err);
          }
        });
      } else if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            const x = onRejected ? onRejected(this.reason) : this.reason;
            reject(x);
          } catch (err) {
            reject(err);
          }
        });
      } else {
        // pending 状态，收集回调
        this.onFulfilledCallbacks.push((value) => {
          try {
            const x = onFulfilled ? onFulfilled(value) : value;
            resolve(x);
          } catch (err) {
            reject(err);
          }
        });
        this.onRejectedCallbacks.push((reason) => {
          try {
            const x = onRejected ? onRejected(reason) : reason;
            reject(x);
          } catch (err) {
            reject(err);
          }
        });
      }
    });
  }
}

// 示例用法
let p = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('成功'), 1000);
});
p.then(res => {
  console.log(res); // 输出：成功
});

// 示例用法
p = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('成功'), 1000);
});
p.then(res => {
  console.log(res); // 输出：成功
});