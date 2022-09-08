L.mapquest.key = 'YOUR-API-KEY-HERE';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('hybrid', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

// creates a simple full-featured control set,
// and it is placed in the top-right-hand corner by default
//map.addControl(L.mapquest.control());

// adjust control position to bottom right
map.addControl(L.mapquest.control({ position: 'bottomright' }));
