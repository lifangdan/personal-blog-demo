<template>
    <div class="header border-bottom">
        <div class="title">
            {{insidePageTitle}}
        </div>
        <el-link class="font12 ml15 mt5" :underline="false" @click="goToIndex">返回首页</el-link>
        <div class="github fr" @click="goToGithub"></div>
    </div>
</template>

<script>
    import { mapGetters,mapState } from 'vuex'
    export default {
        computed: {
            ...mapState([
                'headerTitle'
            ])
        },
        data(){
            return{
                insidePageTitle:window.localStorage.getItem('insidePageTitle')||''
            }
        },
        created() {
        },
        methods:{
            goToGithub(){
                window.open('https://github.com/lifangdan')
            },
            goToIndex(){
                this.$router.push('/Index')
            }
        }
    }
</script>

<style scoped lang="scss">
.header{
    height: 48px;
    line-height: 48px;
    display: flex;
    position: relative;
    .title{
        text-align: left;
        font-size: 20px;
        font-weight: bold;
        padding: 0 20px;
    }
    .github{
        position: absolute;
        right: 20px;
        width: 25px;
        height: 25px;
        top:10px;
        background-image: url("../../../assets/github_01.png");
        background-size: 100% 100%;
        cursor: pointer;
    }
    .github:hover{
        background-image: url("../../../assets/github_02.png");
    }
}
</style>
