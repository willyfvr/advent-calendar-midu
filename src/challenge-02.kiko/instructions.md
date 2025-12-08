## Challenge 2: Counting Gifts in the Sack 🎁

Santa's magic sack is full of gifts, but they're all mixed together and he needs to quickly know how many gifts of a specific type there are.

Your goal is to write a countGifts function that receives an array of gifts (strings) and the type of gift Santa is looking for. The function should return the total amount of that gift type in the sack.

### 🧩 Example

```
function countGifts(gifts, targetGift) {
    // Write your code here
}

const sack = ["doll", "ball", "doll", "train", "ball", "doll"];

console.log(countGifts(sack, "doll"));
// Expected result: 3

console.log(countGifts(sack, "ball"));
// Expected result: 2

console.log(countGifts(sack, "car"));
// Expected result: 0
```

### 💡 Conditions

- The function must be case-sensitive ("doll" is not the same as "Doll").
- If the searched gift type is not in the array, it should return 0.
- If the gifts array is empty, it should return 0.
