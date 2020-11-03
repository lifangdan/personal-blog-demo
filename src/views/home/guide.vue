<template>
    <div class="bg" :style="{'height':winH}">
        <div class="main" @click="goTo">
            欢迎来到我的博客
            <i class="el-icon-right"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                winH:window.innerHeight+'px'
            }
        },
        methods:{
            goTo(){
                this.$router.push({path:'/Index'})
            }
        }
    }
</script>

<style scoped lang="scss">
    .bg {
        width: 100%;
        position: relative;
        background-image: url("../../assets/home_bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;

        .main {
            position: absolute;
            top: 45%;
            left: 50%;
            z-index: 99;
            font-size: 30px;
            margin-left: -50%;
            width: 100%;
            text-align: center;
            padding: 20px;
            cursor: pointer;
        }

        img {
            width: 100%;
            height: 100%;
        }


    }
</style>
