var cpu = [
	"img/monitor1.jpg",
	"img/monitor2.jpg",
	"img/monitor3.jpg"
]

var cpu2 = [
	"MSI Optix MAG241CV LCD Monitor Gaming 24",
	"Samsung U28E570D Monitor 28 Pollici, UltraHD",
	"ASUS VG278QR 27 FHD Esports Gaming"
]

var cpu3 = [
	"239",
	"229",
	"289"
]

var mobo = [
	"img/tem1.jpg",
	"img/tem2.jpg",
	"img/tem3.jpg"
]

var mobo2 = [
	"Trust Gaming GXT 835 Azor Tastiera Illuminata",
	"HAVIT Tastiera e Mouse da Gioco Filo Gaming Tastiera",
	"VersionTECH Mouse da Gaming con Cavo"
]

var mobo3 = [
	"18",
	"32",
	"13"
]

var video = [
	"img/cuffie1.jpg",
	"img/cuffie2.jpg",
	"img/cuffie3.jpg",
]

var video2 = [
	"Beexcellent GM-1, Cuffie da gaming con microfono",
	"Cuffie da Gaming con Cancellazione del Rumore",
	"YINSAN TM7, Cuffie Gaming con microfono"
]

var video3 = [
	"21",
	"25",
	"19"
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
	localStorage.setItem("nomeMonitor", nome);
	localStorage.setItem("prezzoMonitor", prezzo);
	alert("Articolo salvato");
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
	localStorage.setItem("nomeTem", nome);
	localStorage.setItem("prezzoTem", prezzo);
	alert("Articolo Salvato");
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
	localStorage.setItem("nomeCuffie", nome);
	localStorage.setItem("prezzoCuffie", prezzo);
	alert("Articolo salvato");
}
