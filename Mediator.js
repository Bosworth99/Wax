///////////////////////////////////////////////////////////////////////////
//
//  @class 		: Wax_Mediator
// 	@Comments 	: mediator singleton
//		
///////////////////////////////////////////////////////////////////////////

define(function(require){

	// @imports
    var Mediator 	= require('mediator-js');

    // @private
	var _mediator 	= new Mediator();

	return (_mediator)? _mediator : new Mediator();

});

/* ALT - 

Dont know if the facade should extend the mediator?
I want buttons potentially publishing notice, 
and not have to run it up through to the module facade


//	Mediator.js instanced and extended, to provide Facade Mediator methods

var Mediator 	= require('mediator-js');
var Class 		= require('class');

var Wax_Mediator = Class.extend(function(){
	return new Mediator();
}());

return Wax_Mediator;

*/