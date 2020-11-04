<template>
    <div class="header-container">
        <div class="logo">李芳丹的博客</div>
        <div class="header-center">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#0784e5"
                text-color="#fff"
                active-text-color="#fff">
                <el-menu-item  v-for="(item,index) in menuList" :key="index"  @click="goTo(item)" :index="String(index+1)">{{item.meta&&item.meta.title}}
                </el-menu-item>
            </el-menu>
        </div>
        <div class="github" @click="goToGithub"><img src="../../../assets/github_03.png"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                menuList: [
                    {
                        name: '我的工作台',
                        path: '/Index',
                        disabled: false,
                        ind: '1',
                        isShowSideBar:false,
                    },
                    {
                        name: '个人中心',
                        path: '/PersonCenter',
                        disabled: false,
                        ind: '2',
                        isShowSideBar:true,
                    },
                    {
                        name: '菜单3',
                        path: '/',
                        disabled: true,
                        ind: '3',
                        isShowSideBar:false,
                    },
                ]
            }
        },
        created(){
            let routes=this.$router.options.routes
            this.reversalTree(this.menuList=[],routes,'children')
            console.log('我是头部菜单：')
            console.log(this.menuList)
        },
        methods: {
            reversalTree(treeItems = [], data, children) {
                data.forEach(item => {
                    if(item.meta&&item.meta.isHeader){
                        treeItems.push(item)
                    }
                    if (item[children] && item[children].length !== 0) {
                        this.reversalTree(treeItems, item[children], children)
                    }
                })
                return ''
            },
            handleSelect(key, keyPath) {
                this.activeIndex = key
            },
            goTo(item) {
                this.$emit('getData',item)
                this.$router.push({path: item.path})
            },
            goToGithub(){
                window.open('https://github.com/lifangdan')
            },
        }
    }
</script>

<style scoped lang="scss">
    .header-container {
        width: 100%;
        background-color: #0784e5;
        display: flex;
        .logo{
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            margin: 18px 60px 0 20px;
        }
        .header-center {
            /*margin: 0 auto;*/
        }
        .github{
            width:25px;
            position:absolute;
            right:20px;
            top:17px;
            cursor:pointer;
        }
        .el-menu.el-menu--horizontal{
            border-bottom: none;
        }
    }

</style>
