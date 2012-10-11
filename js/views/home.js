define([
  'jquery',
  'underscore',
  'backbone',
  'text!../../tpl/home.html' 
], function($, _, Backbone, mainHomeTemplate){

  var mainHomeView = Backbone.View.extend({
    el: $(".container-fluid"),
    render: function(){
      this.el.html(mainHomeTemplate);
    }
  });
  return new mainHomeView;
});
