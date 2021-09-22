var n = new Array(10);
// n = [gets(),gets(),gets(),gets(),gets(),gets(),gets(),gets(),gets(),gets()];

// Atribui valor
n = [0, -5, 63, 0, 3, -2, 1, -110, 2, -9];


for (let i = 0; i < n.length; i++) {
  console.log(`X[${i}] = ${n[i] <= 0 ? 1 : n[i]}`);
}