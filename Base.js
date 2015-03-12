///////////////////////////////////////////////////////////////////////////////
//
//  @class 		: Wax_Base
//	@comment 	: 
//		- base class all other classes extend
//		- library instances	
// 		- extensions
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){

	// @imports
	var Class 			= require('class');
	var Config          = require('Wax/Config');
	var Utils 			= require('Wax/Utils/Utils');   
	var Trace 			= require('Wax/Logger');   
	var Mediator 		= require('Wax/Mediator');     

	// Class //////////////////////////////////////////////////////////////////
	var Wax_Base 		= Class.extend(function(){

		//@ private
		var _trace		= new Trace();

		_trace.setName('Debug');
		_trace.enable(Config.debug.enabled);

		return {	
			init 		: function(){},
			config 		: Config,
			Trace		: _trace,
			Mediator 	: Mediator,
			Utils 		: Utils
		}

	}());

	// Export /////////////////////////////////////////////////////////////////
	return Wax_Base;

});