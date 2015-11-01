import DS from 'ember-data';

export default DS.Model.extend({

	title:DS.attr('string'),
	complete:DS.attr('boolean'),
	stats:DS.hasMany('stat'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date')
  
});
