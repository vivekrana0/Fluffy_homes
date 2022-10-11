const User = require('../models/User'); 

module.exports = {
    create,
}

function create(req, res) {
    console.log('bodyyyyyyyyyyyyyyyyyy', req.body)
        //  User.findById(req.user._id, function(err, user){
        //     user.listProperty.push(req.body)
        //     user.save()
        //     res.status(200).json('ok')
        // })
}