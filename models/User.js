const mongoose = require("mongoose");

// Property Model
var propertySchema = new mongoose.Schema(
  {
    address: String,
    moveInDate: Date,
    bedrooms: Number,
    bathrooms: Number,
    utility: Boolean,
    furnish: Boolean,
    parking: Number,
    rent: Number,
    image: String,
  },
  {
    timestamps: true,
  }
);

// User Model with property Schema referenced
var userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true
        },
        password: {
            type: String,
            trim: true,
            minLength: 5,
            required: true
        },
        listProperty: [propertySchema],
        favProperty: [propertySchema],
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)
