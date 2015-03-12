///////////////////////////////////////////////////////////////////////////////
//
//  @class 		: Wax_Page_HelpSupport_Main
//	@extends 	: Wax_Base
//	@comment 	: intialize and manage module state
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){

	// @imports
	var Base 							= require('Wax/Base');
	var Wax_Page_HelpSupportController 	= require('Wax/Page/HelpSupport/Controller');

	// Class //////////////////////////////////////////////////////////////////
	var Wax_Page_HelpSupport_Main = Base.extend(function(){

		//@private
		var _self;
		var _facade;
		var _controller;
		var _config;

		function init(facade){
			_self 		= this;
			_self.Trace.log('Wax_Page_HelpSupport_Main::init');
			_facade 	= facade;
			_controller = new Wax_Page_HelpSupportController();

			_config 			= {};
			_config.name 		= 'help_support';
			_config.id			= _self.Utils.getGUID();
			_config.el 			= '#help-support';
			_config.isStarted 	= false;

			//_facade.register(_config);
		}

		function start(){
			_self.Trace.log('Wax_Page_HelpSupport_Main::start');
			_config.isStarted = true;
			_controller.start();
		}

		function stop(){
			_self.Trace.log('Wax_Page_HelpSupport_Main::stop');
			_config.isStarted = false;
			_controller.stop();
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
	return Wax_Page_HelpSupport_Main;

});