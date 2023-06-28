const BUTTONS = document.querySelector("#button");




BUTTONS.addEventListener = function(){

let valeur1 = document.getElementById("valeur1").value;

let valeur2 = document.getElementById("valeur2").value;

let operateur = document.getElementById("operateur").value;

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
