// function add() {
//     var args = Array.prototype.slice.call(arguments)
//     var adder = function () {
//      args.push(...arguments)
//     return adder
//     }
//      adder.toString = function () {
//     return args.reduce((prev, curr) => {
//     return prev + curr
//     }, 0) }
//     return adder
// }

// let a = add(1, 2, 3)
// let b = add(1)(2)(3)
// console.log(a)
// console.log(b)


// function createCurry(fn, args = []) {
//     return function () {
//         let _args = args.concat(...arguments)
//         // fn.length 是 fn函数的形参个数
//         // 形参数量是指在第一个具有默认值之前的参数个数
//         if (_args.length < fn.length) {
//             return createCurry(fn, _args)
//         }
//         return fn.apply(this, _args)
//     }
// }

// function add(a, b, c) {
//     return a + b + c;
// }
// var _add = createCurry(add);
// console.log(_add(1, 2, 3));
// console.log(_add(1)(2, 3));
// console.log(_add(1)(2)(3));




var fn = function (a, b, c) {
    return a + b + c
}; 

function curryIt(fn) {
    let args = []
    return function() {
        args = args.concat([...arguments])
        curryIt(fn, args)
        console.log(args.reduce((pre,cur) => pre+cur));
        return args.reduce((pre,cur) => pre+cur)
    }
}
curryIt(fn)(1)(2);