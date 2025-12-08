
# Instructions

## Challenge 3: Creating Christmas Greetings ✉️
The elves are making greeting cards for everyone working in the workshop. They want each card to have a different greeting depending on the time of day it is created.

Your task is to write a function getGreeting that receives an hour of the day (an integer from 0 to 23) and returns a greeting based on the following rules:

+ If the hour is between 6 and 11 (inclusive): Return "¡Buenos Días Navideños!"
+ If the hour is between 12 and 17 (inclusive): Return "¡Feliz Tarde de Adviento!"
+ If the hour is between 18 and 5 (inclusive): Return "¡Buenas Noches Estrelladas!"

### 🧩 Examples
```
function getGreeting(hour) {
    // Write your code here
}

console.log(getGreeting(8));
// Expected output: "¡Buenos Días Navideños!"

console.log(getGreeting(14));
// Expected output: "¡Feliz Tarde de Adviento!"

console.log(getGreeting(23));
// Expected output: "¡Buenas Noches Estrelladas!"

console.log(getGreeting(0));
// Expected output: "¡Buenas Noches Estrelladas!"

```
### 💡 Conditions
The input hour will always be a valid integer between 0 and 23.

Make sure to correctly cover the night range (18 to 5, including midnight).

[Challenge 03](https://adventcalendar.dev/en/challenge/03)