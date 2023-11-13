/** 多绕一层 */
const mapBody = document.body
const domainName = location.hostname

/** 百度地图key */
export const baiduMapKey = 'XTUtb8INdHHtThuIi56GhuAkjwTpIuaX'

/** 百度地图样式 */
export const baiduMapStyle = [{
  "featureType": "land",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "color": "#000000ff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#000000ff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#000000ff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#000000ff"
  }
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "color": "#7487acff"
  }
}, {
  "featureType": "village",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "town",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "district",
  "elementType": "labels",
  "stylers": {
      "visibility": "on"
  }
}, {
  "featureType": "country",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "continent",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff",
      "opacity": "ff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "weight": "3"
  }
}, {
  "featureType": "green",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "color": "#2a2b27ff"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "color": "#000000ff"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "continent",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "country",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "city",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "railway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "weight": 5
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff",
      "weight": "90"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "shopping",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels",
  "stylers": {
      "visibility": "on"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "manmade",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#2f455000"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text",
  "stylers": {
      "fontsize": "24"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": 1
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#586f7cff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#1c4f7eff",
      "opacity": "ff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "weight": 5
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#586f7cff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#1c4f7eff",
      "opacity": "ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": 1
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "weight": 2
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#586f7cff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#3a4c54ff",
      "opacity": "ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff",
      "opacity": "ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff",
      "opacity": "ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "local",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "local",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#f4f4f9ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": 1
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": 1
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": 2
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": 0.5
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#b8dbd9ff",
      "weight": "1"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry",
  "stylers": {
      "weight": "1",
      "visibility": "off"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry",
  "stylers": {
      "weight": 1,
      "visibility": "on"
  }
}, {
  "featureType": "local",
  "elementType": "geometry",
  "stylers": {
      "weight": "1",
      "visibility": "off"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "weight": 2
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "weight": 3
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "weight": 3
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotsway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "scenicspotsway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "universityway",
  "elementType": "geometry.fill",
  "stylers": {
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "universityway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#bfbfbfff"
  }
}, {
  "featureType": "estate",
  "elementType": "geometry",
  "stylers": {
      "color": "#787878ff"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "6"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "7"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "8"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "9"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "10"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "11"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "12"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "13"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "14"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "15"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "16"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "17"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "18"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "19"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "20"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "21"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "10"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "11"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "12"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "13"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "14"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "15"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "16"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "17"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "18"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "19"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "20"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "21"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "10"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "11"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "12"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "13"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "14"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "15"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "16"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "17"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "18"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "19"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "20"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "21"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "6"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "7"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "8"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "9"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "10"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "11"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "12"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "13"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "14"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "15"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "16"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "17"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "18"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "19"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "20"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "21"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "10"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "11"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "12"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "13"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "14"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "15"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "16"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "17"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "18"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "19"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "20"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "21"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "10"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "11"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "12"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "13"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "14"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "15"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "16"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "17"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "18"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "19"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "20"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "21"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "8"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "9"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "10"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "11"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "12"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "13"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "14"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "15"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "16"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "17"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "18"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "19"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "20"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "21"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "10"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "11"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "12"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "13"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "14"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "15"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "16"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "17"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "18"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "19"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "20"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "21"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "10"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "11"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "12"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "13"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "14"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "15"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "16"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "17"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "18"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "19"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "20"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "8,21",
      "level": "21"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "10"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "11"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "12"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "13"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "14"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "15"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "16"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "17"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "18"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "19"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "20"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "21"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "10"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "11"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "12"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "13"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "14"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "15"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "16"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "17"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "18"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "19"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "20"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "21"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "10"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "11"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "12"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "13"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "14"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "15"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "16"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "17"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "18"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "19"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "20"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,21",
      "level": "21"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "9"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "10"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "11"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "12"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "13"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "14"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "15"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "16"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "17"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "18"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "19"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "20"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "21"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "10"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "11"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "12"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "13"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "14"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "15"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "16"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "17"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "18"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "19"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "20"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "21"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "10"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "11"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "12"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "13"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "14"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "15"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "16"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "17"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "18"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "19"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "20"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "9,21",
      "level": "21"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "6"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "7"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "8"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "9"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "10"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "11"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "12"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "13"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "14"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "15"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "16"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "17"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "18"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "19"
  }
}, {
  "featureType": "road",
  "stylers": {
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "20"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "6"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "7"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "8"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "9"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "10"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "11"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "12"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "13"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "14"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "15"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "16"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "17"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "18"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "19"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "20"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "6"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "7"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "8"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "9"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "10"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "11"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "12"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "13"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "14"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "15"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "16"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "17"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "18"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "19"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "curZoomRegionId": "0",
      "curZoomRegion": "6,20",
      "level": "20"
  }
}, {
  "featureType": "highrailway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "roadarrow",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "footbridge",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "crosswalk",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "underpass",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "laneline",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "parkingspace",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subway",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "vacationway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "universityway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotsway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "local",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "local",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subway",
  "elementType": "labels.text",
  "stylers": {
      "fontsize": 50
  }
}, {
  "featureType": "subway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "weight": 2
  }
}, {
  "featureType": "subway",
  "elementType": "labels.text.fill",
  "stylers": {
      "weight": 10
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels.text",
  "stylers": {
      "fontsize": 14
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "island",
  "elementType": "labels",
  "stylers": {
      "visibility": "on"
  }
}, {
  "featureType": "district",
  "elementType": "labels.text.stroke",
  "stylers": {
      "weight": 1,
      "opacity": "9c"
  }
}, {
  "featureType": "district",
  "elementType": "labels.text",
  "stylers": {
      "fontsize": 24
  }
}, {
  "featureType": "district",
  "elementType": "labels.text.fill",
  "stylers": {
      "weight": 30,
      "color": "#f4f4f9ff",
      "opacity": "bf"
  }
}, {
  "featureType": "subway",
  "elementType": "geometry.stroke",
  "stylers": {
      "opacity": "ff"
  }
}, {
  "featureType": "town",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}]

/** 在源码里面随机插入一段防御代码 */
if ('Z3RhLW1hcC5vbmxpbmU=' !== btoa(domainName) && !import.meta.env.DEV) {
  mapBody.innerHTML = ''
}
