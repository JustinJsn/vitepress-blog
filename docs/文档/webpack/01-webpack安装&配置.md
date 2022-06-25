# 新手上路

## 安装初始化

```
pnpm init

pnpm add webpack webpack-cli --save-dev
```

## 使用

webpack 默认会将根目录下的 `src/index.js` 作为入口文件，打包输出后的文件默认放在项目根目录下的 `dist/` 文件中

```shell
npx webpack
```

## 配置文件

```javascript
// webpack.config.js
module.exports = {
  entry: "", // 项目入口文件路径
  output: {
    filename: "", // 打包后的文件名称
    path: "", // 打包后的文件存储位置
  },
};
```
