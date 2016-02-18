/**
 * Created by Yana on 2/18/2016.
 */
function AllWork () {
    var tasks = [];
    var freePlacesForTasks = 10;
    var currentUnassignedTask = 0;
}

AllWork.prototype.addTask = function (task) {
    this.tasks.push(task);
}

AllWork.prototype.getNextTask = function() {
    return this.tasks.shift();
}

AllWork.prototype.isAllWorkDone = function() {
    if (this.tasks.length = 0) {
        return true;
    }

    return false;
}