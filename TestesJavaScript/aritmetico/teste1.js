 // Não funciona o get
//const input = parseInt(gets());

let input = 39;

const fib = n => {
  if (n < 2) {
    return [0, 1];
  } else {
    const s = fib(n-1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

if (input === 1) {
  console.log('0')
}
else if (input > 0 && input < 46){
  const index = Number(input) - 1;

  const sequence = fib(index).join(" ");

  console.log(sequence);
}
else {
  console.log('Número Inválido!');
}