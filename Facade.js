///////////////////////////////////////////////////////////////////////////////
//
//  @class 		: Wax_Facade
//	@extends 	: Wax_Mediator
//	@comment 	: 
//		- central communication point
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){

	// @imports
	var Base        	= require('Wax/Base');	

	// Class //////////////////////////////////////////////////////////////////
	var Wax_Facade 		= Base.extend(function(){

		//@private
		var _self;
		var _core;

		function init(Core){
			_self 	= this;
			_core 	= Core;
		}

		/*function installTo(modulename){
			 _core.apply('register',arguments){
				register('modulename','Wax/some/resource');
			}
		}

		if (!meditor.haschannel('foo:bar:baz')){
			_facade.installTo('modulename');
			_facade.start('modulename');
			_self.Mediator.publish('foo:bar:baz', {data:data});

		}*/
		function isActive(ID){

		}

		function start(ID){
			_core.start(ID);
		}

		function stop(ID){
			_core.stop(ID);
		}

		function startAll(){
			_core.startAll();
		}

		function stopAll(){
			_core.stopAll();
		}

		return {
			init		: init,
			start 		: start,
			stop 		: stop,
			startAll 	: startAll,
			stopAll		: stopAll,
		}

	}());

	// Export /////////////////////////////////////////////////////////////////
	return Wax_Facade;

});