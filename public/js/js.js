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



var marc = 'img/pin-17.png';

var posit = new google.maps.Marker({map: map, icon: marc});



  // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            posit.setPosition(pos);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, posit, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, posit, map.getCenter());
        }

}

function handleLocationError(browserHasGeolocation,posit, pos) {
  posit.setPosition(pos);

}



function setMarkers(map) {
  
  var marker, i

  for (i = 0; i < locations.length; i++){  

    var image = 'img/pin-18.png' ;

 var loan = locations[i][0]
 var lat = locations[i][1]
 var long = locations[i][2]
 var add =  locations[i][3]

 latlngset = new google.maps.LatLng(lat, long);

  var marker = new google.maps.Marker({  
          map: map, title: loan , position: latlngset, icon: image
        });


        var content = "<h1>"+loan+"</h1>" + "<img src='images/camon.png'>"     

  var infowindow = new google.maps.InfoWindow()

google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
    })(marker,content,infowindow)); 

  }
  
}
  


  //---------------modal------------



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


   //---------------modal------------