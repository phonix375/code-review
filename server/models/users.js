const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
const Skill = require('./Skill') 
const bcrypt = require('bcrypt');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
          },
          email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
          },
          password: {
            type: String,
            required: true,
            minlength: 5
          },
          skills:[{
            type:Schema.Types.ObjectId,
            ref: 'Skill'
          }],
          rating:{
            type:Number,
            required: false,
            unique: false,
            default: 0
          },
          numberOfRates:{
            type:Number,
            required: false,
            unique: false,
            default: 0
          },
          balance:{
            type:Number,
            required: false,
            unique: false,
            default: 0
          }
    },

);

// const User = model('User', userSchema);

// module.exports = User

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;