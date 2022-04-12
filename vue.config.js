/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-12 15:40:50
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-04-12 17:43:33
 */
var path = require('path')
module.exports = {
    publicPath:'/dist/',
    outputDir:'dist',
    pages:{
        index:{
            entry:'./src/lib/index.js',
            output:{
                path:path.resolve(__dirname,'./dist'),
                publicPath:'/dist/',
                filename:'loading-viewer-vue.js',
                library:'loading-viewer-vue',
                libraryTarget:'umd',
                umdNameDefine:true
            }
        }
    }
}