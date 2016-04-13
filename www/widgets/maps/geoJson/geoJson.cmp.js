export function geoJsonFactory(proxyService) {
    class GeoJsonCtrl{
        constructor(){
            proxyService.getGeoJsonSite().then((response)=>{
                document.getElementById("geoJsonSite").innerHTML = response.data;
            });
            
        }
    }
    
    return {
        controller: GeoJsonCtrl,
        controllerAs: 'cmp',
        bindToController: true,
        /*scope: {
            source: '='
        },
        transclude: true,
        */
        templateUrl: 'widgets/maps/geoJson/geoJson.tpl.html'
    }
}