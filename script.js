const monnaieDZ = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let monnaieBack = 34751;

function giveMonnaieBack(m) {
  let result = []; // Pour stocker le nombre de billets/pièces

  for (let i = 0; i < monnaieDZ.length; i++) {
    const typeDeMonnaie = monnaieDZ[i];
    const x = Math.floor(m / typeDeMonnaie); // Nombre de billets/pièces de cette dénomination

    if (x > 0) {
      result.push({ typeDeMonnaie, x }); // Ajouter à la liste le nombre de cette dénomination
      m = m % typeDeMonnaie; // Mettre à jour le montant restant avec le modulo
    }
  }

  return result; // Retourner le résultat
}

// Exemple d'utilisation

console.log(giveMonnaieBack(monnaieBack));
