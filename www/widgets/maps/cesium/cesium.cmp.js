export function cesiumMapFactory(proxyService) {
    class CesiumMapCtrl{
        constructor(){
            this.viewer = new Cesium.Viewer('cesiumContainer');
            var geoJsonData = proxyService.getGeoJson();
            this.loadData();
            this.refreshHandler = this.refresh;

        }
        
        loadData() {
            var geoJsonData = proxyService.getGeoJson();
            this.dataSource = Cesium.GeoJsonDataSource.load(geoJsonData);
            this.viewer.dataSources.add(this.dataSource);
            this.viewer.zoomTo(this.dataSource);
        }
        refresh(){
            this.loadData();
        }
    }
    
    return {
        controller: CesiumMapCtrl,
        controllerAs: 'cmp',
        bindToController: true,
        /*scope: {
            source: '='
        },
        transclude: true,
        */
        templateUrl: 'widgets/maps/cesium/cesium.tpl.html'
    }
}