function areLightsOn(status) {
  if (status === "ON" || status === "BLINK") {
    return true;
  }

  return false;
}

console.log(areLightsOn("ON"));
// Expected result: true

console.log(areLightsOn("OFF"));
// Expected result: false

console.log(areLightsOn("BLINK"));
// Expected result: true