import Ember from 'ember';

export default Ember.Component.extend({  
    remaining: Ember.computed('tasks.@each.complete', function() {
        let tasks = this.get('tasks');
        return tasks.filterBy('complete', false).get('length');
    }),
   
     completed: Ember.computed('tasks.@each.complete', function() {
        var tasks = this.get('tasks');
        return tasks.filterBy('complete', true).get('length');
    }),

     all:Ember.computed.alias('tasks.length'),



  

    hasCompleted: Ember.computed('completed', function() {
        return this.get('completed') > 0;
    }),

    actions: {
        clearCompleted() {
            let completed = this.get('tasks').filterBy('complete', true);
            completed.forEach((task) => {
                this.sendAction('deleteTask', task);
            });
        }
    }
});