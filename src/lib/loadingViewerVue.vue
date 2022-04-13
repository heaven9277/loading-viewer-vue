<!--
 * @Descripttion: 加载组件
 * @version: 1.0.0
 * @Author: zhenghaiwen
 * @Date: 2022-04-11 16:59:09
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-04-13 09:22:26
-->
<template>
    <div class="init-loading-container" v-if="loadingVisible">
        <!-- 不同模式展示不同的加载 -->
        <template v-if="mode">
            <img :src="modeUrl"  @error="handleOnError"/>
        </template>
        <template v-else>
            <img :src="url"  @error="handleOnError"/>
        </template>
    </div>
</template>
<script>
export default {
    name: 'loadingViewerVue',
    props:{
        visible:{
            type:Boolean,
            default:false
        },
        mode:{
            type:String,
            default:""
        },
        url:{
            type:String,
            default:require("../assets/loading7.svg")
        }
    },
    data(){
        return{

        }
    },
    computed:{
        loadingVisible:{
            get(){
                return this.visible
            },
            set(val){
                this.$emit("update:visible",val);
            }
        },
        modeUrl:{
            get(){
                return require('../assets/loading'+this.mode+'.svg')
            },
            set(val){

            }
        }
    },
    mounted(){
    },
    methods:{
        handleOnError(){
            this.url = require('../assets/loading1.svg');
        }
    }
}
</script>
<style scoped>
.init-loading-container{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 19950111;
}
img{
  /* max-width: 30px; */
  width: 10%;
}
</style>
