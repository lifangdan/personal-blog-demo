<template>
    <div style="height: 2000px">我是首页
        <div @click="goTo">点击</div>
    </div>
</template>

<script>
    import Header from './header'
    export default {
        components:{
            Header,
        },
        methods:{
            goTo(){
                this.$router.push({path:'/typeScript/page1'})
            }
        }
    }
</script>
