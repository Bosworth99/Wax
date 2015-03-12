///////////////////////////////////////////////////////////////////////////
//
//  @class      : Wax_Config
//  @comment    : configuration
//
//  @param      : routes
//      define module requirements for routes
//      
///////////////////////////////////////////////////////////////////////////

define( function(){
    return {

        // seems reasonable
        version : 1.0,

        // activate trace?
        debug   : {enabled:false},
        
        // per route, request module and laod type
        routes  : {
            'default' : {
                'deps'      : [],
                'resources' : []
            },
            'help_support' : {
                'deps'      : ['help_support'], // unused
                'resources' : [
                    { id : 'help_support',  init : true,     async : true }
                ]
            }
        },

        // all modules and definition paths
        modules : [
            { id : 'help_support',  path : 'Wax/Page/HelpSupport/Main' }
        ],

        // yasee..
        PRIVATE : {
            author  : 'josh@joshbosworth.com',
            weather : 'a bit rainy',
            lunch   : 'Trader Joes Chicken Pesto Wrap. Just ok.'
        }
    }
});