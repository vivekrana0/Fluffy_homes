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
    create,
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