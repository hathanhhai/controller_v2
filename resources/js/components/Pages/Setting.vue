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
            this.$socket.emit('client_clear_time');
        },
    }
</script>

<style scoped>

</style>