# switch-address

## 安装
使用npm
```
$ npm install switch-address
```
## 例子
```
// 引入模块
import SwitchAddress from 'switch-address'

// 初始化对象
const switchAddress = new SwitchAddress({
  address: { // 加入环境--地址映射
    mock: 'http://mock.com',
    local: 'http://local.com',
    dev: 'http://dev.com',
    test: 'http://test.com',
    pre: 'http://pre.com',
    production: 'http://production.com',
  },
  default: process.env.REACT_APP_SECRET_API, // 指定当前web所在的部署环境
  exclude: 'production' // 指定switch-address模块无需出现的环境
  color: '#000' // 指定图标的颜色
})

// 返回切换的请求地址
axios.defaults.baseURL = switchAddress.address

// 返回切换的环境名称
if (switchAddress.env !== 'mock') {
  config.headers['X-TOKEN'] = Storage.getToken()
}
```
## switch-address API
##### new SwitchAddress(config)
```
new SwitchAddress({
  address: {
    mock: 'http://mock.com',
    local: 'http://local.com',
  }
})
```
##### 实例对象属性
switchAddress.env--切换的环境名称
```
const switchAddress = new SwitchAddress({
  address: {
    mock: 'http://mock.com',
  }
})
switchAddress.env
```
switchAddress.address--切换的环境请求地址
```
const switchAddress = new SwitchAddress({
  address: {
    mock: 'http://mock.com',
  }
})
switchAddress.address
```
## SwitchAddress Config
```
{
  // 环境和请求地址映射，必填
  address: {
    pre: 'http://pre.com',
    production: 'http://production.com',
  },
  // 当前web所在的部署环境,选填
  // 展示时环境名称后面会有特殊符号表示
  // 若exclude要起作用，此为必填
  default: 'production',
  // 模块无需出现的环境，选填
  // 和default配合使用
  // 允许字符串和字符串数组类型
  exclude: 'production',
  // 图标颜色，选填，默认#000
  color: '#000'
}
```