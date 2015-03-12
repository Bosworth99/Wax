///////////////////////////////////////////////////////////////////////////////
//
//  @Class : Wax_Core
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){

	// @imports
	var $               = require('jquery');
    var _               = require('underscore');
	var Base 			= require('Wax/Base');
	var Facade 			= require('Wax/Facade');
	var Router 			= require('Wax/Router');

	// Class //////////////////////////////////////////////////////////////////
	var Wax_Core 		= Base.extend(function(){

	    // @private
	    var _self;
	    var _trace;
	    var _facade;
	    var _router;	    
	    var _defer;
	    var _modules;

		// INIT ///////////////////////////////////////////////////////////////
		function init(){
			_self 		= this;
			_trace		= this.Trace;
			_facade 	= new Facade(_self);
			_router 	= new Router();
			_defer 		= [];
			_modules 	= [];		
				
			_trace.log('Wax_Core::init', _self.config);
		}

		// pick route config and initialize all resources
		function boot(){
			var cfg = _router.getRouteConfig();
			if (cfg){

				// aquire module resources
				_.each(cfg, function(resource, i){

					// requirejs - load defined resources
					require([resource['PATH']], function(M){

						// store module obj
						register({
							ID 			: resource['ID'],
							Class 		: M,
							instance 	: undefined,
							config 		: undefined
						});

						// do we need the module at startup?
						if (resource['INIT']){

							// if def is async, start immediately else defer
							if ( resource['ASYNC'] ){
								start(resource['ID']);
							} else {
								_defer.push(resource['ID']);
							}

							// if we've booted all resources, start deferred modules
							if (i == cfg.length-1 && _defer.length>0){ 
								defer(); 
							}
						}
					});	
				});

			} else {
				throw new Error('Route Config is Missing!');
			}
		}

		// instantiate module
		function invoke(module){
			if (module){
				if (typeof module.Class == 'function'){
					//try{
						module.instance 	= new module.Class(_facade);
						module.config 		= module.instance.getConfig();
						module.instance.start();			
					//} catch(e){			
						//_trace.log('Failed to Instatiate module!', e, module);
					//}
				} else {
					throw new Error('Failed to determine Module Class!', module);
				}
			} else {
				throw new Error('Error invoking module resource!', module);
			}
		}

		// start a module
		function start(ID){
			var module = pick(ID);
			if (module){
				if (module.instance !== undefined){
					if (module.config.isStarted === false){
						module.instance.start();
					}
				} else {
					invoke(module);
				}
			} else {
				throw new Error('Error starting module!', ID, module);
			}
		}

		// if we have stored any syncronous modules, start them
		function defer(){
			_.each(_defer, function(ID){
				start(ID);
			});				
		}

		// stop a module
		function stop(ID){
			var module = pick(ID);
			if (module){
				if (module.instance !== undefined){
					if (module.config.isStarted === true){
						module.instance.stop();
					}	
				}
			} else {
				throw new Error('Error stopping module!', ID, module);
			}
		}

		function startAll(){}

		function stopAll(){}

		// register module object in module list
		function register(module){
			_trace.log('Wax_Core::register', module);
			_modules.push(module);	
		}

		function unregister(module){}

		// Helpers ////////////////////////////////////////////////////////////

		// get module status
		function status(ID){
			var module = pick(ID);
			return module.config;
		}

		// find module node
		function pick(ID){
			return _.find(_modules, function(obj){
				return obj.ID == ID;			
			});
		}

		// Public /////////////////////////////////////////////////////////////
		return {
			init 		: init,
			boot 		: boot,
			start 		: start,
			stop 		: stop,
			startAll 	: startAll,
			stopAll		: stopAll,
			status 		: status
		}

	}());

	// Export /////////////////////////////////////////////////////////////////
	return Wax_Core;

});