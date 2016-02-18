/**
 * Created by Yana on 2/18/2016.
 */
function AllWork () {
    var tasks = [];
    var freePlacesForTasks = 10;
    var currentUnassignedTask = 0;
}

AllWork.prototype.addTask = function (Task) {
    if (this.freePlacesForTasks != 0) {
        this.tasks.push(Task);
        this.freePlacesForTasks--;
        this.tasks.unshift(Task);
    }
}

AllWork.prototype.getNextTask = function() {
    this.currentUnsignedTask = this.tasks.pop();
    this.freePlacesForTasks++;
    return this.currentUnassignedTask;
}

AllWork.prototype.isAllWorkDone = function() {
    if (this.tasks.length = 0) {
        return true;
    }

    return false;
}