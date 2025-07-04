const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [4, 'Name must be at least 4 characters']
  },
  course: String,
  age: {
    type: Number,
    min: [1, 'Age must be at least 1'],
    max: [100, 'Age must be less than or equal to 100']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  }
});

module.exports = mongoose.model('Student', studentSchema);
