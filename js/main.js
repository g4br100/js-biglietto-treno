let km, eta, prezzo;
km = parseInt(prompt ("km"));
eta = parseInt(prompt ("eta"));
prezzo = km * 0.21;
console.log(prezzo);
if (eta < 18) {
    prezzo = prezzo - ( prezzo * 20 ) / 100;
} else if (eta >= 65) {
    prezzo = prezzo - ( prezzo * 40 ) / 100;
}
document.getElementById('prezzo').innerHTML = "Il prezzo è " + prezzo.toFixed(2) + "€";
console.log(
    `${prezzo}`
)