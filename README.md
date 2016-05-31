# node-kf5-api
---

forked from [holyrain/node-kf5-api](https://github.com/holyrain/node-kf5-api)

KF5 API client

## Install

```bash
npm install yo-kf5
```

## Example

```js
var kf5 = require('yo-kf5');
var kf5client = kf5.client({
    username:  'username',
    token:     'token',
    host: 'https://subdomain.kf5.com/apiv2'
});

kf5client.requests.list(function (err, req, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
```
Take a look in the `examples` folder for more examples.
