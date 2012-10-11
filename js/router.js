define([ 'jquery', 'underscore', 'backbone', 'views/home'], function($, _, Backbone, homeView) {
	var AppRouter = Backbone.Router.extend({
		routes : {
			// Define some URL routes
			'home' : 'showHome',

			// Default
			'*actions' : 'showHome'
		},

		showHome : function() {
			homeView.render();
		},
		
		defaultAction:function(){
		}

	});

	//Initializing Router 
	var initialize = function(){
	    var app_router = new AppRouter;
	    Backbone.history.start();
	  };
	  return {
	    initialize: initialize
	  };
	  
	  
	return AppRouter;
});