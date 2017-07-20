## Spring-Boot-Dva

### commands
```bash
yarn global add dva-cli

cd src/main
dva new frontend --no-install
cd frontend

yarn install
yarn add antd 
yarn add -D babel-plugin-import
```

### config .roadhogrc
```json
{
  "entry": "src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime"
      ]
    }
  },
  "proxy": {
    "/api": {
      "target": "http://localhost:8080/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "/api" }
    }
  }
}

```