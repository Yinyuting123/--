
// 接受一个参数
function add() {
    let args = Array.prototype.slice.call(arguments)

    let inner = function() {
        args.push(...arguments)
        return inner
    }
    
    inner.toString = function() {
        return args.reduce((prev, cur) => {
            prev + cur
        }, 0)
    }
    return inner
}

let result = add(1)(2)(3)
console.log(result);  



function add2() {
    var args = Array.prototype.slice.call(arguments)
    var adder = function () {
     args.push(...arguments)
    return adder
    }
     adder.toString = function () {
    return args.reduce((prev, curr) => {
    return prev + curr
    }, 0) }
    return adder
}

let a = add2(1,2,3)
console.log(a);
