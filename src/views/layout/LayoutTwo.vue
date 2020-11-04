<template>
    <el-container>
        <el-header class="">
            <Header/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <SideBarMenu :routesList="routesList"/>
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
        data() {
            return {
                routesList: JSON.parse(window.localStorage.getItem('sideBarRoutes'))
            }
        },
        created() {

        },

        methods: {}
    }
</script>

<style scoped>
    .el-header {
        padding: 0;
        height: 48px !important;
        position: fixed;
        width: 100%;
        top: 0;
    }

    .el-container {
        position: fixed;
        width: 100%;
        top: 48px;
        bottom: 0;
    }
</style>
