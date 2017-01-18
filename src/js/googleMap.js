'use strict';

function googleMap() {
  var mapCanvas = document.querySelector('.contact__map');
  var myCenter = new google.maps.LatLng(50.446987, 30.456010);
  var mapOptions = {
    center: myCenter,
    zoom: 16,
    scrollwheel: false
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}