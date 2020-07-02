require('dotenv').config();
const USERNAME = process.env.BASIC_AUTH_USER
const PASSWORD = process.env.BASIC_AUTH_PASS

const functions = require('firebase-functions');
const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()

app.use(basicAuth(USERNAME, PASSWORD))
app.use(express.static(__dirname + '/dist/'))
exports.firebaseBasicAuth = functions.https.onRequest(app)
