
function validation(){
    var name=document.getElementById("name").value.length;
    var prenom=document.getElementById("prenom").value.length;
    var date_naissance=document.getElementById("date_naissance").value.length;
    var adresse =document.getElementById("adresse").value.length;
    var mail=document.getElementById("mail").value.length;


if ((name<5) && (prenom<5) && (date_naissance<5) && (adresse<5) && (mail<5) ){
var er=document.querySelector("#error");
er.style.backgroundColor="pink";
er.style.padding="5px";
er.style.border="1px solid black;" 
er.innerHTML="le nom doit contenir 5 elements"
}

else 
var er1=document.querySelector("#resultat");

er1.style.backgroundColor="green";
er1.style.padding="5px";
er1.style.border="1px  black;" 
er1=document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#name").value;



}


