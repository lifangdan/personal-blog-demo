<template>
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <SideBarMenu/>
            </el-aside>
            <el-main>
                <Main/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Header from './components/header'
    import SideBarMenu from './components/sideBarMenu'
    import Main from './components/main'

    export default {
        components: {
            Header,
            SideBarMenu,
            Main,
        },
        data(){
            return{
            }
        },
        created(){

        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
