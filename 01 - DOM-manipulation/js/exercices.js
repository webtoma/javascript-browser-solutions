// Ex1
let myParagraph = document.querySelector('#unique-paragraph');
console.log(myParagraph);
myParagraph.innerText = "Bonjour, DOM !";

function modifyHTML(type, target, content){
    if (type === "text"){
        target.innerText = content;
    }
    if(type === "image"){
        
        target.src = content;
    }
}
modifyHTML("text", myParagraph, "Bonjour depuis la fonction!");


//Ex2
myImg = document.getElementById("unique-image")
modifyHTML("image", myImg, "https://placehold.it/300x300");

src ="https://placehold.it/300x300";
// afficher avec un timer décalé
