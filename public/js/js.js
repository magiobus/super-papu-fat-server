  var locations = [
  ['Telmex Hub', 19.431210,-99.136844, "1"],
  ['Legendaria', 19.4305814,-99.1361782, "2"],
  ['Restaurante Uruguay', 19.4308972,-99.1390719, "3"],
  ['El Sazón 3', 19.4308242,-99.1373825, "4"],
  ['La Esquina del Pibe', 19.4308609,-99.1386576],
  ['El Charco de las Ranas', 19.4305776,-99.1387891],
  ['Salón China', 19.4305776,-99.1387891],
  ['Los Cocuyos', 19.4308066,-99.1385454],
  ['Azul Histórico', 19.4319177,-99.1382265]];
 var map

function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.431210, lng: -99.136844},
    zoom: 19
  });
  setMarkers(map);





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
    });
  } else {
    // Browser doesn't support Geolocation
  }
}

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
  
  var marker, i

  for (i = 0; i < locations.length; i++){  

    var image = {
    url: 'http://753d7945.ngrok.io/img/pin-place.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };

 var loan = locations[i][0]
 var lat = locations[i][1]
 var long = locations[i][2]
 var add =  locations[i][3]

 latlngset = new google.maps.LatLng(lat, long);

  var marker = new google.maps.Marker({  
          map: map, title: loan , position: latlngset  
        });
        map.setCenter(marker.getPosition())


        var content = loan + "<img src='images/camon.png'>"     

  var infowindow = new google.maps.InfoWindow()

google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
    })(marker,content,infowindow)); 

  }

  
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  
}
