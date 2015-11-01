import Ember from 'ember';

export default Ember.Route.extend({

	model(){

		return this.store.findAll('task');

	},

	actions:{

		createTask(newTitle){

			this.store.createRecord('task',{

				title:newTitle,
				complete:false,
				createdAt: new Date()

			}).save();

		},

		updateTask(task){
			task.save();
		},

		deleteTask(task){
			task.destroyRecord();
		},
		saveStat(task,stat){
			let currentStat = this.store.createRecord('stat',{
				entryAt: new Date(),
				timeSpent: stat.timeSpent,
				description: stat.description,
				task :task
			});
			var _this = this;
			currentStat.save().then(function(){
					task.save()
			});
		}
	}



});
