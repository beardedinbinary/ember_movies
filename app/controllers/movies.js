// movies.js

import Ember from "ember";

var MoviesController = Ember.ArrayController.extend({
	
	actions: {
		sortBy: function(property) {
		  if ((this.get('isSorted')) && (this.get('sortProperties')[0] === property)) {
	        this.toggleProperty('sortAscending');
	      } else {
		        this.set('sortProperties', [property]);
		        this.set('sortAscending', true);
	      }
		}
	}
});

export default MoviesController;