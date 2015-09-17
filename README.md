# mongoose-sanitize-json

[![npm version](https://badge.fury.io/js/mongoose-sanitize-json.svg)](http://badge.fury.io/js/mongoose-sanitize-json)

This plugin removes the following fields "_id, __v, __t" and published virtuals "id" when the document is converted to json.
(Note other virtual fields will also be published)

## Installation

```sh
$ npm install mongoose-sanitize-json
```

### Usage

```javascript
var mongoose = require('mongoose');
var sanitizeJSON = require('mongoose-sanitize-json');

var personSchema = mongoose.Schema({    
    name: String,
    age: Number    
});

personSchema.plugin(sanitizeJSON);

```
