function initialize() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
 });
};
var mapProp = {
	center:new google.maps.LatLng(51.508742,-0.120850),
	zoom:12,
	mapTypeId:google.maps.MapTypeId.ROADMAP
	};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
google.maps.event.addListener(map, 'click', function(event) {
placeMarker(event.latLng);
});

function placeMarker(location) {
var marker = new google.maps.Marker({
	position: location,
	map: map,
	});

var partial = "<table>" +
                 "<tr height='20'><td>Pets name:</td> <td><input type='text' id='name'/> </td> </tr>" +
                 "<tr height='20'><td>Address:</td> <td><input type='text' id='address'/></td> </tr>" +
                 "<tr height='20'><td>Pets sort:</td> <td><select id='type'>" +
                 "<option value='dog' SELECTED>dog</option>" +
                 "<option value='cat'>cat</option>" +
                 "<option value='cat'>bird</option>" +
                 "</select> </td></tr>" +
                 "<tr><td></td><td><input type='button' class='btn' value='Save & Close' onclick='saveData()'/></td></tr>";
var infowindow = new google.maps.InfoWindow({
	content: partial
});
infowindow.open(map,marker);
}
}
google.maps.event.addDomListener(window, 'load', initialize);