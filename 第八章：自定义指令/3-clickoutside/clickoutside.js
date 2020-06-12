Vue.directive('clickoutside',{
    bind : function(el,binging,vnode) {
        function documentHandler (e) {
            if(el.contains(e.target)) {//contains 方法是用来判断元素A是否包含了元素B包含返回 true，不包含返回也false.
                return false;
            }
            //判断的是当前的指令 v-clickoutside 有没有写表达式
            //在过滤了内部元素后,点击外面任何区域应该执行用户表达式中 函数，所以binding.value()就是用来执行当前上下文 methods 中指定的数
            if(binging.expression) {
                binging.value(e);
            }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click',documentHandler);

        // 实现在点击按钮显示下拉菜单后，通过按下键盘的ESC键也可以关闭下拉菜单。
        document.addEventListener('keyup',function(e) {
            if(e.keyCode === 27) {
                binging.value(e);
            }
        });
    },
    unbind : function(el,binging) {
        document.removeEventListener('click',el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
})