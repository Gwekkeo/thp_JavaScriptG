function affichTab(argTab){
	alert("--- Function affich ---");
	for(var i=0; i<argTab.length; i++){
		alert(argTab[i]);
	}
}
function affichText(arg){
	alert("--- Affichage du Texte ---\n\n\t" +arg.innerText);
}
function affichRef(arg){
	alert("--- Affichage du Lien ---\n\n" +arg.href);
}


var creaLink = document.createElement('a');
creaLink.id = "linkId";
creaLink.href = "https://google.com";

document.getElementById('monDivDernier').appendChild(creaLink);
creaLink.appendChild(document.createTextNode("petit texte où cliquer :)"));


/*
L'objet document possède 3 méthodes principales:
	getElementById()
	getElementsByTagName()
	getElementsByName()
*/

/*
var div = document.getElementById('item');
alert("Tous, même les balises: " +div.innerHTML);
alert("Seulement text de l'id: " +div.innerText);
//innerHTML = tout même balise
//innerText = seulement le text de pris
*/

/*
	Pour changer un Attribut d'une balise: 
	-changer l'Attribut href (lien du site où aller)
	
	varDuLien.href ='nouveau lien';

	pour avoir la variable du lien:
		var monLien = document.getElementById('idDuLienVoulu');
		var saRef = monLien.getAttribute('href')
		alert(saRef);
	//pour changer la valeur de sa ref
		monLien.setAttribute('monLien', 'https://googl.com');
*/