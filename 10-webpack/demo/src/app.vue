<template>
    <div>
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
        <p>
            <img :src="img1" alt="">
        </p>
    </div>
</template>

<script>
    import vTitle from './title.vue';
    import vButton from './button.vue';

    export default {
        data () {
            return {
                img1 : '../public/images/1.jpg'
            }
        },
        components : {
            vTitle,
            vButton
        },
        methods: {
            handleClick (e) {
                console.log(e);
            }
        },
    }
</script>

<style scoped>
    img {
        width : 200px;
    }
</style>