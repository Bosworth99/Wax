
///////////////////////////////////////////////////////////////////////////////
//
//  _|_|_|      _|_|      _|_|
//  _|    _|  _|    _|  _|    _|
//  _|_|_|      _|_|_|    _|_|_|
//  _|    _|        _|        _|
//  _|_|_|    _|_|_|    _|_|_|
//
//  @package    : Wax
//  @author     : josh@joshbosworth.com
//  @comment    : 
//     - define dependancies
//     - initialize application
//
//  @sources    :  
//     http://requirejs.org
//     http://underscorejs.org
//     http://jquery.com
//     http://thejacklawson.com/Mediator.js
//     http://ejohn.org/blog/simple-javascript-inheritance
//     http://addyosmani.com/largescalejavascript
//     http://www.youtube.com/watch?v=vXjVFPosQHw
//
///////////////////////////////////////////////////////////////////////////////

(function() {

    if (window.jQuery) {
        define('jquery', [], function () {
            return window.jQuery;
        });
    } else {
        require.config({
            paths: {
                jquery:     'http://code.jquery.com/jquery-latest.min'
            },
            shim: {
                jquery:     { exports: '$' }
            }
        });
    }

    if (window._) {
        define('underscore', [], function () {
            return window._;
        });
    } else {
        require.config({
            paths: {
                underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min'
            },
            shim: {
                underscore: { exports: '_' }
            }
        });
    }

    if (window.Nexus) {
        define('nexus', [], function(){
            return window.Nexus;
        });
    }

    require.config({
        paths   : {
            'class'         : 'libs/class/Class',
            'mediator-js'   : 'libs/mediator/mediator.min',
            'text'          : 'libs/require/text',
            'domReady'      : 'libs/require/domReady'
        },
        shim    : {
            "class"    : {
                exports: "Class"
            }
        },
        urlArgs: "wax=" + (new Date()).getTime()
    });

    define(function(require){

        // @imports
        var Wax_App         = require('Wax/App');
        var domReady        = require('domReady');

        domReady(function(){
            new Wax_App();
        });

    });

})();