function Animal(name) {
    this.name = name || 'Animal';
	this.sleep = function() {
		console.log(this.name + '正在睡觉！');
	};
}
//原型上面的方法：
Animal.prototype.eat = function(food) {
	console.log(this.name + '正在吃:' + food);
}

// 方式六：寄生组合继承

function Cat(name) {
    Animal.call(this)
    this.name = name || 'Cat'
}

(function() {
    var Super = function() {}
    Super.prototype = Animal.prototype
    Cat.prototype = new Super()
})()

Cat.prototype.constructor = Cat
//修复构造函数

let cat = new Cat()
cat.sleep()
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true