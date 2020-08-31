var foto = new Array();
var i=0;

foto[0] = "img/primo.png";
foto[1] = "img/secondo.png";
foto[2] = "img/terzo.png";
foto[3] = "img/quarto.png";

function avanti() {
	if ( i < foto.length-1) {
		i++;
	} else {
		i=0;
	}

	document.querySelector("#image img").src = foto[i];
}

function indietro() {
	if ( i == 0) {
		i = foto.length-1;
	} else {
		i--;
	}

	document.querySelector("#image img").src = foto[i];
}