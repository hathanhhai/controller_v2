<template>
    <div>
        <template v-if="this.$store.state.user.area == 'A'">
            <AController></AController>
        </template>
    </div>

</template>

<script>
    import AController from '../Areas/A/AController'
    export default {
        name: "Controller",
        components:{AController},

        mounted(){
            this.$socket.emit('client_clear_time');
        }
    }
</script>

<style scoped>

</style>