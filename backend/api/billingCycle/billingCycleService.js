const BillingCycle = require('./billingCycle')
const _ = require('lodash')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', checkErrors).after('put', checkErrors)

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({errors: [error]})
        }
        res.json({value})
    })
})

BillingSummaryService = require('./billingSummaryService')
BillingCycle.route('summary', BillingSummaryService.getSummary)

function checkErrors(req, res, next) {
    const bundle = res.locals.bundle
    if (bundle.errors) {
        let errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } 
    else {
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors;
}

module.exports = BillingCycle