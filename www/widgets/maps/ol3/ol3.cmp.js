export function olMapFactory(proxyService) {
    class OlMapCtrl{
        constructor(){
            
            proxyService.reloadGeoJson(this.loadData);
            
            
            var image = new ol.style.Circle({
              radius: 5,
              fill: null,
              stroke: new ol.style.Stroke({color: 'red', width: 1})
            });
            
            this.styles = {
              'Point': [new ol.style.Style({
                image: image
              })],
              'LineString': [new ol.style.Style({
                stroke: new ol.style.Stroke({
                  color: 'green',
                  width: 1
                })
              })],
              'MultiLineString': [new ol.style.Style({
                stroke: new ol.style.Stroke({
                  color: 'green',
                  width: 1
                })
              })],
              'MultiPoint': [new ol.style.Style({
                image: image
              })],
              'MultiPolygon': [new ol.style.Style({
                stroke: new ol.style.Stroke({
                  color: 'yellow',
                  width: 1
                }),
                fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 0, 0.1)'
                })
              })],
              'Polygon': [new ol.style.Style({
                stroke: new ol.style.Stroke({
                  color: 'blue',
                  lineDash: [4],
                  width: 3
                }),
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 255, 0.1)'
                })
              })],
              'GeometryCollection': [new ol.style.Style({
                stroke: new ol.style.Stroke({
                  color: 'magenta',
                  width: 2
                }),
                fill: new ol.style.Fill({
                  color: 'magenta'
                }),
                image: new ol.style.Circle({
                  radius: 10,
                  fill: null,
                  stroke: new ol.style.Stroke({
                    color: 'magenta'
                  })
                })
              })],
              'Circle': [new ol.style.Style({
                stroke: new ol.style.Stroke({
                  color: 'red',
                  width: 2
                }),
                fill: new ol.style.Fill({
                  color: 'rgba(255,0,0,0.2)'
                })
              })]
            };
            
            
            this.vectorSource = new ol.source.GeoJSON(
            ({
              object: this.geoJsonData
            }));
            
            
            this.vectorLayer = new ol.layer.Vector({
              source: this.vectorSource,
              style: this.styleFunction.bind(this)
            });
            
            this.map = new ol.Map({
              layers: [
                new ol.layer.Tile({
                  source: new ol.source.OSM()
                }),
                this.vectorLayer
              ],
              target: 'ol3Map',
              controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                  collapsible: false
                })
              }),
              view: new ol.View({
                //projection: 'EPSG:4326',
                //projection: 'EPSG:3857',
                center: ol.proj.transform([34.655314,31.804381], 'EPSG:4326', 'EPSG:3857'),
                //center: [0,0],
                //center: ol.proj.transform(
                //  [34.655314,31.804381], 'EPSG:4326', 'EPSG:3857'),
                //center: [34.655314,31.804381],
                zoom: 7
              })
            });
            

        }
        loadData(data) {
          this.geoJsonData = data;
            this.geoJsonData.features.forEach(function(f){
              switch(f.geometry.type) {
                case "Point":
                    f.geometry.coordinates = ol.proj.transform(f.geometry.coordinates, 'EPSG:4326', 'EPSG:3857')
                  break;
                case "Polygon":
                    for(var i=0;i<f.geometry.coordinates[0].length;i++) {
                      f.geometry.coordinates[0][i] = ol.proj.transform(f.geometry.coordinates[0][i], 'EPSG:4326', 'EPSG:3857');
                    }
                  break;
                default:
              }
            });  
        }
        
        styleFunction (feature, resolution) {
          return this.styles[feature.getGeometry().getType()];
        }
        
        refresh(){
            //this.vectorSource.clear();
            //proxyService.reloadGeoJson();
            //this.loadData();
            //this.vectorSource.addFeatures(this.geoJsonData);
            //for(var index in this.geoJsonData.features) {
            //  this.vectorSource.addFeature(this.geoJsonData.features[index]);
            //  }
            //this.vectorSource.changed();
            
        }
    }
    
    return {
        controller: OlMapCtrl,
        controllerAs: 'cmp',
        bindToController: true,
        /*scope: {
            source: '='
        },
        transclude: true,
        */
        templateUrl: 'widgets/maps/ol3/ol3.tpl.html'
    }
}