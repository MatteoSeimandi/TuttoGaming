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

var mobo = [
	"img/mobo1.jpeg",
	"img/mobo2.jpeg",
	"img/mobo3.jpg"
]

var mobo2 = [
	"Asus ROG Strix Z490-E Gaming",
	"MSI MPG Z390 Gaming plus",
	"Gigabyte Z390 M Gaming Scheda Madre"
]

var mobo3 = [
	"304",
	"121",
	"108"
]

var video = [
	"img/video1.jpeg",
	"img/video2.jpeg",
	"img/video3.jpeg",
]

var video2 = [
	"MSI GeForce GTX 1650",
	"GIGABYTE GeForce GTX 1650 GAMING ",
	"ASUS Cerberus GeForce GTX 1050"
]

var video3 = [
	"199",
	"189",
	"149"
]


var i=0, j=0, k=0;

// cpu

function next () {
	if (i < 2 )
      i++;
   else
      i=0;

	document.querySelector(".secondo img[name=cpu]").src = cpu[i];
	document.querySelector(".secondo img[name=cpu]").dataset.nome = cpu2[i];
	document.querySelector(".secondo img[name=cpu]").dataset.prezzo = cpu3[i];
}

function back () {
	if (i == 0 )
      i=2;
   else
      i--;

   document.querySelector(".secondo img[name=cpu]").src = cpu[i];
	document.querySelector(".secondo img[name=cpu]").dataset.nome = cpu2[i];
	document.querySelector(".secondo img[name=cpu]").dataset.prezzo = cpu3[i];
}

function info() {
	var prodotto =	document.querySelector(".secondo img[name=cpu]");
	var nome = prodotto.dataset.nome;
	var prezzo = prodotto.dataset.prezzo;
	alert( 'Nome: ' + nome + '\n' + 'Prezzo: €' + prezzo );

}

function save() {
	var prodotto =	document.querySelector(".secondo img[name=cpu]");
	var nome = prodotto.dataset.nome;
	var prezzo = prodotto.dataset.prezzo;
	localStorage.setItem("nomeCpu", nome);
	localStorage.setItem("prezzoCpu", prezzo);
}

// mobo

function next2 () {
	if (j < 2 )
      j++;
   else
      j=0;

	document.querySelector(".secondo img[name=mobo]").src = mobo[j];
	document.querySelector(".secondo img[name=mobo]").dataset.nome = mobo2[j];
	document.querySelector(".secondo img[name=mobo]").dataset.prezzo = mobo3[j];
}

function back2 () {
	if (j == 0 )
      j=2;
   else
      j--;

   document.querySelector(".secondo img[name=mobo]").src = mobo[j];
	document.querySelector(".secondo img[name=mobo]").dataset.nome = mobo2[j];
	document.querySelector(".secondo img[name=mobo]").dataset.prezzo = mobo3[j];
}

function info2() {
	var prodotto =	document.querySelector(".secondo img[name=mobo]");
	var nome = prodotto.dataset.nome;
	var prezzo = prodotto.dataset.prezzo;
	alert( 'Nome: ' + nome + '\n' + 'Prezzo: €' + prezzo );

}

function save2() {
	var prodotto =	document.querySelector(".secondo img[name=mobo]");
	var nome = prodotto.dataset.nome;
	var prezzo = prodotto.dataset.prezzo;
	localStorage.setItem("nomeMobo", nome);
	localStorage.setItem("prezzoMobo", prezzo);
}

// video

function next3 () {
	if (k < 2 )
      k++;
   else
      k=0;

	document.querySelector(".secondo img[name=video]").src = video[k];
	document.querySelector(".secondo img[name=video]").dataset.nome = video2[k];
	document.querySelector(".secondo img[name=video]").dataset.prezzo = video3[k];
}

function back3 () {
	if (k == 0 )
      k=2;
   else
      k--;

   document.querySelector(".secondo img[name=video]").src = video[k];
	document.querySelector(".secondo img[name=video]").dataset.nome = video2[k];
	document.querySelector(".secondo img[name=video]").dataset.prezzo = video3[k];
}

function info3() {
	var prodotto =	document.querySelector(".secondo img[name=video]");
	var nome = prodotto.dataset.nome;
	var prezzo = prodotto.dataset.prezzo;
	alert( 'Nome: ' + nome + '\n' + 'Prezzo: €' + prezzo );

}

function save3() {
	var prodotto =	document.querySelector(".secondo img[name=video]");
	var nome = prodotto.dataset.nome;
	var prezzo = prodotto.dataset.prezzo;
	localStorage.setItem("nomeVideo", nome);
	localStorage.setItem("prezzoVideo", prezzo);
}
