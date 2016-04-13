export function mainCmpFactory() {
    class MainCmpCtrl{
        constructor($timeout, $mdSidenav, $log){
            this.log = $log;
            this.mdSidenav = $mdSidenav;
            this.toggleLeft = this.buildToggler('left');
        }
        
        buildToggler(navID) {
          return function() {
            this.mdSidenav(navID)
              .toggle()
              .then(function () {
                this.log.debug("toggle " + navID + " is done");
              });
          }
        }
    }
    
    return {
        controller: MainCmpCtrl,
        controllerAs: 'mc',
        bindToController: true,
        /*scope: {
            source: '='
        },
        transclude: true,
        */
        templateUrl: 'widgets/views/main/main.tpl.html'
    }
}