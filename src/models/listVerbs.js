const { Schema, model } = require('mongoose');

const listVerbsDB = new Schema ({
   id: {
      type: Number,
      // required: true
   },
   type: {
      type: String,
      // required: true
   },
   simpleForm: {
      type: String,
      // required: true
   },
   thirdPerson: {
      type: String,
      // required: true
   },
   simplePast: {
      type: String,
      // required: true
   },
   pastParticiple: {
      type: String,
      // required: true
   },
   gerund: {
      type: String,
      // required: true
   },
   meaning: {
      type: String,
      // required: true
   },
}, {
   timestamps: true,
   versionKey: false
});

module.exports = model('verbs', listVerbsDB);