/**
 * Created by Yana on 2/18/2016.
 */
function Employee(name) {
    var employeeName = name;
    var currentTask = 0;
    var hoursLeft = 8;
    var allWork;

    this.getEmployeeName = function() {
        return employeeName;
    }

    this.getCurrentTask = function () {
        return currentTask;
    }

    this.setCurrentTask = function(task) {
        currentTask = task;
    }

    this.getHoursLeft = function() {
        return hoursLeft;
    }

    this.setHoursLeft = function(hours) {
        hoursLeft = hours;
    }

    this.getAllWork = function(){
        return this.allWork;
    }

    this.setAllWork = function(workToBeDone){
        this.allWork = workToBeDone;
    }


}

Employee.prototype.startWorkingDay = function () {
    this.hoursLeft = 8;
}

Employee.prototype.work = function () {
    this.currentTask
}