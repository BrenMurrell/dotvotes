var admin = require('firebase-admin')

var serviceAccount = require('../../../dotvotes-39ccb-firebase-adminsdk-xt35c-6ad3172f82.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

module.exports = admin
