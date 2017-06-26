// module 
export module QLHS {
    export var MyName = "ChienBV";
    export class Person {  
        private fname: string;
        address: string;
        protected age: number;

        constructor(fname, address) {
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
    // Export class for use
    class Student extends Person {
        fclass: string;

        constructor(fname, address, fclass) {
            super(fname, address); // sử dụng lại contractor
            this.fclass = fclass;
        }
        destruct() {
        }
        learn() {
            console.log("Learning");
        }
    }

    export function GetName(name, old = 20, ...info) {
        var result = `Name:${name}, Age: ${old}, Infor: ${info}`;

        console.log(result);
    }
}

var newPerson = new QLHS.Person("Chien", "Haiduong");

var newStudent = new QLHS.("Chien", "Haiduong", "11A1");
console.log(newPerson);
newPerson.run();
console.log(newStudent);
console.log(newStudent.address);

var newGetName = QLHS.GetName("Chien", 24, "Tu Ky", "Hai Duong")



