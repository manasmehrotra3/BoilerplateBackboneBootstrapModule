// configuring require js
// all application paths are defined here to find tmplts or js files by require.js

require.config({
	paths: {
	    jquery: 'libs/jquery/jquery-min',
	    underscore: 'libs/underscore/underscore-min',
	    backbone: 'libs/backbone/backbone-optamd3-min',
	    text: 'libs/require/text',
	    templates: '../tpl'
	  }
});

// Maintaining dependency 
//require([dependency array],callback function on success)

require(
	[
	 // app.js will be called and loaded and will be passed to App() function as an argument
	 'app'
	],
	function (App)
	{
		
	}
);