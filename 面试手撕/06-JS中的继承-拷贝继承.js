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

// 方式四：拷贝继承
// 遍历并拷贝父类属性，赋值给子类的原型对象
function Cat(name) {
    let animal = new Animal()
    for (let key in animal) {
        Cat.prototype[key] = animal[key]
    }
    Cat.prototype.name = name || 'MiMi';
}
let cat = new Cat()
cat.sleep()
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true