<template>
    <div>
        <h1>Dashboard</h1>
        <template v-if="this.$store.state.user.area == 'A' ">
            <ADashboard></ADashboard>
        </template>

    </div>

</template>

    <script>
    import ADashboard from '../Areas/A/ADashboard'

    export default {
        name: "Dashboard",
        components: {ADashboard,},
        data(){
            return {

            }
        },methods:{
            sendSocketTest(){

                this.$socket.emit("btn-test",this.$store.state.user)
            }
        }

    }
</script>

<style scoped>

</style>