function initMap() {
    var tulika = {lat: 58.376926, lng: 26.698529};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: tulika});
    var marker = new google.maps.Marker({position: tulika, map: map});
}