
function getPriorityGifts(gifts) {
  let newGifts = []

  gifts.forEach((element, index) => {
    if (index % 2 === 0) {
      newGifts.push(element)
    }
  });

  return newGifts;
}


// other solution 

/**
 * 
 * 
 
function getPriorityGifts(gifts) {
    let newGifts = [];

    for (let i = 0; i < gifts.length; i++) {
        if (i % 2 === 0) {
            newGifts.push(gifts[i]);
        }
    }

    return newGifts;
}
  
 * 
 */
const inventory = ["tren", "muñeca", "pelota", "oso", "coche", "libro"];

console.log(getPriorityGifts(inventory));
// Resultado esperado: ["tren", "pelota", "coche"] 
// (Índices: 0, 2, 4)

const smallInventory = ["sombrero", "guantes", "bufanda"];

console.log(getPriorityGifts(smallInventory));
// Resultado esperado: ["sombrero", "bufanda"]
// (Índices: 0, 2)

console.log(getPriorityGifts([]));
// Resultado esperado: []