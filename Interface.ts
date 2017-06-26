class Person2 {
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

interface LabelledValue {
    label: string;    
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "white", width:12 });

var square: SquareConfig={
    color: "red",
    width: 123
}
console.log(square);
console.log(mySquare);

class Caculate implements SquareConfig {
    
}