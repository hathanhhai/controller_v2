<template>
    <div class="row">


        <div class="col-xl-4 col-md-6">
            <div @click="sendSocketTest" class="card-box">


                <h4 class="header-title mt-0 m-b-30">Mức nước</h4>
                <p class="">Số Giây Trì Hoãn: {{timeRelay}} (S)</p>

                <div class="widget-box-2">
                    <div class="widget-detail-2">
                            <span v-if="percentVolume >60"  class="badge badge-success badge-pill pull-left m-t-20">{{percentVolume}}%<i class="mdi mdi-trending-up"></i>
                            </span>
                        <span v-else  class="badge badge-danger badge-pill pull-left m-t-20">{{percentVolume}}%<i class="mdi mdi-trending-down"></i>
                            </span>
                        <h2 v-if="volume > 0 " class="mb-0"> {{volume}}/3467 (L)</h2>
                        <h2 v-else  class="mb-0 text-danger"> Giá trị vược mức</h2>

                        <p v-if="percentVolume > 60" class="text-muted m-b-25 text-success">Chiều Cao: {{water_height}}/216 (CM)</p>
                        <p v-else class="m-b-25 text-danger">Chiều Cao: {{water_height}}/216 (CM)</p>
                    </div>
                    <div class="progress progress-bar-success-alt progress-sm mb-0">
                        <div v-if="percentVolume >60" class="progress-bar progress-bar-success" role="progressbar"
                             aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                             :style="'width:'+percentVolume +'%'"
                             >
                        </div>
                        <div v-else class="progress-bar progress-bar-danger" role="progressbar"
                             aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                             :style="'width:'+percentVolume +'%'"
                        >
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
                        <div  class="progress-bar progress-bar-primary" role="progressbar"
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
                        <span class="name mt-l-5">Bóng 1 - Hoạt động: 3:30</span>
                    </li>
                    <li class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">Bóng 1 - Hoạt động: 3:30</span>
                    </li>
                    <li class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">Bóng 1 - Hoạt động: 3:30</span>
                    </li>
                    <li class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">Bóng 1 - Hoạt động: 3:30</span>
                    </li>

                </ul>
            </div>
        </div>


    </div>

</template>

<script>
    export default {
        name: "AreaA",
        data() {
            return {
                water_height:0,
                timeRelay:0,
                volume:0,
                percent:0,

            }
        },
        created() {
            var _this = this;
            this.$socket.on('distant_number_server', function (data) {

               _this.water_height = data.distant;
               _this.volume = data.volume;

            });
        },
        mounted() {
            this.$socket.emit("distant_button_client", {user: this.$store.state.user})
            var time = Math.floor(Math.random() * 8500) + 2000;
            var timeRelay = time/1000;
            this.timeRelay = timeRelay.toFixed(2);
            setInterval(() => {
                this.$socket.emit("distant_button_client", {user: this.$store.state.user})
            },time  );
            clearTimeout();

        },
        methods: {
            sendSocketTest() {
                this.$socket.emit("distant_button_client", {user: this.$store.state.user})

            }
        },
        computed:{
            percentVolume(){
                var percent = parseInt((this.volume*100)/3467);
                return percent <=100 ? percent : 0;
            }
        }
    }
</script>

<style scoped>

</style>