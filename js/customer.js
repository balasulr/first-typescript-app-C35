"use strict";
class Customer {
    constructor(id = 0, name = "") {
        this.id = id;
        this.name = name;
        this.sales = 0;
    }
    log() {
        console.log(`${this.id} | ${this.name} | ${this.sales}`);
    }
}
;
// const test = () => {
//     let a: number = "0";
// }
