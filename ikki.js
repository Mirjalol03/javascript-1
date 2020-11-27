let tezlik = window.prompt("Tezlikni kiriting soatda");
console.log("tezlik");
let masofa = window.prompt("masofani belgilang km da");
console.log(masofa);
let javob = masofa / tezlik;
console.log(javob);
document.write(`<h2>Siz kiritgan masofa=${masofa}km va tezlik=${tezlik}km/soat ning</h2>`);
document.write(`<h2>vaqti ${javob} soat ga teng</h2>`)
document.write(`<h2>Hullas masofa=${masofa}km, tezlik=${tezlik}km/soat va vaqt=${javob} soat ga teng</h2></h2>`)