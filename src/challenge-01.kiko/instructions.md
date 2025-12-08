# Instructions

## Reto 1: Estado de las Luces de Navidad

Los duendes de Santa Claus han instalado un sistema de control para las luces del Polo Norte. Necesitan una función rápida que les diga si las luces están activas para la gran noche. Las luces se consideran activas si están encendidas (ON) o si están parpadeando (BLINK).

Tu objetivo es escribir una función areLightsOn que reciba el estado de las luces como una cadena de texto (status) y devuelva un booleano (true o false) que indique si las luces están activas.

### 🧩 Examples


```
function areLightsOn(status) {
    // Escribe tu código aquí
}

console.log(areLightsOn("ON"));
// Resultado esperado: true

console.log(areLightsOn("OFF"));
// Resultado esperado: false

console.log(areLightsOn("BLINK"));
// Resultado esperado: true
```

### 💡 Conditions 

+ El estado de las luces siempre será una cadena: "ON", "OFF" o "BLINK".
+ La función debe devolver **true** si el estado es "ON" o "BLINK".
+ La función debe devolver **false** si el estado es "OFF".