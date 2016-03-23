# WaxJS Framework

This is an ad-hoc framework to manage a multi-page app, developed after the fact. The N8 Site Builder didn't have any kind of modular utility (like Require) in place, useing an object literal namespace, instead. 

The notion here, was that the admin section would get wired up for routes, and I'd be able to drop all my existing code into require modules. I had done a fair amount of research on the subject, and this was put together from the work of Addy Osmani and Nicholas Zakas. It provides for a simple module loader, and an factory for instancing those modules from a config.

I stopped work on the N8 project prior to getting this into place, and refactoring the app. So here it sits. 
