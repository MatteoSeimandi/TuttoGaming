function carica() {
	var profile = document.querySelector("#profilo");
	var percorso = localStorage.getItem("img");

	if (percorso == null) {
		profile.src = "../../img/default.png";
	} else {
		profile.src = percorso;
	}
}

carica();