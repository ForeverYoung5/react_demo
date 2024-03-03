function curry(fn) {
  // 保存函数参数个数
  const arity = fn.length;

  // 定义柯里化函数
  return function curried(...args) {
    // 如果传入的参数个数小于函数所需的参数个数，则返回一个部分应用的函数
    if (args.length < arity) {
      return function (...rest) {
        console.log(args,rest);
        return curried(...args, ...rest);
      };
    };

    // 参数足够，直接调用原函数
    return fn(...args);
  };
}

// 示例使用
function add(x, y, z, l) {
  return x + y + z + l;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3)(4)(5)); // 输出 9
// console.log(curriedAdd(2, 3)(4)); // 输出 9
// console.log(curriedAdd(2)(3, 4)); // 输出 9
// console.log(curriedAdd(2, 3, 4)); // 输出 9
