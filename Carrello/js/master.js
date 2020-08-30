var prezzi = new Array();
var nomi = new Array();

function carica() {
	prezzi[0] = localStorage.getItem("prezzoCpu");
	prezzi[1] = localStorage.getItem("prezzoMobo");
	prezzi[2] = localStorage.getItem("prezzoVideo");
	prezzi[3] = localStorage.getItem("prezzoRam");
	prezzi[4] = localStorage.getItem("prezzoSSD");
	prezzi[5] = localStorage.getItem("prezzoCase");
	prezzi[6] = localStorage.getItem("prezzoMonitor");
	prezzi[7] = localStorage.getItem("prezzoTem");
	prezzi[8] = localStorage.getItem("prezzoCuffie");

	nomi[0] = localStorage.getItem("nomeCpu");
	nomi[1] = localStorage.getItem("nomeMobo");
	nomi[2] = localStorage.getItem("nomeVideo");
	nomi[3] = localStorage.getItem("nomeRam");
	nomi[4] = localStorage.getItem("nomeSSD");
	nomi[5] = localStorage.getItem("nomeCase");
	nomi[6] = localStorage.getItem("nomeMonitor");
	nomi[7] = localStorage.getItem("nomeTem");
	nomi[8] = localStorage.getItem("nomeCuffie");

	lista = document.querySelectorAll("li");

	for (let i = 0; i < lista.length; i++) {
		lista[i].innerText = "";
	}

	for (let i = 0; i < prezzi.length; i++) {
		if ( prezzi[i] != null) {
			lista[i].innerText = nomi[i] + "  " + "€" + prezzi[i];
		}
	}

	var totale = 0;
	var tot = document.querySelector("#articoli p");

	for (let i = 0; i < prezzi.length; i++) {
		totale += Number(prezzi[i]);
	}

	tot.innerText = totale;
}


function cancella() {
	var ciao = confirm("Vuoi eliminare tutto il carello?" + "\n" + "Tutti i dati salvati verrano persi defitivamente");
	if (ciao == true) {
		localStorage.clear();
	}
}

function pagare() {
	alert("Hai pagato" + "\n" + "Torna presto a trovarci!!");
}