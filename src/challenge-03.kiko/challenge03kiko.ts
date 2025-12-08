/**
 * 
 * @param {integer} hour Value between 0 and 23
 * @returns {string} message 
  */
function getGreeting(hour: number): string {
  const DAY_HOURS: number = 24
  const HOUR_IS_INTEGER = Number.isInteger(hour);
  let message: string = "";

  const HOUR_POSITIVE = (hour >= 0 ? true : false);

  if (HOUR_IS_INTEGER && hour < DAY_HOURS && HOUR_POSITIVE) {
    if (hour >= 6 && hour <= 11) {
      message = "¡Buenos Días Navideños!";
    } else if (hour >= 12 && hour <= 17) {
      message = "¡Feliz Tarde de Adviento!";
    } else if (hour >= 18 || hour <= 5) {
      message = "¡Buenas Noches Estrelladas!"
    }
  } else {
    message = "La hora ingresada es incorrecta. Debe ser un valor entero, positivo y entre 0 y 23";
  }

  return message;
  
}

console.log(getGreeting(8));
// Expected output: "¡Buenos Días Navideños!"

console.log(getGreeting(14));
// Expected output: "¡Feliz Tarde de Adviento!"

console.log(getGreeting(23));
// Expected output: "¡Buenas Noches Estrelladas!"

console.log(getGreeting(0));
// Expected output: "¡Buenas Noches Estrelladas!"

console.log(getGreeting(30));
// Expected output: "La hora ingresada es incorrecta. Debe ser un valor entero, positivo y entre 0 y 23"
