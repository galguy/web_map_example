import angular from 'angular';
import 'angular-material';

import {mainCmpFactory} from './main.cmp';
import {LeftCtrl} from './LeftCtrl.ctrl';

import {cesium} from '../../../widgets/maps/cesium/cesium.mdl';
import {ol} from '../../../widgets/maps/ol3/ol3.mdl';
import {geoJsonMdl} from '../../../widgets/maps/geoJson/geoJson.mdl';

import {proxyServiceFactory} from '../../../services/proxyFactory.srv';

export let mainMdl = angular.module('mainMdl',[
    'ngMaterial',
    cesium.name,
    ol.name,
    geoJsonMdl.name
])
.factory('proxyService',proxyServiceFactory)
.controller(LeftCtrl.name,LeftCtrl)
.directive('mainCmp',mainCmpFactory);