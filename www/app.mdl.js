import angular from 'angular';

import {mainMdl} from './widgets/views/main/main.mdl';
import {MainCtrl} from './MainCtrl.ctrl';

export let webMap = angular.module('webMap',[
    mainMdl.name
])
.controller(MainCtrl.name,MainCtrl);