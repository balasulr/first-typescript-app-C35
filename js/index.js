"use strict";
const helloWorld = () => {
    console.log("Hello Typescript World!");
};
helloWorld();
const add = (x, y) => {
    console.log(x + y);
};
add(2, 3);
add(6, 888); // create index.js by one of two ways: 1) In js folder, do tsc index.ts or 2) In js folder do, tsc ../ts/index.ts
let a = 44; // To have so index.js generates, in tsconfig.json, do: 1) "outDir": "./js", & 2: "include": ["./ts/**/*.ts"].
let b = 6; // $tsc -w will watch for file changes, and will update the index.js file almost immediately
let c = 888;
