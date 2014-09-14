import Ember from 'ember';

var Router = Ember.Router.extend({
  location: IndieENV.locationType
});

Router.map(function() {
	this.resource('movies', { path: '/'});
});

export default Router;
