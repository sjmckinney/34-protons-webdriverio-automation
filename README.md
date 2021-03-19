### Useful config and CLI arguments

#### Run tests

```npx wdio wdio.conf.js```

or, having set the following in ```package.json```

```js
  "scripts": {
    "test": "npx wdio wdio.conf.js"
  }
```

```npm test```

#### Run single spec or specs that match a pattern

```
npm test -- --spec ./test/specs/example.e2e.js
```

```
npm test -- --spec ./test/specs/*.e2e.js
```

#### Upgrade Chromedriver and Geckodriver binaries

```
npm install chromedriver --chromedriver_version=LATEST
```
