var admin = require('firebase-admin')

var serviceAccount = require('../../../dotvotes-39ccb-firebase-adminsdk-xt35c-6ad3172f82.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  // credential: admin.credential.cert({
  //   project_id: process.env.FB_PROJECT_ID,
  //   private_key: process.env.FIREBASE_PRIVATE_KEY,
  //   client_email: process.env.FIREBASE_CLIENT_EMAIL
  // })
  // credential: admin.credential.applicationDefault()
  // credential: admin.credential.cert()
})

module.exports = admin
