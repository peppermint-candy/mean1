var mongoose = require('mongoose')
var Poll = mongoose.model('Poll')

module.exports = {
  showPoll: function (req,res) {
    console.log("showing all polls")
    Poll.find({}, function(err, pollData) {
      if (err) res.json({status: false, pollData: 'Poll not found'})
      else{
        res.json({status: true, pollData: pollData})
      }
    })
  },

  createPoll: function (req,res) {
    console.log('creating poll')
    var poll = new Poll(req.body)
    poll.save( function (err) {
      if (err) res.json({status: false, errors: err})
      else{
        console.log('successfully creating a new poll')
        res.json({status: true})
      }
    })
  }
  // register: function( req,res) {
  //   // res.json({ status: true, session: session})
  //   console.log("In register",  req.body)
  //   var user = new User(req.body)
  //   user.save( function(err) {
  //     if (err) {
  //       console.log("ERRRRRRRRRRRRRRRRRRr", err)
  //       res.json({status: false, errors: err })
  //     } else{
  //       console.log('hey new user')
  //       req.session['userInfo'] = {
  //         id: user._id,
  //         name: user.name
  //       }
  //
  //       res.json({status:true, userInfo: req.session['userInfo'] })
  //     }
  //   })
  // },
  //
  // login: function( req,res) {
  //   User.findOne({name: req.body.name}, function(err, user) {
  //     if(err) res.json({status:false, errors:err})
  //     else if(user) {
  //       // if(user.validPassword(req.body.password)) {
  //       req.session['userInfo'] = {
  //         id: user._id,
  //         name: user.name
  //         }
  //       res.json({status:true, userInfo: req.session['userInfo']})
  //       // }else{
  //       //   res.json({status: false, errors: 'User not found '})
  //       // }
  //     }else{
  //       res.json({status: false, errors: 'User not found '})
  //     }
  //   })
  // },
  //
  // logout: function (req,res) {
  //   req.session.destroy(function (err) {
  //     if (err) res.json({status: false, errors: err})
  //     res.json({status: true})
  //   })
  // },
  //
  // session: function (req,res) {
  //   console.log('Hit session route')
  //   if (req.session['userInfo']) {
  //     res.json({status: true, userInfo: req.session['userInfo']})
  //   }else{
  //     res.json({status: false, userInfo: null })
  //   }
  // }


}
