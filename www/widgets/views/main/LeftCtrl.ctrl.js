export class LeftCtrl{
    constructor($mdSidenav, $log,proxyService) {
        this.mdSidenav = $mdSidenav;
        this.log = $log;
        
        	function uploadFile(file){
          
              var url = 'php/writeGeoJsonFile.php';
          
              var xhr = new XMLHttpRequest();
          
              var fd = new FormData();
          
              xhr.open("POST", url, true);
          
              xhr.onreadystatechange = function() {
          
                  if (xhr.readyState == 4 && xhr.status == 200) {
          
                      // Every thing ok, file uploaded
          
                      console.log(xhr.responseText); // handle response.
          
                  }
          
              };
          
              fd.append("upload_file", file);
          
              xhr.send(fd);
          
          }

        
        var uploadfiles = document.querySelector('#uploadfiles');
        
        uploadfiles.addEventListener('change', function () {
        
            var files = this.files;
        
            for(var i=0; i<files.length; i++){
        
                uploadFile(this.files[i]); // call the function to upload the file
        
            }
        
        }, false);
        /*
        document.getElementById('fileinput').addEventListener('change', function(){
        
            var file = this.files[0];
        
            // This code is only for demo ...
        
            console.log("name : " + file.name);
        
            console.log("size : " + file.size);
        
            console.log("type : " + file.type);
        
            console.log("date : " + file.lastModified);
            
            var fd = new FormData();
            
            fd.append("upload_file", file);
        
            proxyService.uploadGeoJson(file);

        
        }, false);
        */
    }
    close() {
      this.mdSidenav('left').close()
        .then( ()=> {
          this.log.debug("close LEFT is done");
        });
    };
}