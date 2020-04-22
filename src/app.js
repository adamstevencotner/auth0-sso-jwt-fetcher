const express = require('express');
const open = require('open');
const generateNonce = require('nonce-fast')();
const path = require('path');

module.exports = (config) => {
  const app = express();
  
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
  
  app.get(config.callbackRoute, (req, res) => res.sendFile(path.join(__dirname + '/jwtPage/index.html')));
  app.post('/kill', (req, res) => res.send() && server.close());
  
  const server = app.listen(config.port, () => {
    console.log(`server started on port ${config.port}`);
  });
  
  open(authRedirect);
}
