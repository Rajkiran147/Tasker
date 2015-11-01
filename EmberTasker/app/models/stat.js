import DS from 'ember-data';

export default DS.Model.extend({

	entryAt:DS.attr('date'),
	timeSpent:DS.attr('number'),
	description:DS.attr('string'),
	task:DS.belongsTo('task'),
	readableDate: Ember.computed("entryAt",function() {
    	return new Date(this.get('entryAt')).toDateString()
  	})
  
});
