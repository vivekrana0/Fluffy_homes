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
    search,
    liked,
    favoritesIndex,
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
        // console.log("All Properties: ", properties)
        res.status(200).json(properties)
    } catch (error) {
        console.log("Inside index() > catch Block")
        res.status(400).json(error)
    }
}


async function create(req, res) {
    try{ 
            const obj = req.body
            obj.image = []
            files = req.files
            const parmas = files.map(file => {
                const imageName = randomImageName()
                const fileExtension = file.originalname.split('.')[1]
                const key = imageName + '.' + fileExtension
                const url = 'https://' + bucketName + '.' + S3_BASE_URL + key
                obj.image.push(url)

                     return {
                        Bucket: bucketName,
                        Key: key,
                        Body: file.buffer,
                        ContentType: file.mimetype,
                    }
            
                })

            await Promise.all(parmas.map((param) => s3.upload(param).promise()))
            
            User.findById(req.user._id, function(err, user){
                user.listProperty.push(obj)
                user.save()
                res.status(200).json('ok')
               })

    } catch(err){
        res.status(400).json(err)
    }
}

async function search(req, res) {
    const query = req.body.searchQuery.toLowerCase().replace(/\s/g, '')
    let properties = []
    let users = await User.find({})
    users.forEach(user => {
        user.listProperty.forEach(property => {
           const city = property.address.split(',')[1].toLowerCase().replace(/\s/g, '')
           console.log(city)
           console.log(req.body.searchQuery)
           if (city === req.body.searchQuery){
            properties.push(property)
           }
        })
    })
    res.status(200).json(properties)
}

function liked(req, res) {
    User.findById(req.user._id, function(err, user){
        if (err) return "bad request"
        let array = -1
        user.favProperty.forEach(function(fav, index){
            // console.log('body id', req.body._id)
            // console.log('fav id', fav._id)
            if(fav.address === req.body.address){
                array = index
            }
        })
        if (array > -1){
            user.favProperty.splice(array, 1)
            user.save()
            res.status(200).json('remove')
        }else{
            user.favProperty.push(req.body)
            user.save()
            res.status(200).json('add')
        }
    })
}

function favoritesIndex(req, res) {
    User.findById(req.user._id, function(err, user){
        if(err) return "bad request"
        let favProperties = user.favProperty
        res.status(200).json(favProperties)
    })
}