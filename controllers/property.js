const aws = require('aws-sdk')
const User = require('../models/User')
const crypto = require('crypto')

const bucketName = process.env.BUCKET
const bucketRegion = process.env.BUCKET_REGION 
const accessKey= process.env.ACCESS_KEY
const secretAccessKey= process.env.SECRET_ACCESS

const S3_BASE_URL = 's3.ca-central-1.amazonaws.com/'

const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex') 

const s3 = new aws.S3({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey,
    },
    region: bucketRegion

})

module.exports = {
    index,
    create,
}

// Get All Properties
async function index(req, res) {
    // let properties = await User.find({listProperty})
    // console.log("Index To Get All Property: ", properties)
    // try{
    //     let properties = await User.find({listProperty})
    //     console.log("Index To Get All Property: ", properties)
    //     res.status(200).json(properties)
    // } catch(error) {
    //     console.log("Inside index() > catch Block")
    //     res.status(400).json(error)
    // }
    try {
        let properties = []
        let users = await User.find({})
        users.forEach(user => {
            user.listProperty.forEach(property => {
                properties.push(property) 
            })
        })
        console.log("All Properties: ", properties)
        res.status(200).json(properties)
    } catch (error) {
        console.log("Inside index() > catch Block")
        res.status(400).json(error)
    }
}


async function create(req, res) {
    try{
        req.file.buffer
        const imageName = randomImageName()
        const fileExtension = req.file.originalname.split('.')[1]
        const key = imageName + '.' + fileExtension
        const params = {
            Bucket: bucketName,
            Key: key,
            Body: req.file.buffer,
            ContentType: req.file.mimetype,
        }

        const url = 'https://' + bucketName + '.' + S3_BASE_URL + key
        req.body.image = url 

        s3.upload(params, (err) => {
            if(err) console.log(err)
            User.findById(req.user._id, function(err, user){
               user.listProperty.push(req.body)
               user.save()
               res.status(200).json('ok')
           })
        })
    } catch(err){
        res.status(400).json(err)
    }
}