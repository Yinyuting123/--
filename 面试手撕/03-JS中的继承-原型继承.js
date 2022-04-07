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

// 方式一：原型链继承
// 把⽗类的实例作为⼦类的原型
// 缺点：⼦类的实例共享了⽗类构造函数的引⽤属性 不能传参

function Dog() {

}

Dog.prototype = Object.create(Animal.prototype)
// 或者
Dog.prototype = new Animal()

Dog.prototype.run = function(){
	console.log(this.name + '在奔跑');
}

let dog = new Dog()
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true
console.dir(dog);
