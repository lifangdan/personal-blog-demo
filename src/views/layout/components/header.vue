<template>
    <div class="header border-bottom">
        <div class="title">
            {{title}}
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
                title:this.$route.query.title
            }
        },
        created() {
            console.log(1111111111111)
            console.log(this.headerTitle)
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
