var should = require('should');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var Schema = mongoose.Schema;

var sanitize = require('../lib');

describe('Testing...', function () {

    mockgoose(mongoose);

    var personSchema = new Schema({
        name: String,
        age: Number
    });

    personSchema.plugin(sanitize);

    var Person = mongoose.model('Person', personSchema);


    it('schema should have option toJSON{virtuals:true}', function () {

        personSchema.options.should.have.properties('toJSON');
        personSchema.options.toJSON.should.have.properties('virtuals');
        personSchema.options.toJSON.virtuals.should.be.true();

    });

    it('model should/not contain properties when toJSON() is called', function () {

        var person = new Person({
            name: "Adarsh Hasnah",
            age: 30
        });
        person.save();

        var result = person.toJSON();

        result.should.have.properties('id');
        result.should.not.have.properties('_id');
        result.should.not.have.properties('__v');
        result.should.not.have.properties('__t');

    });

});