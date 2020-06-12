Vue.component('vInput',{
    props : {
        value : {
            type : [String , Number],
            default : ''
        }
    },
    template : `<div>
                    <span>昵称：</span>
                    <input type="text" :value="value" @input="$emit('input',$event.target.value)">
                </div>`,
});

Vue.component('vTextarea',{
    props : {
        value : {
            type : String,
            default : ''
        }
    },
    template :  `<div>
                    <span>留言内容：</span>
                    <textarea placeholder="请输入留言内容" :value="value" ref="message" @input="$emit('input',$event.target.value)"></textarea>
                </div>`,
    methods : {
        focus() {
            this.$refs.message.focus();
        }
    }
});