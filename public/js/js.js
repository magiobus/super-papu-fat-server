function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.431210, lng: -99.136844},
    zoom: 19
  });
  setMarkers(map);

  var infoWindow = new google.maps.InfoWindow({map: map});








  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}


  var beaches = [
  ['Telmex Hub', 19.431210,-99.136844],
  ['Legendaria', 19.4305814,-99.1361782],
  ['Restaurante Uruguay', 19.4308972,-99.1390719],
  ['El Sazón 3', 19.4308242,-99.1373825],
  ['La Esquina del Pibe', 19.4308609,-99.1386576],
  ['El Charco de las Ranas', 19.4305776,-99.1387891],
  ['Salón China', 19.4305776,-99.1387891],
  ['Los Cocuyos', 19.4308066,-99.1385454],
  ['Azul Histórico', 19.4319177,-99.1382265]];


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'jardkod' :
                        'Error: Your browser doesn\'t support geolocation.');

}



function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}




function centermap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.431210, lng: -99.136844  },
    zoom: 19
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
    });
  } else {
    // Browser doesn't support Geolocation
    //handleLocationError(false, infoWindow, map.getCenter());
  }
}