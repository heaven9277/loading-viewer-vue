<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-12 21:52:37
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-04-13 09:32:51
-->
# loading-viewer-vue
```
简易loading加载
```
## How to use for vue3.0
```
#import package
npm i loading-viewer-vue

#use(at your main.js)
import loadingViewerVue from 'loading-viewer-vue'
createApp(App).use(loadingViewerVue)

#api for this  api的使用方法
#show the loading
this.$showLoading();
#hide the loading
this.$hideLoading();

#api 你可以把它使用在你的任意div下，但是你的div的css必须设置为position:relative。(You can use it for any of your divs, but the CSS for your divs must be set to Position :relative)

#show the loading (domId)为你的父级div的id
this.$showLoading(domId)
#hide the loading
this.$hideLoading(domId)
#for example
html:
<div id="containers">
</div>
js:
this.$showLoading("containers");
this.$hideLoading("containers")
css:
#containers{
  width: 500px;
  height: 500px;
  position: relative;
}

# this loading has 8 modes(1-8);
createApp(App).use(loadingViewerVue,{mode:'1'})

#  you can use yourself loading by url ()
createApp(App).use(loadingViewerVue,{url:url:require('../src/assets/loading1.svg')});

# look at the mode

http://www.var6.cn/work/1/22/MD%E7%9A%84%E7%BC%96%E7%A8%8B%E4%BD%9C%E5%93%81
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
