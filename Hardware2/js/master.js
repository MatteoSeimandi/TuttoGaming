var cpu = [
	"img/ram1.jpg",
	"img/ram2.jpg",
	"img/ram3.jpg"
]

var cpu2 = [
	"HyperX FURY HX424C15FB2/8 DDR4 8 GB, 2400 MHz",
	"Crucial Ballistix LT BLS8G4D240FSE  2400 MHz, DDR4 DRAM 8 GB",
	"Corsair Vengeance 8 GB (2x4 GB), DDR3, 1600 MHz"
]

var cpu3 = [
	"65",
	"129",
	"64"
]

var mobo = [
	"img/ssd1.jpg",
	"img/ssd2.jpg",
	"img/ssd3.jpg"
]

var mobo2 = [
	"Crucial P1 1 TB SSD Interno Fino a 2000 MB/s, 3D NAND",
	"Kingston SSD Unità a Stato Solido Interne 2.5 240 GB",
	"Samsung Memorie QVO SSD Interno da 1 TB, SATA, 2.5"
]

var mobo3 = [
	"101",
	"32",
	"102"
]

var video = [
	"img/case1.jpg",
	"img/case2.jpg",
	"img/case3.jpg",
]

var video2 = [
	"MSI MAG VAMPIRIC 010 Case ATX",
	"Corsair Carbide Series SPEC-DELTA",
	"Mars Gaming MCK, ATX PC Case,"
]

var video3 = [
	"69",
	"70",
	"39"
]


var i=0, j=0, k=0;

// ram

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
	localStorage.setItem("nomeRam", nome);
	localStorage.setItem("prezzoRam", prezzo);
	alert("Articolo salvato");
}

// ssd

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
	localStorage.setItem("nomeSSD", nome);
	localStorage.setItem("prezzoSSD", prezzo);
	alert("Articolo salvato");
}

// case

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
	localStorage.setItem("nomeCase", nome);
	localStorage.setItem("prezzoCase", prezzo);
	alert("Articolo salvato");
}
