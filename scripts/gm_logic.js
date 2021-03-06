var app = new App();
app.init();

function App() {
  var _this = this;
  

  this.init = function() {

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

  }
}

function Pet() {
  var _this = this;
  this.draw = function() {

  };
}