// Incomplete - Javascript I - AJAX & JS Fetch APIs - Weather Map Mapbox Exercise
(async function () {
    "use strict";

    // Mapbox map with various options (see comments).
    mapboxgl.accessToken = MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.489765, 29.426742], // starting position [lng, lat]
        zoom: 10, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({
            color: 'rgb(186, 210, 235)', // Lower atmosphere
            'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
            'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
            'space-color': 'rgb(11, 11, 25)', // Background color
            'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )}); // Set the default atmosphere style
        })
        map.addControl(new mapboxgl.GeolocateControl());

    });

    // Function to geocode addresses with fetch to mapbox.
    function getLngLatFromAddress(address, token = MAPBOX_API_KEY) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(address) + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function (data) {
                return data.features[0].center;
            });
    }

    //Marker and popup set on Codeup
    let codeup = await getLngLatFromAddress("Codeup");
    console.log(`Codeup coords: ${codeup}`);
    const codeupMarker = new mapboxgl.Marker();
    codeupMarker.setLngLat(codeup);
    codeupMarker.addTo(map);
    var codeupPopup = new mapboxgl.Popup()
        .setHTML(`<p>Codeup<br> 600 Navarro Street,<br> San Antonio, TX <hr></p>`)
    codeupMarker.setPopup(codeupPopup)

    // Various zoom options with buttons and select
    let zoomInBtn = document.getElementById(`zoomIn`);
    zoomInBtn.addEventListener("click", function (event) {
        let currentZoom = map.getZoom();
        currentZoom += 2;
        map.setZoom(currentZoom);
    });

    let zoomOutBtn = document.getElementById(`zoomOut`);
    zoomOutBtn.addEventListener("click", function (event) {
        let currentZoom = map.getZoom();
        currentZoom -= 2;
        map.setZoom(currentZoom);
    });

    let zoomSelect = document.getElementById(`zoomSelect`);
    console.log(`Logging currently selected zoom value: ${zoomSelect.value}`);
    zoomSelect.addEventListener("change", function (event) {
        console.log(zoomSelect.value);
        map.setZoom(zoomSelect.value);
    });

    // Allows user to enter any place or address and have a marker appear on
    // that place.
    // Markers are added to a current marker array for optional removal.
    let searchBtn = document.getElementById(`searchBtn`);
    let searchInput = document.getElementById(`searchInput`);
    const currentMarkers = [];
    searchBtn.addEventListener('click', async function (event) {
        console.log(searchInput.value);
        let searchCoords = (await getLngLatFromAddress(searchInput.value));
        map.setCenter(searchCoords);
        let userSearchLocation = new mapboxgl.Marker();
        userSearchLocation.setLngLat(searchCoords);
        userSearchLocation.addTo(map);
        currentMarkers.push(userSearchLocation);
    })

    let removeMarkersBtn = document.getElementById(`removeMarkersBtn`);
    removeMarkersBtn.addEventListener("click", function (event) {
        if (currentMarkers !== null) {
            for (let i = currentMarkers.length - 1; i >= 0; i--) {
                currentMarkers[i].remove();
            }
        }
    })
})()