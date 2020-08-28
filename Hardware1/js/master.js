var cpu = [
	"img/cpu1.jpeg",
	"img/cpu2.jpeg",
	"img/cpu3.jpeg"
]

var cpu2 = [
	"Intel Core i5 9400f 2.90 GHz",
	"Intel Core i7 9700k 3,6 GHz",
	"AMD Ryzen 7 3700X"
]

var cpu3 = [
	"136",
	"318",
	"298"
]

var i=0;

function next () {
	if (i < 2 )
      i++;
   else
      i=0;

	document.querySelector("#secondo img").src = cpu[i];
	document.querySelector("#secondo img").dataset.nome = cpu2[i];
	document.querySelector("#secondo img").dataset.prezzo = cpu3[i];
}

function back () {
	if (i == 0 )
      i=2;
   else
      i--;

   document.querySelector("#secondo img").src = cpu[i];
	document.querySelector("#secondo img").dataset.nome = cpu2[i];
	document.querySelector("#secondo img").dataset.prezzo = cpu3[i];
}

function info() {
	var prodotto =	document.querySelector("#secondo img");
	var nome = prodotto.dataset.nome;
	var prezzo = prodotto.dataset.prezzo;
	alert( 'Nome: ' + nome + '\n' + 'Prezzo: €' + prezzo );

}

function save() {
	var prodotto =	document.querySelector("#secondo img");
	var nome = prodotto.dataset.nome;
	var prezzo = prodotto.dataset.prezzo;
	localStorage.setItem("nomeCpu", nome);
	localStorage.setItem("prezzoCpu", prezzo);
}