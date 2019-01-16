<template>
    <div>
        <template v-if="this.$store.state.user.area == 'A' ">
            <ASetting></ASetting>
        </template>
    </div>

</template>

<script>
    import ASetting from '../Areas/A/ASetting'
    export default {
        name: "Setting",
        components:{ASetting},
        mounted(){

        },
    }
</script>

<style scoped>

</style>