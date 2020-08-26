function cattura() {
	var f1=false, f2=false, f3=false, f4=false;

	var name = document.querySelector("input[placeholder=nome]");
	var surname = document.querySelector("input[placeholder=cognome]");
	var sex = document.querySelectorAll("input[name=sesso]");
	var text = document.querySelector("textarea");

	if (name.value == "") {
		alert("Non hai scritto il tuo nome");
		f1=true;
	}
	if (surname.value == "") {
		alert("Non hai scritto il tuo cognome");
		f2=true;
	}
	if (text.value == "") {
		alert("Non hai scritto il tuo messaggio");
		f4=true;
	}

	a=0;
	for (var i = 0; i < sex.length; i++) {
		if ( sex[i].checked == false) {
		 	a++;
		}
	}
	if (a == 2) {
		alert("Non hai scelto il tuo sesso");
		f3=true;
	}

	if ( f1 == false && f2 == false && f3 == false && f4 == false ) {
		alert("Messaggio Inviato");
	}
}