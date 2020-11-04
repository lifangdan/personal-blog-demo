<template>
    <div>
        <el-menu
            :style="{'min-height':winH}"
            :default-active="$route.path"
            class="el-menu-vertical-demo">
            <template v-for="(item,index) in routesList">
                <router-link v-if="!item.children"
                             :to="item.path"
                             :key="item.path">
                    <el-menu-item class="item" :index="item.path">
                        <span>{{item.meta.title}}</span>
                    </el-menu-item>
                </router-link>
                <el-submenu v-if="item.children&&item.children.length>0"
                            :index="item.path"
                            :key="item.path">
                    <template slot="title">
                        <span>{{item.meta.title}}</span>
                    </template>
                    <template v-for="child in item.children">
                        <router-link v-if="!child.children"
                                     :to="child.path"
                                     :key="child.path">
                            <el-menu-item class="child" :index="child.path">
                                <span>{{child.meta.title}}</span>
                            </el-menu-item>
                        </router-link>
                        <template v-else>
                            <side-bar-menu :is-nest="true"
                                           :routesList="[child]">
                            </side-bar-menu>
                        </template>
                    </template>
                </el-submenu>
            </template>

            <!--<el-menu-item v-for="(item,index) in routesList" :index="String(index+1)">-->
            <!--<router-link :to="item.path" :key="item.path">-->
            <!--<span>{{item.meta.title}}</span>-->
            <!--</router-link>-->
            <!--</el-menu-item>-->
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'sideBarMenu',
        props: ['routesList'],
        data() {
            return {
                winH: (window.innerHeight - 48) + 'px'
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .child {
        font-size: 12px;
    }
</style>
