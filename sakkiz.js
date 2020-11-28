// R  = 1 / ( 1/R1 + 1/R2 + 1/R3);

let r1 = window.prompt("r1 ni kiriting");
let r2 = window.prompt("r2 ni kiriting");
let r3 = window.prompt("r3 ni kiriting");
console.log(r1);
console.log(r2);
console.log(r3);

let r = 1 / (1/r1 + 1/r2 + 1/r3);
console.log(r);

document.write(`<h2>Zanjirlaring  r1(${r1}), r2(${r2}) va r3(${r3}) qarshilig o'zaro parallel ulangan. Ularnig umumiy qarshiligini ${r} ga teng.</h2>`);