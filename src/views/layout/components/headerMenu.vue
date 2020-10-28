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
                active-text-color="#fff">
                <el-menu-item  v-for="(item,index) in menuList" :key="index"  @click="goTo(item)" :index="String(index+1)">{{item.meta&&item.meta.title}}
                </el-menu-item>
            </el-menu>
        </div>

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
