# order-app-front-end

> A Vue.js project
> 相關markdown語法教學 [手冊](https://guides.github.com/features/mastering-markdown/)

## Build Setup

### Vue init 的設定檔參考

``` bash
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes # 可選擇 No
? Pick an ESLint preset Airbnb.     # 選擇 No，此項目則跳過
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
```

### 建置專案

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

``` bash
# install vue-axios
npm install --save axios vue-axios
```

For a detailed explanation on how things work, check out the [guide](https://www.npmjs.com/package/vue-axios).

## 安裝bootstrap

``` bash
# 如果不小心用到新的版本可以用下列指令移除
npm uninstall bootstrap node-sass sass-loader

# 安裝bootstrap本體 因為版本比較舊
npm install bootstrap@4 node-sass@4 sass-loader@7
```

## 要在router轉址前把token和到期日傳進去

### 解決新版本無法使用登入問題

``` javascript
const token = response.data.token;
const expired = response.data.expired;
console.log(token, expired);
document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
//轉址之前
vm.$router.push('/admin/products');     
```
