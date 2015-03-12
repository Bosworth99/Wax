///////////////////////////////////////////////////////////////////////////////
//
//  @Class : Wax_Page_HelpSupport_View
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){

	// @imports
	var $       = require('jquery');
    var _       = require('underscore');
	var Base    = require('Wax/Base');

	// Class //////////////////////////////////////////////////////////////////
	var Wax_Page_HelpSupport_View = Base.extend(function(){

		// @private
		var _self;
		var _el;

		// form fields
		var _form;
		var _selectDept;
		var _hiddenDept;
		var _btnSubmit;

		var _rules = {
			name    : {
			    required    : true,
			    malicious   : true
			},
			email : {
			    required    : true,
			    email       : true
			},
			phone   : {
			    required    : false,
			    laxmalicious: true
			},
			subject : {
			    required    : true,
			    malicious   : true
			},
			message : {
			    required    : true,
			    laxmalicious: true
			}
		}

		var _messages ={
			name    : {
			    required    : 'Name is required!',
			    malicious   : Nexus.Const.VALIDATOR_MESSAGES.malicious
			},
			email   : {
			    required    : 'Email is required!',
			    email       : Nexus.Const.VALIDATOR_MESSAGES.email
			},
			phone   : {
			    laxmalicious: Nexus.Const.VALIDATOR_MESSAGES.malicious
			}, 
			subject    : {
			    required    : 'Message is required!',
			    laxmalicious: Nexus.Const.VALIDATOR_MESSAGES.malicious
			},
			message    : {
			    required    : 'Message is required!',
			    laxmalicious   : Nexus.Const.VALIDATOR_MESSAGES.malicious
			}
		}

		function init(){
			this.Trace.log('Wax_Page_HelpSupport_View:init %o', this.config.version);
			_self 			= this;
			_el 			= $('#help-support');

			_form 			= $('#support-form');
			_hiddenDept 	= $('input[name="formtype"]');
			_selectDept 	= $('#set-formtype');
			_btnSubmit		= $('#help-support-submit');
		}

		function start(){
			addEventListeners();

			_form.validate({
				rules       : _rules,
				messages    : _messages,
				ignore      : '.ignore',
				onkeyup     : false
			});
		}

		function addEventListeners(){
			_selectDept.on({
				'change':function(){
					_hiddenDept.val(_selectDept[0].value);
				}
			});

			_btnSubmit.on({
				'click' : function(e){
					e.preventDefault();
					doValidation();
				}
			});
		}

		function clearForm(){
			_form.find('input','textarea').val("");
		}

		function doValidation(){

			var f = _form.validate();
			if (f.form()) {
				_self.Mediator.publish('helpSupport:btnSubmit:click', { data : getFormData() } );
			}
		}

		function getFormData(){
			return _form.serialize();
		}

		function getEl(){
			return _el;
		}

		return {
			init 	: init,
			clear	: clearForm,
			getEl	: getEl,
			start 	: start,
			stop	: stop
		};

	}());

	return Wax_Page_HelpSupport_View;
});