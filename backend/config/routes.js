const express = require('express')
const auth = require('./auth')

module.exports = function(server) {
    // rotas abertas
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/auth/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    // rotas do service (protegidas)
    const protectedApi = express.Router()
    protectedApi.use(auth)
    server.use('/api', protectedApi)

    const BillingCycleService = require('../api/billingCycle/billingCycleService')
    BillingCycleService.register(protectedApi, '/billingCycles')
}