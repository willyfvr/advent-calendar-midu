// list production provided
const production2 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 },
];

type Product = {
  toy: string;
  quantity: number;
};

function manufactureGifts2(giftsToProduce: Array<{ toy: string; quantity: number }>): string[] {
  let listResults: string[] = [];

  giftsToProduce.forEach((obj: Product) => {
    for (let x: number = 0; x < obj.quantity; x++) {
      listResults.push(obj.toy);
    }
  });
  return listResults;
}

const result2 = manufactureGifts2(production2);
console.log(result2);
