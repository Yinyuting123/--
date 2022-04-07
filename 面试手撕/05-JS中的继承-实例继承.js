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


// 方式三：实例继承
function Cat(name) {
    let instance = new Animal()
    instance.name = name || 'Tom'
    return instance
}
let cat = new Cat()
cat.sleep()
console.log(cat instanceof Animal) // false
console.log(cat instanceof Cat) // true
