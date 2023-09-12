// Your code goes here

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
});