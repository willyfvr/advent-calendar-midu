



/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts: string[] ): string[] {
  const WRONG_ELEMENT:string = "#";
  let elements:string[] = [];

  gifts.forEach(el => {
    if (el !== null && el !== undefined) {

      let index:number = el.indexOf(WRONG_ELEMENT);
      if (index < 0) {
        elements.push(el);
      }
    }

  });

  return elements;
}

// EXAMPLES | TESTS
const gifts1: string[] = ['car', 'doll#arm', 'ball', '#train']
const good1:string[] = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2: string[] = ['#broken', '#rusty']
const good2: string[] = filterGifts(gifts2)
console.log(good2)
// []

const gifts3: string[] = []
const good3:string[] = filterGifts(gifts3)
console.log(good3)
// []