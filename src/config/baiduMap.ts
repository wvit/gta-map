/** 多绕一层 */
const baiduMapBody = document.body

/** 百度地图key */
export const baiduMapKey = 'XTUtb8INdHHtThuIi56GhuAkjwTpIuaX'

/** 百度地图样式 */
export const baiduMapStyle = [
  {
    featureType: 'land',
    elementType: 'geometry',
    stylers: {
      visibility: 'on',
      color: '#000000ff',
    },
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#000000ff',
    },
  },
  {
    featureType: 'building',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#000000ff',
    },
  },
  {
    featureType: 'building',
    elementType: 'geometry.stroke',
    stylers: {
      visibility: 'on',
      color: '#000000ff',
    },
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: {
      visibility: 'on',
      color: '#7487acff',
    },
  },
  {
    featureType: 'village',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'town',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'district',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'country',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'city',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'continent',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'poilabel',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'poilabel',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'scenicspotslabel',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'scenicspotslabel',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'transportationlabel',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'transportationlabel',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'airportlabel',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'airportlabel',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
      opacity: 'ff',
    },
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: {
      visibility: 'on',
      weight: '3',
    },
  },
  {
    featureType: 'green',
    elementType: 'geometry',
    stylers: {
      visibility: 'on',
      color: '#2a2b27ff',
    },
  },
  {
    featureType: 'scenicspots',
    elementType: 'geometry',
    stylers: {
      visibility: 'on',
      color: '#000000ff',
    },
  },
  {
    featureType: 'scenicspots',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'scenicspots',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'continent',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'country',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'city',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'city',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'scenicspotslabel',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'airportlabel',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'transportationlabel',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'railway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'subway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'highwaysign',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'nationalwaysign',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'nationalwaysign',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'provincialwaysign',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'provincialwaysign',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'tertiarywaysign',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'tertiarywaysign',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'subwaylabel',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'subwaylabel',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
      weight: '90',
    },
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'shopping',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'scenicspots',
    elementType: 'labels',
    stylers: {
      visibility: 'on',
    },
  },
  {
    featureType: 'scenicspotslabel',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'manmade',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'manmade',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'highwaysign',
    elementType: 'labels.icon',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#2f455000',
    },
  },
  {
    featureType: 'road',
    stylers: {
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    stylers: {
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    stylers: {
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    stylers: {
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'labels.text',
    stylers: {
      fontsize: '24',
    },
  },
  {
    featureType: 'highway',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'highway',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#586f7cff',
    },
  },
  {
    featureType: 'highway',
    elementType: 'geometry.stroke',
    stylers: {
      color: '#1c4f7eff',
    },
  },
  {
    featureType: 'highway',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'highway',
    elementType: 'geometry',
    stylers: {
      weight: '3',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#586f7cff',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'geometry.stroke',
    stylers: {
      color: '#1c4f7eff',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'geometry',
    stylers: {
      weight: '3',
    },
  },
  {
    featureType: 'provincialway',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#586f7cff',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'arterial',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'tertiaryway',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'fourlevelway',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'local',
    elementType: 'geometry.fill',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'provincialway',
    elementType: 'geometry.stroke',
    stylers: {
      visibility: 'on',
      color: '#3a4c54ff',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'geometry.stroke',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'arterial',
    elementType: 'geometry.stroke',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'tertiaryway',
    elementType: 'geometry.stroke',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'fourlevelway',
    elementType: 'geometry.stroke',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'local',
    elementType: 'geometry.stroke',
    stylers: {
      visibility: 'on',
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'local',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'local',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'fourlevelway',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'tertiaryway',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'arterial',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'provincialway',
    elementType: 'labels.text.fill',
    stylers: {
      visibility: 'on',
      color: '#f4f4f9ff',
    },
  },
  {
    featureType: 'provincialway',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'arterial',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'tertiaryway',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'fourlevelway',
    elementType: 'labels.text.stroke',
    stylers: {
      visibility: 'on',
      color: '#b8dbd9ff',
      weight: '1',
    },
  },
  {
    featureType: 'fourlevelway',
    elementType: 'geometry',
    stylers: {
      weight: '1',
    },
  },
  {
    featureType: 'tertiaryway',
    elementType: 'geometry',
    stylers: {
      weight: '1',
    },
  },
  {
    featureType: 'local',
    elementType: 'geometry',
    stylers: {
      weight: '1',
    },
  },
  {
    featureType: 'provincialway',
    elementType: 'geometry',
    stylers: {
      weight: '3',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'geometry',
    stylers: {
      weight: '3',
    },
  },
  {
    featureType: 'arterial',
    elementType: 'geometry',
    stylers: {
      weight: '3',
    },
  },
  {
    featureType: 'highway',
    stylers: {
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    stylers: {
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    stylers: {
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    stylers: {
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'highway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    stylers: {
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    stylers: {
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    stylers: {
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    stylers: {
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'nationalway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'provincialway',
    stylers: {
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '8-10',
    },
  },
  {
    featureType: 'provincialway',
    stylers: {
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '8-10',
    },
  },
  {
    featureType: 'provincialway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '8-10',
    },
  },
  {
    featureType: 'provincialway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '8-10',
    },
  },
  {
    featureType: 'provincialway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '8-10',
    },
  },
  {
    featureType: 'provincialway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '8-10',
    },
  },
  {
    featureType: 'cityhighway',
    stylers: {
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    stylers: {
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    stylers: {
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    stylers: {
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '6',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '7',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '8',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'cityhighway',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '6-9',
    },
  },
  {
    featureType: 'arterial',
    stylers: {
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '9-9',
    },
  },
  {
    featureType: 'arterial',
    elementType: 'geometry',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '9-9',
    },
  },
  {
    featureType: 'arterial',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
      level: '9',
      curZoomRegionId: '0',
      curZoomRegion: '9-9',
    },
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'scenicspotsway',
    elementType: 'geometry.fill',
    stylers: {
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'scenicspotsway',
    elementType: 'geometry.stroke',
    stylers: {
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'universityway',
    elementType: 'geometry.fill',
    stylers: {
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'universityway',
    elementType: 'geometry.stroke',
    stylers: {
      color: '#bfbfbfff',
    },
  },
  {
    featureType: 'estate',
    elementType: 'geometry',
    stylers: {
      color: '#787878ff',
    },
  },
]

/** 在源码里面随机插入一段防御代码 */
if ('Z3RhLW1hcC5vbmxpbmU=' !== btoa(location.hostname) && !import.meta.env.DEV) {
  baiduMapBody.innerHTML = ''
}
