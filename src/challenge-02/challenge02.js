
// list production provided
const production1 = [
  { toy: "car", quantity: 3 },
  { toy: "doll", quantity: 1 },
  { toy: "ball", quantity: 2 }
]

/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  let listResults = [];

  giftsToProduce.forEach(obj => {
    for (let x = 0; x < obj.quantity; x++) {
      listResults.push(obj.toy);
    }
  });

  return listResults;
}

const result1 = manufactureGifts(production1);
console.log(result1);