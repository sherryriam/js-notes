document.getElementById("demo").innerHTML = "HAE THERE"

let mangoes = 9;
let oranges = 20

if (mangoes  === 10) {

document.getElementById("mangoes").innerHTML = mangoes;
} else if (mangoes > 10 ) {
    document.getElementById("mangoes").innerHTML = oranges;
} else {
    document.getElementById("mangoes").innerHTML = "none";

};

let fruitColor = "yellow" ;

switch   (fruitColor) {
    case "red":
    fruitColor = "watermelon"
    break;
    case "purple" :
    fruitColor = "grapes"
    break;
    case "grey":
    fruitColor = "guava"
    break;
    case "yellow" :
    fruitColor = "orange"
    break;
}
    document.getElementById("fruitcolor").innerHTML = fruitColor

console.log(fruitColor)

