
//const input = parseInt(gets());
const input = 51;

const n = Number(input);

for (let i = 0; i < 10; i++) {
  a = i;  
  if (i === 0) {
    b = n;
  } else {
    b = b*2;
  }
    
  console.log("N[" + a + "] = " + b);
}  