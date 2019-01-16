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
            <div class="card-box" @click="sendSocketTemperature">
                <h4 class="header-title mt-0 m-b-30">Nhiệt độ</h4>
                <p class="">Số Giây Trì Hoãn: {{timeRelay}} (S)</p>
                <div class="widget-box-2">
                    <div class="widget-detail-2">
                            <span class="badge badge-primary badge-pill pull-left m-t-20">Độ ẩm: {{humidity}}%
                            </span>
                        <h2 class="mb-0"> {{temperature}}°C </h2>
                        <p v-if="temperature >= 27 && temperature <=31" class="text-muted m-b-25 text-success">Trạng thái: Ổn định</p>
                        <p style="color:red !important;" v-if="temperature >31" class="text-muted m-b-25 text-danger">Trạng thái: Nóng</p>
                        <p v-if="temperature <27" class="text-muted m-b-25 text-danger">Trạng thái: Mát</p>
                    </div>
                    <div class="progress progress-bar-primary-alt progress-sm mb-0">
                        <div v-if="temperature >= 27 && temperature <=31"
                             class="progress-bar progress-bar-success" role="progressbar"
                             aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                             style="width: 100%;">
                        </div>
                        <div v-if="temperature >31"
                             class="progress-bar progress-bar-danger" role="progressbar"
                             aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                             style="width: 100%;">
                        </div>
                        <div v-if="temperature <31"
                             class="progress-bar progress-bar-primary" role="progressbar"
                             aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                             style="width: 100%;">
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- end col -->

        <div class="col-xl-4 col-md-6">
            <div class="card-box">


                <h4 class="header-title m-t-0 m-b-30"><i class="mdi mdi-notification-clear-all m-r-5"></i>
                    Đang Hoạt Động
                </h4>

                <ul class="list-group m-b-0 user-list">
                    <li v-if="btn_status.btn_b2_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b2_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b3_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b3_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b5_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b5_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b6_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b6_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b7_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b7_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b8_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b8_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b9_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b9_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b10_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b10_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b11_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b11_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b12_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b12_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b13_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b13_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b14_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b14_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b15_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b15_name}} - Đang hoạt động</span>
                    </li>
                    <li v-if="btn_status.btn_b16_status == true"    class="list-group-item">
                        <i class="mdi mdi-circle text-warning"></i>
                        <span class="name mt-l-5">{{btn_name.btn_b16_name}} - Đang hoạt động</span>
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
                temperature:0,
                humidity:0,
                array_status_button:[],
                btn_status: {
                    btn_b2_status: false,
                    btn_b3_status: false,
                    btn_b4_status: false,
                    btn_b5_status: false,
                    btn_b6_status: false,
                    btn_b7_status: false,
                    btn_b8_status: false,
                    btn_b9_status: false,
                    btn_b10_status: false,
                    btn_b11_status: false,
                    btn_b12_status: false,
                    btn_b13_status: false,
                    btn_b14_status: false,
                    btn_b15_status: false,
                    btn_b16_status: false,
                },
                btn_name: {
                    btn_b2_name: "disable",
                    btn_b3_name: "disable",
                    btn_b4_name: "disable",
                    btn_b5_name: "disable",
                    btn_b6_name: "disable",
                    btn_b7_name: "disable",
                    btn_b8_name: "disable",
                    btn_b9_name: "disable",
                    btn_b10_name: "disable",
                    btn_b11_name: "disable",
                    btn_b12_name: "disable",
                    btn_b13_name: "disable",
                    btn_b14_name: "disable",
                    btn_b15_name: "disable",
                    btn_b16_name: "disable",
                }


            }
        },
        created() {
            var _this = this;

            this.$socket.on('distant_number_server', function (data) {
               _this.water_height = data.distant;
               _this.volume = data.volume;
            });
            this.$socket.on('temperature_number_server', function (data) {
                _this.temperature = data.temperature;
                _this.humidity = data.humidity;
            });
            this.$socket.on("status_button_server", function (data) {
                _this.mappingResource(_this.btn_status, data.status);
                _this.mappingResource(_this.btn_name, data.name);
            })


        },
        mounted() {
            this.$socket.emit('client_clear_time');
            this.$socket.emit('temperature_button_client',{user: this.$store.state.user});
            this.$socket.emit("distant_button_client", {user: this.$store.state.user});
            this.$socket.emit('temperature_button_client',{user: this.$store.state.user});
            var time = Math.floor(Math.random() * 8500) + 2000;
            var timeRelay = time/1000;
            this.timeRelay = timeRelay.toFixed(2);

            setInterval(() => {
                this.$socket.emit("distant_button_client", {user: this.$store.state.user});
                this.$socket.emit("temperature_button_client", {user: this.$store.state.user});
            },time  );


        },
        methods: {
            sendSocketTest() {
                this.$socket.emit("distant_button_client", {user: this.$store.state.user})

            },
            sendSocketTemperature(){
                this.$socket.emit('temperature_button_client',{user: this.$store.state.user});
            },
            mappingResource(res, resources) {
                Object.keys(res).forEach(function (key) {
                    if (resources.hasOwnProperty(key)) {
                        res[key] = resources[key];
                    }
                });
            },
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