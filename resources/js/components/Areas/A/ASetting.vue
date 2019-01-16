<template>
    <div class="alert alert-success">

        <strong>Title!</strong> Setting
    </div>
</template>

<script>
    export default {
        name: "ASetting",
        mounted(){
            this.$socket.emit('client_clear_time');
        }
    }
</script>

<style scoped>

</style>