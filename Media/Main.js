///////////////////////////////////////////////////////////////////////////////
//
//  @class 		: Wax_Media_Main
//	@extends 	: Wax_Base
//	@comment 	: intialize and manage module state
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){

	// @imports
	var Base 	= require('Wax/Base');

	// Class //////////////////////////////////////////////////////////////////
	var Wax_Media_Main = Base.extend(function(){

		//@private
		var _self;
		var _facade;
		var _config;

		function init(facade){
			_self 		= this;
			_facade 	= facade;

			_config = {}
			_config.name 		= 'media';
			_config.id			= _self.Utils.getGUID();
			_config.el 			= '#media-module';
			_config.isStarted 	= false;

			_self.Trace.log('Wax_Media_Main::init');
		}

		function start(){
			console.log('Wax_Media_Main::start');
			_config.isStarted = true;
		}

		function stop(){
			console.log('Wax_Media_Main::stop');
			_config.isStarted = false;
		}

		function getConfig(){
			return _config;
		}

		return {
			init		: init,
			start 		: start,
			stop		: stop,
			getConfig 	: getConfig
		}

	}());

	// Export /////////////////////////////////////////////////////////////////
	return Wax_Media_Main;

});