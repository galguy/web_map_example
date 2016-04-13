export function proxyServiceFactory ($http) {
    class ProxyService {
        constructor() {
            $http.get('data/geoJson.json').then((response)=>{
              this.geoJsonObj = response.data;
            })
        }
        reloadGeoJson(callback) {
          $http.get('data/geoJson.json?date='+Date()).then((response)=>{
              this.geoJsonObj = response.data;
              callback(response.data);
            })
        }        
        
        getGeoJson() {
            return this.geoJsonObj;
        }
        getGeoJsonSite() {
          return $http.get('php/getGeoJsonSite.php');
        }
        uploadGeoJson(geoJsonFile) {
          $http({
            method: 'POST',
            data: geoJsonFile,
            url: '/www/php/writeGeoJsonFile.php'
          }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        }
    }
    return new ProxyService()
}