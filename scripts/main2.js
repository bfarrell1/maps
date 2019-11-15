var mymap2 = L.map('mapid2').setView([38.561025, -95.038575], 4.4);
L.tileLayer('https://api.mapbox.com/styles/v1/bfarrell1/ck2wjoyn20ryl1cmhmgknkngr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmZhcnJlbGwxIiwiYSI6ImNrMndqY21taTBnOTUzbW8yYXY1c2tzdGwifQ.u1u3XgOvNTw77wvzQ_MlTQ', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap2);
for (let i=0; i < places.length;i++  ) {
	L.marker( [ places[i].latitude, places[i].longitude ] )
	.bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
			places[i].description +'</p>')
			.addTo( mymap2 );
}
