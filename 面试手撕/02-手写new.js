
function myNew(fn, ...args) {
    let obj = {}
    
    // 使空对象的隐式原型指向原函数的显式原型
    obj._proto_ = fn.prototype

    // 改变this指向
    // apply 传递参数为数组
    let result= fn.apply(obj, args)
    // console.log(result,'对象');
    return result instanceof Object ?result :obj
}

function Person(name, age) {
    this.name = name
    this.age = age
}
let obj = myNew(Person,'yyt',18)
// console.log(obj.name, obj.age);