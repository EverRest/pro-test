var Pet = Pet || {};
Pet.drawMap = (function() {

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

} else {
	var pos = {
		lat: 0,
		lng: 0
	};
	map.setCenter(pos);
	alert('Turn on browsers geolocation');
};

var mapProp = {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:14,
  mapTypeId:google.maps.MapTypeId.HYBRID,
  mapTypeControlOptions: {
  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
}
};

this.map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var map = this.map;
map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');
})();

Pet.addMarkers = function() {

};

Pet.infoWindow = function() {

};

Pet.deleteMarkers = function() {

};

