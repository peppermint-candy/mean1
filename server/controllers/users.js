var mongoose = require('mongoose')
var User = mongoose.model('User')


module.exports = {
  register: function( req,res) {
    // res.json({ status: true, session: session})
    console.log("In register",  req.body)
    var user = new User(req.body)
    user.save( function(err) {
      if (err) {
        console.log("ERRRRRRRRRRRRRRRRRRr", err)
        res.json({status: false, errors: err })
      } else{
        console.log('hey new user')
        req.session['userInfo'] = {
          id: user._id,
          name: user.name
        }

        res.json({status:true, userInfo: req.session['userInfo'] })
      }
    })
  },

  login: function( req,res) {
    User.findOne({name: req.body.name}, function(err, user) {
      if(err) res.json({status:false, errors:err})
      else if(user) {
        // if(user.validPassword(req.body.password)) {
        req.session['userInfo'] = {
          id: user._id,
          name: user.name
          }
        res.json({status:true, userInfo: req.session['userInfo']})
        // }else{
        //   res.json({status: false, errors: 'User not found '})
        // }
      }else{
        res.json({status: false, errors: 'User not found '})
      }
    })
  },

  logout: function (req,res) {
    req.session.destroy(function (err) {
      if (err) res.json({status: false, errors: err})
      res.json({status: true})
    })
  },

  session: function (req,res) {
    console.log('Hit session route')
    if (req.session['userInfo']) {
      res.json({status: true, userInfo: req.session['userInfo']})
    }else{
      res.json({status: false, userInfo: null })
    }
  }

}
