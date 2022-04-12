/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-12 15:20:20
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-04-12 15:23:00
 */
import { createVNode, render } from 'vue';
import loadingViewerVue from './loadingViewerVue.vue'
//凡是vue插件一定有这个方法。目的是use使用，才能被use引用
let instance;
let optionObj={};
let install = function (Vue,options) {
    //存储好设置的参数
    optionObj = {
        ...options
    }
    //挂载在原型上  使用的时候this.$toast
    Vue.config.globalProperties.$showLoading = function (domId) {
        //加载在设置的div上
        //Vue.extend可以继承这个组件，然后得到一个新的组件
        // const ToastController = Vue.extend(loadingViewerVue);   //vue3.0 已经移除extend 方法
        //创建一个新的实例，实例挂载在一个空的div
        // instance = createVNode(loadingViewerVue,{}).$mount(document.createElement("div"));
        instance = document.createElement("div");
        let options = {
            visible:true,
            ...optionObj
        }
        const vm = createVNode(
            loadingViewerVue,
            options
        )
        render(vm,instance);
        if(domId){
            const domIdDiv = document.getElementById(domId);
            domIdDiv.appendChild(instance); //将div添加到body中
            return;
        }
        document.body.appendChild(instance); //将div添加到body中
    }
    Vue.config.globalProperties.$hideLoading = function(domId){
        if(instance){
            instance.visible = false;
            setTimeout(()=>{
                if(domId){
                    const domIdDiv = document.getElementById(domId);
                    domIdDiv.removeChild(instance);
                    return;
                }
                document.body.removeChild(instance)
            },500)
        }
    }
}
export default install