var foto = [
	"img/default.png",
	"img/profilo.jpeg",
	"img/profilo2.jpeg",
	"img/profilo3.jpeg",
	"img/profilo4.jpeg",
]

var i=0;

function next () {
	if (i < 4 )
      i++;
   else
      i=0;

   document.querySelector("#image img").src = foto[i];

}

function back () {
	if (i == 0 )
      i=4;
   else
      i--;

   document.querySelector("#image img").src = foto[i];

}

function cattura () {
	var f1=true, f2=true;

	var nome = document.querySelector("input[placeholder=nome]");
	var cognome = document.querySelector("input[placeholder=cognome]");

	if ( nome.value == "" ) {
		alert("non hai scritto il tuo nome");
		f1=false;
	}
	if ( cognome.value == "" ) {
		alert("non hai scritto il tuo cognome");
		f2=false;
	}
	if ( f1 == true && f2 == true) {
		alert("Login effettuato");
	}

}

function start(e) { // funzioni per il drag & drop
    e.originalEvent.dataTransfer.effectAllowed = "move";
    e.originalEvent.dataTransfer.setData("text/plain", this.id);
}

function stop(event) {
   event.preventDefault();
}

function end(event) {
   event.preventDefault();
   var contenitore = document.querySelector("#deposito");
   contenitore.innerHTML = "";
   var data = event.dataTransfer.getData("text/plain", this.id);
   contenitore .src = data;
	localStorage.setItem("img", data);
	alert("Immagine salvata");
}
