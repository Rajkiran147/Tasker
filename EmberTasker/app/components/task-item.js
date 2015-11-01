import Ember from 'ember';

export default Ember.Component.extend({  
    tagName: 'li',
    classNameBindings: ['editing','expand'],
    editing: false,
    expand:false,

    actions: {
        		editTask() {

			                     this.toggleProperty('editing');
                                 
                       		},

        		submitTask() {

				     let task = this.get('task');
				     
				      if (task.get('title') === "") {

				            this.sendAction('deleteTask', task);

				        } 

				        else {

									this.sendAction('updateTask', this.get('task'));
				        }

				        this.set('editing', false);
		},

        	deleteTask() {

	        	let task = this.get('task');
	        	this.sendAction('deleteTask', task);
    	},

    		updateTask(){
                
    			let task = this.get('task');
    			task.toggleProperty('complete');
				this.sendAction('updateTask', task);
    	},

    		expandTask(){

    				this.toggleProperty('expand');

    	},
        saveStat(task,stat){
            this.sendAction('saveStat', task,stat);
        }
    
    }
});