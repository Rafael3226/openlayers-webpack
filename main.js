import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import KML from 'ol/format/KML';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([-70.617506, -17.1077943]),
    zoom: 14,
  }),
});
const layer = new VectorLayer({
  source: new VectorSource({
    url: './doc1.kml',
    format: new KML(),
  }),
  visible: true,
});

map.addLayer(layer);
