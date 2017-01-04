function googleMap() {
  const mapCanvas = document.querySelector('.contact__map');
  const myCenter = new google.maps.LatLng(50.446987, 30.456010); 
  const mapOptions = {center: myCenter, zoom: 16};
  const map = new google.maps.Map(mapCanvas,mapOptions);
  const marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}