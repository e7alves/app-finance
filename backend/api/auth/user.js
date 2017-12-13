const restful = require('node-restful')
const mongoose = restful.mongoose;

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true, min: 6, max: 12}
})

module.exports = restful.model('user', userSchema);