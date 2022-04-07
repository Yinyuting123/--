class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    run() {
        console.log(this.name + '在奔跑！');
    }
}

// 方式七：ES6的extend
class Student extends Person {
    run() {
        super.run()
    }
}
let student = new Student('小明', 15)
student.run()
console.log(student instanceof Person); // true
console.log(student instanceof Student); // true