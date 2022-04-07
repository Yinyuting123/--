// 1. 需要考虑函数、正则、日期、ES6新对象
// 2. 需要考虑循环引用问题
function _completeDeepClone(target, map = new Map()) {
    if(typeof target != 'object' || target === null) return target
    if(map.has(target)) return map.get(target)
    let constructor = target.constructor
    let regExp = /^(Function|RegExp|Date|Symbol|BigInt)$/
    if(regExp.test(constructor.name)) {
        return new constructor(target)
    }
    let obj = target instanceof Array ? [] : {}
    map.set(target, obj)
    for (let key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
            obj[key] = _completeDeepClone(target[key], map)  
        }
    }
    return obj
}


const o1 = {
    name: 'g', 
    age: 18, 
    o: {name: 'o'}, 
    a: [1,2], 
    r: new RegExp(), 
    d: new Date()
};
o1.self = o1;

let o2 = _completeDeepClone(o1)
console.log(o2);