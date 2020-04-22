const express = require('express');
const open = require('open');
const generateNonce = require('nonce-fast')();
const path = require('path');

const app = express();

const config = {
    port: 3000,
    callbackRoute: '/',
    auth0Domain: 'tackle-dev.auth0.com',
    clientID: 'GELulnhrGpwWrvSpCWC4bP0cTZJUVpPk',
    scope: 'openid profile email',
    audience: 'https://upstream-api.tackle.io',
    redirectUri: 'http://localhost:3000',
    connection: 'google-oauth2',
    responseType: 'token id_token'
};

const {
    port,
    callbackRoute
} = config;

const params = new URLSearchParams({
    client_id: config.clientID,
    response_type: config.responseType,
    redirect_uri: config.redirectUri,
    scope: config.scope,
    audience: config.audience,
    connection: config.connection,
    nonce: generateNonce()
  });

const authRedirect = `https://${config.auth0Domain}/authorize?${params}`;

app.get(callbackRoute, (req, res) => res.sendFile(path.join(__dirname + '/jwtPage/index.html')));
app.post('/kill', (req, res) => res.send() && server.close());

const server = app.listen(port, () => {
    console.log(`server started on port ${port}`)
});

open(authRedirect);
