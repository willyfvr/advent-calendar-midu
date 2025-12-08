function countGifts(gifts, targetGifts) {

  let result = 0;

  gifts.forEach(element => {
    if (element === targetGifts) {
      result += 1;
    }
  });

  return result;
}


const sack = ["doll", "ball", "doll", "train", "ball", "doll"];

console.log(countGifts(sack, "doll"));
// Expected result: 3

console.log(countGifts(sack, "ball"));
// Expected result: 2

console.log(countGifts(sack, "car"));
// Expected result: 0