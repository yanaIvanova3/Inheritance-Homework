/**
 * Created by Yana on 2/18/2016.
 */
function Person (name, age, gender) {
    var _name = name;
    var _age = age;
    var _gender = gender;

    this.getName = function() {
        return _name;
    }

    this.setName = function(name) {
        _name = name;
    }

    this.getAge = function() {
        return _age;
    }

    this.setAge = function(age) {
        _age = age;
    }

    this.getGender = function() {
        return _gender;
    }

    this.setGender = function (gender) {
        _gender = gender;
    }
}

Person.prototype.getInfo = function() {
    return 'Hi my name is ' + this.getName() + ', I am ' + this.getAge() +  ' years old and I am a ' + this.getGender() + ' in case you haven`t noticed!';
}