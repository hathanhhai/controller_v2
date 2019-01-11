<template>
    <div class="row">


        <div class="col-xl-4 col-md-6">
            <div @click="sendSocketTest" class="card-box">


                <h4 class="header-title mt-0 m-b-30">Mức nước</h4>

                <div class="widget-box-2">
                    <div class="widget-detail-2">
                            <span class="badge badge-success badge-pill pull-left m-t-20">95%
 <i class="mdi mdi-trending-up"></i>
                            </span>
                        <h2 class="mb-0"> 3452/3561 </h2>
                        <p class="text-muted m-b-25">Lần bơm cuối cùng: 12:30 23/12/2019</p>
                    </div>
                    <div class="progress progress-bar-success-alt progress-sm mb-0">
                        <div class="progress-bar progress-bar-success" role="progressbar"
                             aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                             style="width: 95%;">
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- end col -->


        <div class="col-xl-4 col-md-6">
            <div class="card-box">


                <h4 class="header-title mt-0 m-b-30">Nhiệt độ</h4>

                <div class="widget-box-2">
                    <div class="widget-detail-2">
                            <span class="badge badge-primary badge-pill pull-left m-t-20">32%
                                <i class="mdi mdi-trending-down"></i> </span>
                        <h2 class="mb-0"> 32°C </h2>
                        <p class="text-muted m-b-25 text-success">Trạng thái: Ổn định</p>
                    </div>
                    <div class="progress progress-bar-primary-alt progress-sm mb-0">
                        <div class="progress-bar progress-bar-primary" role="progressbar"
                             aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                             style="width: 77%;">
                            <span class="sr-only">77% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- end col -->

        <div class="col-xl-4 col-md-6">
            <div class="card-box">


                <h4 class="header-title m-t-0 m-b-30"><i class="mdi mdi-notification-clear-all m-r-5"></i>
                    Đang Hoạt Động</h4>

                <ul class="list-group m-b-0 user-list">

                    <li class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5" >Bóng 1 - Hoạt động: 3:30</span>
                    </li>
                    <li class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5" >Bóng 1 - Hoạt động: 3:30</span>
                    </li>
                    <li class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5" >Bóng 1 - Hoạt động: 3:30</span>
                    </li>
                    <li class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5" >Bóng 1 - Hoạt động: 3:30</span>
                    </li>

                </ul>
            </div>
        </div>



    </div>

</template>

<script>
    export default {
        name: "AreaA",
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