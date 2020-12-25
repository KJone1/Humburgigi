const auth = require('./auth/auth')
const review = require('./review/review')

module.exports.init = (app) => {
    app.use('/auth',auth)
    app.use('/review',review)
}