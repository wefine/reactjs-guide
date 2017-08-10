# react intl inbox

## install
```bash
create-react-app intl-inbox
cd intl-inbox
yarn add react-intl  
yarn add -D babel-plugin-react-intl

```

## .babelrc
```json
{
  "presets": [
    "es2015",
    "react"
  ],
  "plugins": [
    "transform-object-rest-spread",
    "transform-runtime",
    [
      "react-intl",
      {
        "messagesDir": "./build/messages",
        "enforceDescriptions": false
      }
    ]
  ],
  "env": {
    "development": {
      "presets": [
        "react-hmre"
      ]
    }
  }
}
```

## scss
```bash
yarn add node-sass-chokidar npm-run-all

```
package.json
```json
{
  "scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```
