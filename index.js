function encrypt(text) {
  let array = text.split("");
  let result = array.map((letra) => {
    if (letra === "a") return "ai";
    if (letra === "e") return "enter";
    if (letra === "i") return "imes";
    if (letra === "o") return "ober";
    if (letra === "u") return "ufat";
    return letra;
  });
  return result.join("");
}

function decrypt(text) {
  return text
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}