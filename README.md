# auth0-sso-jwt-fetcher
A CLI tool that, given a config, facilitates the fetching of a JWT via an Auth0 SSO transaction.

### Installation
`npm i -g auth0-sso-jwt-fetcher`

### Usage
`asjf ./path/to/config.json`

### Configs
Example (all fields are required):
```
{
    "port": 3000,
    "callbackRoute": "/",
    "auth0Domain": "domain.auth0.com",
    "clientID": "client_id",
    "scope": "scope",
    "audience": "audience",
    "redirectUri": "http://localhost:3000",
    "connection": "connection",
    "responseType": "response types"
}
```
