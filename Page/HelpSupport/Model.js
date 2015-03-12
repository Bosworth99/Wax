///////////////////////////////////////////////////////////////////////////////
//
//  @Class : Wax_Page_HelpSupport_Model
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){

	// @imports
	var Base 	= require('Wax/Base');
	var Nexus	= require('nexus');

	// Class //////////////////////////////////////////////////////////////////
	var Wax_Page_HelpSupport_Model = Base.extend(function(){

		// @private
		var _self;

		function init(){
			this.Trace.log('Wax_Page_HelpSupport_Model:init %o', this.config.version);
			_self 		= this;
		}

		function start(){}

		function sendHelpSupport(data){
			// Hack. But integrating an ajax class is overkill for this example.
			Nexus.Ajax.sendHelpSupport(data);
		}

		function stop(){}

		return {
			init 	: init,
			start 	: start,
			stop	: stop,
			sendHelpSupport : sendHelpSupport
		};

	}());

	return Wax_Page_HelpSupport_Model;
});