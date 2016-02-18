function Employee (name, age, gender, daySalary) {
    Person.call(this, name, age, gender);

    var _daySalary = daySalary;

    this.getDaySalary = function () {
        return _daySalary;
    }

    this.setDaySalary = function (salary) {
        _daySalary = salary;
    }
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.calculateOvertime = function(hours) {
    if (this.getAge() < 18) {
        return 'Underaged!';
    } else  {
        var oneHourOvertime = (this._daySalary/8)*1.5;
        var overtime = oneHourOvertime * hours;
        return overtime;
    }
}

Employee.prototype.getEmployeeInfo = function () {
    var personInfo = Person.prototype.getInfo.call(this);
    return personInfo + ' My day salary is ' + this.getDaySalary() + '$.';
}