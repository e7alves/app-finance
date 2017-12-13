const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The "name" is required']},
    value: {
        type: Number, 
        min: [0, 'The "value" must be greater than 0'],
        required: [true, 'The "value" is required.']},
})

const debtSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'The "name" is required.']},
    value: {
        type: Number, 
        min: [0, 'The "value" must be greater than 0'], 
        required: [true, 'The "value" is required.']},
    status: {
        type: String, required: false, 
        uppercase: true,
        enum: ['PAID', 'PENDING', 'SCHEDULED']}
})

const billingCycleSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'The "name" is required.']},
    month: {
        type: Number, 
        min: [1, 'The "month" must be greater than 0'], 
        max: [12, 'The "month" must be less than 13'], 
        required: [true, 'The "month" is required.']},
    year: {
        type: Number, 
        min: [0, 'The "year" must be greater than 0'], 
        max: [4000, 'The "year" must be less than 4000'], 
        required: [true, 'The "year" is required.']},
    credits: [creditSchema],
    debts: [debtSchema],
})

module.exports = restful.model('BillingCycle', billingCycleSchema)