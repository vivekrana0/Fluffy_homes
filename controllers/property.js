const aws = require("aws-sdk");
const User = require("../models/User");
const crypto = require("crypto");

// Accessing all .env keys
const bucketName = process.env.BUCKET;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS;

// Url to Amazon s3 bucket
const S3_BASE_URL = "s3.ca-central-1.amazonaws.com/";

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3 = new aws.S3({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

module.exports = {
  index,
  create,
  delete: deleteListing,
  search,
  liked,
  favoritesIndex,
  myListing,
};

// Get All Properties
async function index(req, res) {
  try {
    let properties = [];
    let users = await User.find({});
    users.forEach((user) => {
      user.listProperty.forEach((property) => {
        properties.push(property);
      });
    });
    res.status(200).json(properties);
  } catch (error) {
    res.status(400).json(error);
  }
}

// Create Listing
async function create(req, res) {
  try {
    const obj = req.body;
    obj.image = [];
    files = req.files;
    const parmas = files.map((file) => {
      const imageName = randomImageName();
      const fileExtension = file.originalname.split(".")[1];
      const key = imageName + "." + fileExtension;
      const url = "https://" + bucketName + "." + S3_BASE_URL + key;
      obj.image.push(url);
      return {
        Bucket: bucketName,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
    });
    await Promise.all(parmas.map((param) => s3.upload(param).promise()));

    User.findById(req.user._id, function (err, user) {
      user.listProperty.push(obj);
      user.save();
      res.status(200).json("ok");
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

// Delete Listing
function deleteListing(req, res) {
    User.findById(req.user._id, function (err, user) {
      if (err) return "bad request";
      let idx = -1;
      user.listProperty.forEach(function (fav, index) {
        if (fav.address === req.body.address) {
          idx = index;
        }
      });
      if (idx >= 0) {
        user.listProperty.splice(idx, 1);
        user.save();
        res.status(200).json("remove");
      } else {
        res.status(400).json("not removed");
      }
    });
  }

// Search for the listing based on city name
async function search(req, res) {
  const query = req.body.searchQuery.toLowerCase().replace(/\s/g, "");
  let properties = [];
  let users = await User.find({});
  users.forEach((user) => {
    user.listProperty.forEach((property) => {
      const city = property.address
        .split(",")[1]
        .toLowerCase()
        .replace(/\s/g, "");
      if (city === query) {
        properties.push(property);
      }
    });
  });
  res.status(200).json(properties);
}

// Add Listing to favorite list
function liked(req, res) {
  User.findById(req.user._id, function (err, user) {
    if (err) return "bad request";
    let array = -1;
    user.favProperty.forEach(function (fav, index) {
      if (fav.address === req.body.address) {
        array = index;
      }
    });
    if (array > -1) {
      user.favProperty.splice(array, 1);
      user.save();
      res.status(200).json("remove");
    } else {
      user.favProperty.push(req.body);
      user.save();
      res.status(200).json("add");
    }
  });
}

// Favorite Listings
function favoritesIndex(req, res) {
  User.findById(req.user._id, function (err, user) {
    if (err) return "bad request";
    let favProperties = user.favProperty;
    res.status(200).json(favProperties);
  });
}

// Listed Properties
function myListing(req, res) {
  User.findById(req.user._id, function (err, user) {
    if (err) return "Bad Request";
    let property = user.listProperty;
    res.status(200).json(property);
  });
}


