//let entrada = "10 85";
//let entrada = "22 67";

let entrada = gets().split(" ");
let line = entrada.split(" ");

let H = parseInt(line[0]);
let P = parseInt(line[1]);

let media = parseFloat((H*P)/12);          
let mediaFinal = media;

console.log(" " + mediaFinal.toFixed(3));