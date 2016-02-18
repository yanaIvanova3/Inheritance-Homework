/**
 * Created by Yana on 2/18/2016.
 */
function Task(name, hours) {
    var taskName = name;
    var workingHours = hours;

    this.getTaskName = function() {
        return taskName;
    }

    this.setTaskName = function(name){
        taskName =  name;
    }

    this.getWorkingHours = function() {
        return workingHours;
    }

    this.setWorkingHours = function(hours) {
        workingHours = hours;
    }
}