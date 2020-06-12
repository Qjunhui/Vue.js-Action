Vue.component('vList',{
    props : {
        list : {
            type : Array,
            default() {
                return [];
            }
        }
    },
    template :  `<div v-if="list.length" class="list">
                    <template v-for="(item,index) in list">
                        <div class="list-handleDeleteitem">
                            <span>{{ item.name }} : </span>
                            <div class="list-msg">
                                <p>{{ item.message }}</p>
                                <a class="list-delete" @click="handleDelete(index)">删除</a>
                                <a class="list-reply" @click="handleReply(index)">回复</a>
                            </div>
                        </div>
                    </template>
                </div>
                <div v-else class="list-nothing">
                    留言列表为空
                </div>`,
    methods : {
        handleDelete(index) {
            this.$emit('delete',index);
        },
        handleReply(index) {
            this.$emit('reply',index);
        }
    }
});