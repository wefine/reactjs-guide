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