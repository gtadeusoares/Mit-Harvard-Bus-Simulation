mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvYXJlcyIsImEiOiJjbDFkemF0cmgwMXduM2JtaXd5Z2U4NDNrIn0.-1sNdNoqxUKtqZ-78iywHw';

  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.104081, 42.365554],
      zoom: 14
  });
 
var marker = new mapboxgl.Marker()
    .setLngLat([-71.093729, 42.359244])
    .addTo(map);

const busStops = [
    [-71.093729, 42.359244], 
    [-71.094915, 42.360175],
    [-71.095800, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863]
];

let counter = 0;
let up = true;
let timer;
let moving = false;

function next() {
  if (up) marker.setLngLat(busStops[++counter]);
  else marker.setLngLat(busStops[--counter]);
  if(counter === busStops.length - 1) up = !up;
  if(counter === 0){ up = !up;}
}

function previous() {
  if (!up) marker.setLngLat(busStops[++counter]);
  else marker.setLngLat(busStops[--counter]);
  if(counter === busStops.length - 1) up = !up;
  if(counter === 0){ up = !up;}
}

function move(){
  if (!moving) {
    moving = true;
    timer = setInterval(()=>{
      marker.setLngLat(busStops[counter]);
      if (up) counter++;
      else counter--;
      if(counter === busStops.length - 1) up = !up;
      if(counter === 0){ up = !up;}
      
    }, 800); 
  } else return;
  
  
}

function stop() {
  clearInterval(timer);
  moving = false;
}
