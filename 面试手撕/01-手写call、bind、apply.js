// 实现call方法
// context为想要改变的目标对象
Function.prototype.myCall = function(context) {
    if(typeof this !== 'function') {
        throw new TypeError('Not a function')
    }

    // 不传参数则为window
    context = context || window 

    // 保存this
    context.fn = this

    // 保存参数
    let args = Array.from(arguments).splice(1)
    
    // 调用函数
    let result = context.fn(...args)

    delete context.fn

    return result
}

// 实现apply函数
Function.prototype.myApply = function(context) {
    if(typeof this !== 'function') {
        throw new TypeError('Not a function')
    }

    context = context || window

    context.fn = this

    let result
    // 是否传参
    if(arguments[1]) {
        result = context.fn(arguments[1])
    } else {
        result = context.fn()
    }

    delete context.fn

    return result
}

// 实现bind函数
// bind() 方法不会调用函数,但是能改变函数内部this 指向,
// 返回的是原函数改变this之后产生的新函数

Function.prototype.myBind = function(context) {
    // 判断是否为一个函数
    if(typeof this !== 'function') {
        throw new TypeError('Not a function')
    }

    // 保存调用bind的函数
    const _this = this
    // 保存参数
    const args = Array.prototype.slice.call(arguments,1)
    
    
    // 返回改变this方向的新函数
    return function F() {
        if(this instanceof F) {
            // 如果是new出来的
            // 返回空对象，且使创建出来的实例的_proto_指向_this的prototype，且完成函数柯⾥化
            return new _this(...args,...arguments)
        } else {
            // 如果不是new出来的改变this指向，且完成函数柯⾥化
            console.log(...arguments);
            _this.apply(context, args.concat(...arguments));
            return _this.apply(context, args.concat(...arguments))
        }
    }

}

function my() {
    console.log('my:', arguments);
}
let obj = {}
// my.myCall(obj,1,2,3)
// my.myApply(obj,[1,2,3])
let f=my.myBind(obj,100)
// console.log(f);
f(1,2,3)