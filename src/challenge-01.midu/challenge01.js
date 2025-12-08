



/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
  const WRONG_ELEMENT = "#";
  let elements = [];

  gifts.forEach(el => {
    if (el !== null && el !== undefined) {

      let index = el.indexOf(WRONG_ELEMENT);
      if (index < 0) {
        elements.push(el);
      }
    }

  });

  return elements;
}

// EXAMPLES | TESTS
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []