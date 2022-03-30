class Customer { // Changing target in tsconfig.json ("target": "es3",) will allow to change what version of javascript
    id: number; // removed setting default in id: number = 0;
    name: string; // Had name: string = ""; but removed since set default below
    sales: number; // removed default in sales: number = 0; since set default below
    
    constructor(id:number = 0, name: string = "") {
        this.id = id;
        this.name = name;
        this.sales = 0;
    }

    log() { // Property
        console.log(`${this.id} | ${this.name} | ${this.sales}`);
    }
};

// const test = () => {
//     let a: number = "0";
// }