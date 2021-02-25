function initMap() {
	// add your code here
	L.mapquest.key = 'm5E6AU0RDV1CtN1ewT01GlZOLaufEFXf';

	var map = L.mapquest.map('map', {
		center: [32.878481, - 117.235814],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.878481, -117.235814]).addTo(map);
}