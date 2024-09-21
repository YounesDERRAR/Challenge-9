const monnaieDZ = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let monnaieBack = 34751;

function giveMonnaieBack(monnaie) {
  let affiche = [];

  for (let i = 0; i < monnaieDZ.length; i++) {
    const typeDeMonnaie = monnaieDZ[i];
    const x = Math.floor(monnaie / typeDeMonnaie);

    if (x > 0) {
      affiche.push({ typeDeMonnaie, x });
      monnaie = monnaie % typeDeMonnaie;
    }
  }
  return affiche;
}
console.log(giveMonnaieBack(monnaieBack));
