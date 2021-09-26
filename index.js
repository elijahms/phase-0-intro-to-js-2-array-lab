// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
   cats.push("Ralph");
   return cats;
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function appendCat() {
    const newcats = [...cats, "Broom"];
    return newcats;
}
function prependCat() {
    const newcats = ["Arnold", ...cats];
    return newcats;
}
function removeLastCat() {
    const newcats = cats.slice(0,2);
    return newcats;
}

function removeFirstCat() {
    const newcats = cats.slice(1);
    return newcats;
}
