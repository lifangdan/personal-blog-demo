<template>
    <el-container>
        <el-header>
            <HeaderMenu @getData="getData"/>
        </el-header>
        <el-container>
            <el-aside width="200px" v-if="isShowSideBar">
                <SideBarMenu/>
            </el-aside>
            <el-main>
                <Main/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import HeaderMenu from './components/headerMenu'
    import SideBarMenu from './components/sideBarMenu'
    import Main from './components/main'

    export default {
        components: {
            HeaderMenu,
            SideBarMenu,
            Main,
        },
        data(){
            return{
                isShowSideBar:false,
            }
        },
        created(){

        },
        methods:{
            getData(data){
                this.isShowSideBar=data.meta.isShowSideBar
            }
        }
    }
</script>

<style scoped>

</style>
