## Spring-Boot-Dva

### Step 1. 安装 dva-cli 并创建应用
```bash
yarn global add dva-cli

cd src/main
dva new frontend --no-install
cd frontend

yarn install
yarn add antd 
yarn add -D babel-plugin-import
```

### Step 2. 修改 .roadhogrc，增加antd和proxy配置
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

### 增加路由
注意：当前dva版本0.7.8里面由于jscodeshift 的变化存在bug，需要手动修改文件：
1. dva-ast/lib/collections/Entry.js
2. dva-ast/lib/collections/RouteComponent.js
3. dva-ast/lib/collections/Router.js

将上面文件中的 'jscodeshift/dist/Collection'; 改为 'jscodeshift/src/Collection'，否则创建路由和Model等时会报错。
> TypeError: root.findRouters(...).getRouterInfo is not a function
