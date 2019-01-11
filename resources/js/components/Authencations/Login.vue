<template>
    <div>
        <div class="account-pages"></div>
        <div class="clearfix"></div>
        <div class="wrapper-page">
            <div class="m-t-40 card-box">
                <div class="text-center">
                    <h4 class="text-uppercase font-bold mb-0">Đăng Nhập</h4>
                </div>
                <div class="p-20">
                    <form class="form-horizontal m-t-20" >

                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="text"  placeholder="Username">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="password" placeholder="Password">
                            </div>
                        </div>



                        <div class="form-group text-center m-t-30">
                            <div class="col-xs-12">
                                <button @click="login" class="btn btn-custom btn-bordred btn-block waves-effect waves-light">Log In</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
            <!-- end card-box-->


        </div>
        <!-- end wrapper page -->
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                statusLogin: false
            }
        },
        created() {

        },
        mounted() {

        }, methods: {
            login() {
                localStorage.setItem("login",true);
                this.$router.push('dashboard');

            }
        }, watch: {}
    }
</script>

<style scoped>

</style>