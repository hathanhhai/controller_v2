<template>
    <div>
        <Header v-if="this.$route.path != '/login'">
        </Header>

        <div class="wrapper">
            <div class="container-fluid mt-mobile">
            <Breadcrumb ></Breadcrumb>
               <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from "./components/Layouts/Navigation";
    import Header from "./components/Layouts/Header";
    import Breadcrumb from './components/Layouts/Breadcrumb'

    export default {
        name: 'App',
        components: {Navigation, Header, Breadcrumb},
        created(){
            var user = JSON.parse($('meta[name="user"]').attr('content'));
            this.$store.dispatch("setToken",user.token);
            this.$store.dispatch("setUser",user);
            this.$socket.emit('online',this.$store.state.user);
            this.$socket.on("thoat",function(data){
                alert(data);
            })
            this.$socket.on("btn-test-reci",function(data){
                alert(data);
            })
        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>