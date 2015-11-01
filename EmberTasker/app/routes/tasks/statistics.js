import Ember from 'ember';

export default Ember.Route.extend({
	model(){
			return this.store.filter('task', function(task) {
			var days = 7; // Days you want to subtract
			var now = new Date();
			var midnight = new Date(now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0);
			var sevenDays = midnight - (days * 24 * 60 * 60 * 1000);
			var createdAt = new Date(task.get('createdAt'))
			console.log(createdAt.getTime() +":"+ midnight.getTime() +"::::" + (createdAt.getTime() > sevenDays));
            return (createdAt.getTime() > sevenDays);
        });
	},
	renderTemplate(controller, model) {
        this.render('tasks.index', {
            model: model
        });
    }
});
