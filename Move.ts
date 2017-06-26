export namespace HHT {
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
    export class Student extends Person {
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

    function GetName(name, old = 20, ...info) {
        var result = `Name:${name}, Age: ${old}, Infor: ${info}`;

        console.log(result);
    }
}