import Ember from 'ember';

export default Ember.Component.extend({
	time_spent: '',
	description: '',
	tagName:'section',
	classNameBindings:['task-details-container'],
	showView: true,
	actions: {
		saveStat(){
			this.sendAction('saveStat', this.get('task'), {
				timeSpent: this.get('time_spent'),
				description: this.get('description')
			});
			this.set('showView',true);
			this.$().find('.tab-current').removeClass('tab-current').siblings().addClass('tab-current');
			this.set('time_spent','');
			this.set('description','');
		},
		handleTab(type){
				switch(type){
					case 'view_task': 
					this.set('showView',true);
					break;
					case 'add_task': 
					this.set('showView',false);
					break;
				}
		},

	}
});
