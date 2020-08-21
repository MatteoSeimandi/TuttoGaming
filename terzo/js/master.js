function ora() { // vista della sede nella mappa
	lat = 44.6295000;
	lon = 7.3468600;

   map = new L.Map('mymap'); // codice della mappa
   url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
   attrib = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
   mylayer = new L.TileLayer(url, {attribution: attrib});

   map.setView([lat,lon],14);
   map.addLayer(mylayer);

   marker = L.marker([lat,lon]).addTo(map); // marker della mappa
   marker.bindPopup('Noi siamo qui');
   marker.addTo(map);
}

function trova() {
	if (navigator.geolocation) { // verifico se il browser supporta la geolocalizzazione
      navigator.geolocation.getCurrentPosition(mia_posizione, errore);
   }else{
      alert("Your browser doesn't support geolocation");
   }

   function errore() { // funzione in caso di errore
      alert("location not avaible");
	}

	function mia_posizione(position) { // tracciamento della posizione
      var lat2 = position.coords.latitude;
      var lon2 = position.coords.longitude;
		alert("Ti abbiamo trovato!") ;

      map.setView([lat2,lon2],16);
      map.addLayer(mylayer);

      marker2 = L.marker([lat2,lon2]).addTo(map); // marker della mappa
      marker2.bindPopup('You are here');
      marker2.addTo(map);
   }

}