import angular from 'angular';

//import '../../../node_modules/cesium/Build/Cesium/Cesium';
//import 'http://openlayers.org/en/v3.0.0/build/ol';
import '../../../lib/ol3';

import {proxyServiceFactory} from '../../../services/proxyFactory.srv';

import {olMapFactory} from './ol3.cmp'; 

export let ol = angular.module('ol',[])
.factory('proxyService',proxyServiceFactory)
.directive('olMap',olMapFactory);