<template>
    <div>
        <button @click="add">添加</button>
        <div>我是页面A</div>
        <h1>{{$store.state.count}}</h1>
    </div>
</template>

<script>
    export default {
        methods:{
            add(){
                this.$store.dispatch('increment')
            }
        }
    }
</script>

<style scoped>

</style>