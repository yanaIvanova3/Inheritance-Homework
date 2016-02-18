/**
 * Created by Yana on 2/18/2016.
 */
function Student (name, age, gender, score) {
    Person.call(this, name, age, gender);

    var _score = score;

    this.setScore = function (score) {
        _score = score;
    }

    this.getScore = function () {
        return _score;
    }
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.getStudentInfo = function() {
    var personInfo = Person.prototype.getInfo.call(this);
    return personInfo + " I`m a student and my average score is " + this.getScore() + '.';
}