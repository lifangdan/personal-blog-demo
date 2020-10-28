<template>
    <div class="header-container">
        <div class="header-center">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#0784e5"
                text-color="#fff"
                active-background-color="#000"
                active-text-color="#fff">
                <el-menu-item index="1">我的工作台</el-menu-item>
                <el-menu-item index="2">菜单2</el-menu-item>
                <el-menu-item index="3" disabled>菜单3</el-menu-item>
            </el-menu>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="scss">
    .header-container {
        width: 100%;
        background-color: #0784e5;

        .header-center {
            width: 70%;
            margin: 0 auto;
        }
    }

</style>
