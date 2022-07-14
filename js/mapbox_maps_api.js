// Incomplete - Javascript I - AJAX & JS Fetch APIs - Mapbox Exercise
(async function () {
    "use strict";

    // Mapbox map with various options (see comments).
    mapboxgl.accessToken = MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.47861, 29.57237], // starting position [lng, lat]
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

    // Array holding restaurants objects with various infomation.
    const favRestaurants3 = [
        {
            name: 'Whataburger',
            coords: [-98.464399, 29.51598],
            reason: `#1 with cheese plain and dry`

        },
        {
            name: 'Soluna',
            coords: [-98.466734, 29.506523],
            reason: `Chispa`

        },
        {
            name: 'Shipley',
            coords: [-98.444462, 29.48826],
            reason: `Do-nut holes`

        },
    ]
    // Array to store currently existing markers for optional removal.
    const currentMarkers = [];

    // ForEach that pulls info from favRestaurants3 array and creates
    // markers with popups for each.
    favRestaurants3.forEach(function (restaurant) {
        let favsMarker = new mapboxgl.Marker();
        favsMarker.setLngLat(restaurant.coords);
        favsMarker.addTo(map);
        currentMarkers.push(favsMarker);
        let favsPopup = new mapboxgl.Popup()
            .setHTML(`<p>${restaurant.name} <br> ${restaurant.reason}</p>`)
        favsMarker.setPopup(favsPopup)
    })

    // Function that removes all current markers.
    let removeMarkersBtn = document.getElementById(`removeMarkersBtn`);
    removeMarkersBtn.addEventListener("click", function (event) {
        if (currentMarkers !== null) {
            for (let i = currentMarkers.length - 1; i >= 0; i--) {
                currentMarkers[i].remove();
            }
        }
    })

    // Marker and popup set on Alamo Cafe
    let favRest = await getLngLatFromAddress("Alamo Cafe");
    console.log(favRest);

    const alamoCafe = new mapboxgl.Marker();
    alamoCafe.setLngLat(favRest);
    alamoCafe.addTo(map);
    currentMarkers.push(alamoCafe);

    var alamoCafePopup = new mapboxgl.Popup()
        .setHTML(`<p>Alamo Cafe <br> Best tortillas on Earth!</p>`)

    alamoCafe.setPopup(alamoCafePopup)

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
    console.log(zoomSelect.value);
    zoomSelect.addEventListener("change", function (event) {
        ;
        console.log(zoomSelect.value);
        map.setZoom(zoomSelect.value);
    })

    // Allows user to enter any place or address and have a marker appear on
    // that place.
    // Markers are added to a current marker array for optional removal.
    let searchBtn = document.getElementById(`searchBtn`);
    let searchInput = document.getElementById(`searchInput`);
    searchBtn.addEventListener('click', async function (event) {
        console.log(searchInput.value);
        let searchCoords = (await getLngLatFromAddress(searchInput.value));
        map.setCenter(searchCoords);
        let userSearchLocation = new mapboxgl.Marker();
        userSearchLocation.setLngLat(searchCoords);
        userSearchLocation.addTo(map);
        currentMarkers.push(userSearchLocation);
    })
    function onMapLoaded(event) {

        event.map.resize();

    }
    onMapLoaded();
})();