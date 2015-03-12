///////////////////////////////////////////////////////////////////////////////
//
//  @Class : Derp_Router
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){

	var $   	= require('jquery');
    var _   	= require('underscore');
	var Base 	= require('Wax/Base');

	// Class //////////////////////////////////////////////////////////////////
	var Wax_Router 	= Base.extend(function(){

	    // @private
	    var _self;
	    var _config
	    var _trace;

		// INIT ///////////////////////////////////////////////////////////////
		function init(){
			_self 	= this;
			_config = this.config;
			_trace 	= this.Trace;
		}

		// if we've defined a route in the main script, use it
		// otherwise pick out the url route
		function getRoute(){
			var route = $('script#wax-main').data('wax-route');
			if(route !== undefined && route !== ''){
				return route;
			} else {
				route = window.location.search.split('&')[0];
				return route.substring(1,route.length);
			}
		}

		// pick through the config.routes object and find a node that matches route
		function getRouteConfig(){
			var route = getRoute();
			var config = [];

			for (var key in _config.routes){
				if (key == route){

					// look through each resource node
					_.each( _config['routes'][key]['resources'], function(r, i){

						// pick a path node
						var module = _.find( _config['modules'], function(v, i){
							if (v.id === r.id){
								return true;
							}
						});

						// stuff em together
						config.push({
							ID 		: r.id,
							INIT 	: r.init,
							ASYNC 	: r.async,
							PATH 	: module.path
						});
					});

					// return what we found
					return config;
				}; 
			};

			// if we didnt find anything... fall over.
			return false;
		}

		// Public /////////////////////////////////////////////////////////////
		return {
			init 			: init,
			getRoute 		: getRoute,
			getRouteConfig 	: getRouteConfig
		}

	}());

	// Constructor ////////////////////////////////////////////////////////////
	return Wax_Router;

});