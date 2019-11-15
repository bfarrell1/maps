var mymap = L.map('mapid').setView([30.224529, -81.665258], 8.5);
L.tileLayer('https://api.mapbox.com/styles/v1/bfarrell1/ck2wjoyn20ryl1cmhmgknkngr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmZhcnJlbGwxIiwiYSI6ImNrMndqY21taTBnOTUzbW8yYXY1c2tzdGwifQ.u1u3XgOvNTw77wvzQ_MlTQ', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap);
let marker1 = L.marker([30.668087, -81.433630]).addTo(mymap);
let marker2 = L.marker([29.847786, -81.962162]).addTo(mymap);
let marker3 = L.marker([29.660312, -81.987386]).addTo(mymap);
let marker4 = L.marker([30.154989, -81.727510]).addTo(mymap);
marker1.bindPopup("<b>Fort Clinch State Park</b><br>Fernandina Beach, FL.")
marker2.bindPopup("<b>St. John's River Base</b><br>Orange Park, FL.")
marker3.bindPopup("<b>Camp Shands</b><br>Melrose, FL.")
marker4.bindPopup("<b>Mike Roess Gold Head Branch State Park</b><br>Keystone Heights, FL")
