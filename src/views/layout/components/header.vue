<template>
    <div class="header border-bottom">
        <div class="title">
            {{insidePageTitle}}
        </div>
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
        }
    }
</script>

<style scoped lang="scss">
.header{
    height: 48px;
    line-height: 48px;
    .title{
        text-align: left;
        font-size: 20px;
        font-weight: bold;
        padding: 0 20px;
    }
}
</style>
