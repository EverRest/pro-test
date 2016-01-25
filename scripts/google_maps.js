function initialize() {

  var styles = [
    {
      stylers: [
        { hue: "#34495e" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

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
	zoom:14,
	mapTypeId:google.maps.MapTypeId.HYBRID,
  mapTypeControlOptions: {
  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  }
	};

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');

google.maps.event.addListener(map, 'click', function(event) {
  lostMarker(event.latLng);
});

function lostMarker(location) {
var marker = new google.maps.Marker({
	position: location,
	map: map,
	});

var partial = "<table>" +
    "<tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>" +
    "<tr><td>Address:</td> <td><input type='text' id='address'/></td> </tr>" +
    "<tr><td>Type:</td> <td><select id='type'>" +
    "<option value='dog' SELECTED>dog</option>" +
    "<option value='cat'>cat</option>" +
    "<option value='bird'>bird</option>" +
     "<option value='other'>other</option>" +
    "</select> </td></tr>" +
    "<tr><td>Radius</td><td><input type='text' id = 'radius'> </td> </tr>" +
    "</table>";

var infowindow = new google.maps.InfoWindow({
	content: partial
});

  infowindow.open(map,marker);
} 
}

google.maps.event.addDomListener(window, 'load', initialize);
