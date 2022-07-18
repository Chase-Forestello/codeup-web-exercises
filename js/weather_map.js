// Incomplete - Javascript I - AJAX & JS Fetch APIs - Weather Map Mapbox Exercise
(async function () {
    "use strict";
    var newMarker;

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
    const currentMarkers = [];

    // Allows user to enter any place or address and have a marker appear on
    // that place.
    // Markers are added to a current marker array for optional removal.
    let searchBtn = document.getElementById(`searchBtn`);
    let searchInput = document.getElementById(`searchInput`);
    searchBtn.addEventListener('click', async function (event) {
        console.log(searchInput.value);
        let searchCoords = (await getLngLatFromAddress(searchInput.value));
        map.setCenter(searchCoords);
        newMarker.remove();
        newMarker = new mapboxgl.Marker({draggable: true});
        newMarker.setLngLat(searchCoords);
        newMarker.addTo(map);
        onDragEnd();
        newMarker.on('dragend', onDragEnd);
        currentMarkers.push(newMarker);
    })

    // Variable that grabs coords of current mouse position in case we want to start with no marker
    //and allow user to
    // map.on('mousemove', (e) => {
    //        JSON.stringify(e.lngLat.wrap());
    //     let mousePosition = (e.lngLat);
    // });

    let removeMarkersBtn = document.getElementById(`removeMarkersBtn`);
    removeMarkersBtn.addEventListener("click", function (event) {
        if (currentMarkers !== null) {
            for (let i = currentMarkers.length - 1; i >= 0; i--) {
                currentMarkers[i].remove();
            }
        }
    })



    // OpenWeather API call
    let queryParams = new URLSearchParams({
        APPID: OPENWEATHER_API_KEY,
        lat: 29.426742,
        lon: -98.489765,
        units: "imperial"
    });
    const url = `https://api.openweathermap.org/data/2.5/onecall?${queryParams}`;
    console.log(url);
    fetch(url)
        .then(function (response){
            return response.json();
        }).then(function (data) {
        console.log(data);
    })

    const coordinates = document.getElementById('coordinates');
    newMarker = new mapboxgl.Marker({
        draggable: true
    })
    newMarker.setLngLat([-98.489765, 29.426742])
    newMarker.addTo(map);

    function onDragEnd() {
        let lngLat = newMarker.getLngLat();
        console.log(lngLat);
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    }

    newMarker.on('dragend', onDragEnd);


})();