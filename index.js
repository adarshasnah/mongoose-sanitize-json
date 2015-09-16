var mongoose = require('mongoose');

module.exports = function (schema) {
    var toJSON = schema.methods.toJSON || mongoose.Document.prototype.toJSON;

    schema.set('toJSON', {
        virtuals: true
    });

    schema.methods.toJSON = function () {
        var json = toJSON.apply(this, arguments);

        delete json._id;
        delete json.__t;
        delete json.__v;

        return json;
    };
};