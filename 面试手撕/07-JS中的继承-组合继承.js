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

// 方式五：组合继承（构造继承+原型继承）
function Dog() {
    Animal.call(this)
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let dog = new  Dog()
dog.sleep()
console.log(Dog);
