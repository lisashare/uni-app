
[网易云音乐API](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi)

https://github.com/qqlcx5/uniapp/blob/master/components/header.vue

通用技术栈：vue的语法、微信小程序的api、内嵌mpvue

开放生态、组件更丰富：

1. 支持通过npm安装第三方包
2. 支持微信小程序自定义组件及SDK
3. 兼容mpvue组件及项目
4. App端支持和原生混合编码
5. DCloud将发布插件市场

-------

## DCloud实战内容

网络请求、模板语法、打开页面、页面传参

## 列表到详情接口

### 列表
地址：https://unidemo.dcloud.net.cn/api/news
- 返回数据格式
- id 新闻id 如：72980
- title 标题
- created_at 创建时间
- author_avatar 图标

### 详情

地址：https://unidemo.dcloud.net.cn/api/news/36kr/ + id (id为新闻id，上个页面传过来的)
使用 rich-text 【富文本组件】来展示新闻内容
<rich-text class="richText" :nodes="strings"></rich-text> 

-------

非H5端暂不支持在自定义组件上使用 Class 与 Style 绑定

uni-app input 回车搜索写法
```
<input confirm-type="search" @confirm="search()">
```
