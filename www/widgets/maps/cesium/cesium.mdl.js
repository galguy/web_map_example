import angular from 'angular';

import '../../../node_modules/cesium/Build/Cesium/Cesium';

import {proxyServiceFactory} from '../../../services/proxyFactory.srv';

import {cesiumMapFactory} from './cesium.cmp'; 

export let cesium = angular.module('cesium',[])
.factory('proxyService',proxyServiceFactory)
.directive('cesiumMap',cesiumMapFactory);