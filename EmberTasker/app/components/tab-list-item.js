import Ember from 'ember';

export default Ember.Component.extend({
	
	tagName:'li',
	attributeBindings: ['data-content'],

	click(){

		this.$().addClass('tab-current');
		this.$().siblings().removeClass('tab-current');
		var content=this.get('type');
		this.sendAction('handleTab',content);

	}

});
