# xyview

> vue2的UI插件,适合vue-cli创建的项目. 安装需要git客户端

> 配置scss

    npm i node-sass --save-dev
    npm i sass-loader --save-dev

> 安装

    npm i crossgit/xyview -save

> 卸载

    rm -rf node_modules/xyview

> 引入与使用,在main.js加入

    import * as xy from 'xyview' 
    Vue.use(xy.install)
    
由于vue-cli的压缩引入es6的包不识别,需要更改`build>webpack.base.conf.js`的 `babel-loader`配置.

``` javascript
    {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('app'), resolve('test'),resolve('node_modules/xyview')]
    },
```
 > 更多查看src目录中的项目实例.
 
 请不要更改代码,提交的代码都不会通过.

 > 计划 进度:未开始->未完成示例->已完工

功能|大致完工时间|进度|说明
----|----|----|----
address|7.3-7.8|*未完成示例*|地址
badge|7.3-7.8|*未完成示例*|标记 
xyDivider|7.18|**已完成**|分割线
xyHeader|7.3-7.8|**已完成**|头,不如用mui的header
xyButtonTab\|xyButtonTabItem|7.16|**已完成**|按钮组
checker|7.3-7.8|*未完成示例*|多选
xyLoading|7.3-7.8|**已完成**|等待,固定在header下方的
panels|7.3-7.8|*未完成示例*
picker|7.3-7.8|未开始
popup|7.3-7.8|未开始
timeline|7.18|**已完成**|时间轴
xyPreview|7.3-7.8|**已完工**|图片打开大图
xyPrompt|7.3-7.8|**已完工**|一个提示条,左边分上下,右边居中
sticky|7.3-7.8|*未完成示例*|固定
xySwiper\|xySwiperItem|7.3-7.8|**已完工**|上下和左右滚动
xyTab\|xyTabItem|7.3-7.8|**已完工**|页签
upload|7.18|**已完工**|图片上传


> 参考
 
xxx