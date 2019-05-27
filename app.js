const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://cesar:123456a@ds019756.mlab.com:19756/nosqltest',{useNewUrlParser: true}
);

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstame: String,
    lastname: String,
    address: String
  });

  let Person = mongoose.model('Person', personSchema);
  let cesar = Person({
      firstame: 'cesar',
      lastname: 'magallon',
      address: 'colima'
  });

  cesar.save(function(err){
      if(err) throw err;

      console.log('person saved');
  })

  Person.find({}, (err, users)=>{
    if(err) throw err;
    console.log(users);
  });


