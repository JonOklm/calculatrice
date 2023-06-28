const BUTTONS = document.querySelector("#button");




BUTTONS.addEventListener = function(){

var valeur1 = document.getElementById("valeur1").value;

var valeur2 = document.getElementById("valeur2").value;

var operateur = document.getElementById("operateur").value;

if(operateur == "-"){
    alert(Number(valeur1) - Number(valeur2));
}

else if (operateur == "+"){
    alert(Number(valeur1) + Number(valeur2));
}

else if (operateur == "*"){ 
    alert(Number(valeur1) * Number(valeur2));
}

else if (operateur == "/"){ 
    alert(Number(valeur1) / Number(valeur2));
}

}
