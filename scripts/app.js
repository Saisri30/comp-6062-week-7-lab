let input = document.querySelector("#numberInput");
console.log(input.innerHTML);

input.addEventListener("input",function(){
    console.log("User typed: "+ input.value);
    if(input.value>10 || input.value<-10)
    {
        alert("The number should be between -10 and 10");
    }
});

const fruit = {
    fruitName : 'Apple',
    fruitColor: 'Red',
    fruitTaste: 'Sweet'
};
let FruitName = document.querySelector("#fruitName");
console.log(FruitName.innerHTML);
FruitName.innerHTML =`Name: ${fruit.fruitName}`;
let FruitColor = document.querySelector("#fruitColor");
console.log(FruitColor.innerHTML);
FruitColor.innerHTML = `Color: ${fruit.fruitColor}`;
let FruitTaste = document.querySelector("#fruitTaste");
console.log(FruitTaste.innerHTML);
FruitTaste.innerHTML = `Taste: ${fruit.fruitTaste}`;



    