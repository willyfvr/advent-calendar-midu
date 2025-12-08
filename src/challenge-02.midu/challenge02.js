// list production provided
var production2 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 },
];
function manufactureGifts2(giftsToProduce) {
    var listResults = [];
    giftsToProduce.forEach(function (obj) {
        for (var x = 0; x < obj.quantity; x++) {
            listResults.push(obj.toy);
        }
    });
    return listResults;
}
var result2 = manufactureGifts2(production2);
console.log(result2);
