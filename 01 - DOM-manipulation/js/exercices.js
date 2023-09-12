// Ex1

function modifyHTML(type, target, content){
    if (type === "text"){
        target.innerText = content;
    }
    if(type === "image"){
        target.src = content;
    }
}
let type = ["text", "image"];
let myParagraph = document.querySelector('#unique-paragraph');
modifyHTML("text", myParagraph, "Bonjour depuis la fonction!");


//Ex2
myImg = document.getElementById("unique-image")
src = "https://placehold.it/300x300";
modifyHTML("image", myImg, src);

// afficher avec un timer décalé



//Ex3
//créer un bouton
let myButton = document.createElement("a");
myButton.innerText = "Click Me";
myButton.href = "https://www.google.fr/";
myButton.classList.add( "btn", "btn-primary");
myButton.setAttribute("disabled", "true");
document.querySelector("#clickme").appendChild(myButton);

myButton.addEventListener("click", function(e){
    e.preventDefault(); // annuler le fonctionnement natif d'un lien <a>
    document.querySelector("body").style.backgroundColor = 'lightblue'; // changer le background du body
    console.log(this); // Pour viser l'élément déjà sélectionné, utiliser this
    this.style.backgroundColor = "grey";
    changeText(myParagraph2);
});



function changeText(text){
    text.classList.remove('lead');
    text.classList.add('text-center');
}
//Ex4 
let myParagraph2 = document.createElement('p');
myParagraph2.innerText = "Lorem ipsum";
myParagraph2.classList.add('lead');
document.querySelector('body').appendChild(myParagraph2);

//changeText(myParagraph2);


//Ex5
let myList = document.createElement('ul');
let myUsers = ['Bob', 'Alice', 'Charlie'];
for( let i = 0; i < myUsers.length; i++){
    console.log(myUsers[i]);
    li = document.createElement("li");
    li.innerText = myUsers[i];
    myList.appendChild(li);
}
document.querySelector('body').appendChild(myList);
myList.innerHTML = "";
// myList.removeChild(li);  //enlever le dernier li (node) généré dans la boucle for