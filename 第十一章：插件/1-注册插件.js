// 注册插件需要一个公开的方法install：它的第一个参数是Vue构造器，第二个参数是一个可选的选项对象。

MyPlugin.install = function (Vue, optons) { 
    
    //全局注册组件（指令等功能资源类似〉
    Vue.component('component-name',{
        // 组件内容
    })

    //添加实例方法
    Vue.prototype.$Notice = function() {
        // 逻辑...
    }

    //添加全局方法或属性
    Vue.globalMethod = function() {
        // 逻辑...
    }

    //添加全局混合
    Vue.mixin({
        mounted : function() {
            // 逻辑...
        }
    })
}



// 使用插件
Vue.use(MyPlugin);

Vue.use(MyPlugin,{
    // 参数
})