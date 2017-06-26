class Person {
    private fname: string;
    address: string;
    protected age: number;
    
    constructor(fname,address) {
        this.fname = fname;
        this.address = address;
    }
    run() {
        console.log("Running");
    }
    static talk() {
        console.log("Talking");
    }
}
let person = new Person("Chien","Haiduong");
console.log(person);
person.run();
Person.talk(); // Gọi hàm static

//Kế thừa class Person
class Student extends Person {
    fclass: string; 

    constructor(fname, faddress, fclass) {
        super(fname, faddress); // sử dụng lại contractor
        this.fclass = fclass;
    }   
    destruct() {
    }
    
    learn() {
        console.log("Learning");
    }
}
var student = new Student("Chien", "Haiduong","11A1");
console.log(student);
console.log(student.address);
student.destruct(); // hàm hủy khởi tạo