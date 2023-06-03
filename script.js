const BUTTONS = document.querySelector("#button");




BUTTONS.onclick = function(){

var valeur1 = document.getElementById("valeur1").value;

var valeur2 = document.getElementById("valeur2").value;

var opérateur = document.getElementById("opérateur").value;

if(opérateur == "-"){
    alert(Number(valeur1) - Number(valeur2));
}

else if (opérateur == "+"){
    alert(Number(valeur1) + Number(valeur2));
}

else if (opérateur == "*"){ 
    alert(Number(valeur1) * Number(valeur2));
}

else if (opérateur == "/"){ 
    alert(Number(valeur1) / Number(valeur2));
}

}
