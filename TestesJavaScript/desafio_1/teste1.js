//let entrada = "10 85";
//let entrada = "";

let entrada = gets().split(" ");

let H = parseInt(entrada[0]);
let V = parseInt(entrada[1]);

let media = parseFloat((H*V)/12);          
let mediaFinal = media;

console.log(" " + mediaFinal.toFixed(3));