# auth0-sso-jwt-fetcher
A CLI tool that, given a config, facilitates the fetching of a JWT via an Auth0 SSO transaction.

### Assumptions
1) you are trying to get a JWT for an Auth0 account with a social connection
2) you have listed `localhost:3000` (or whatever local port your configure below) as a valid redirect url

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
