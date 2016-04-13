import angular from 'angular';

import {proxyServiceFactory} from '../../../services/proxyFactory.srv';

import {geoJsonFactory} from './geoJson.cmp'; 

export let geoJsonMdl = angular.module('geoJsonMdl',[])
.factory('proxyService',proxyServiceFactory)
.directive('geoJson',geoJsonFactory);