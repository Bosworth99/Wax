///////////////////////////////////////////////////////////////////////////////
//
//  @Class : Wax_Page_HelpSupport_Controller
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){

	// @imports
	var View 	= require('Wax/Page/HelpSupport/View');
	var Model 	= require('Wax/Page/HelpSupport/Model');
	var Base 	= require('Wax/Base');
	var Nexus 	= require('nexus');

	// Class //////////////////////////////////////////////////////////////////
	var Wax_Page_HelpSupport_Controller = Base.extend(function(){

		// @private
		var _self;
		var _view;
		var _model;
		var _ajax;

		function init(){
			this.Trace.log('Wax_Page_HelpSupport_Controller:init %o', this.config.version);
			_self 		= this;
			_view 		= new View();
			_model 		= new Model();

			_ajax 		= Nexus.Ajax.getDispatcher(); // should be using the mediator
		}

		function start(){

			addEventHandlers();
			_view.start();
		}

		function stop(){}

		function addEventHandlers(){

			_self.Mediator.subscribe('helpSupport:btnSubmit:click', function(args){
				//_self.Trace.log('helpSupport:btnSubmit:click', args);
				_model.sendHelpSupport(args.data);
			});

			// mixing old with new =\
			_ajax.on({
				'help-support-ok' : function(e,args){
					//_self.Trace.log('help-support-ok', args);
					Nexus.Message.success('Support Ticket has been submitted.');
					_view.clear();
				},
				'help-support-notok' : function(e,args){
					//_self.Trace.log('help-support-notok', args);
					Nexus.Message.error('Support Ticket submission failed!');
				}
			});

		};

		return {
			init 	: init,
			start 	: start,
			stop	: stop
		};

	}());

	return Wax_Page_HelpSupport_Controller;
});