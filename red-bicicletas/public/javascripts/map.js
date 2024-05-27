var map = L.map('main_map').setView([4.636880795167329, -74.0840183291617], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([4.636880795167329, -74.0840183291617]).addTo(map);
