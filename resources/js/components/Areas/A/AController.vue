<template>
    <div>
        <!--<Loading v-if="loading" ></Loading>-->
        <div class="row ">
            <div v-if="btn_name.btn_b2_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(2)" class="card-box hover-pc "
                     :class="btn_status.btn_b2_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b2_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian hoạt động: 8:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b2_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b3_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(3)" class="card-box hover-pc "
                     :class="btn_status.btn_b3_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b3_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian ngưng hoạt động: 5:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b3_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b4_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(4)" class="card-box hover-pc "
                     :class="btn_status.btn_b4_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b4_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian hoạt động: 8:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b4_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b5_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(5)" class="card-box hover-pc "
                     :class="btn_status.btn_b5_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b5_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian ngưng hoạt động: 5:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b5_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b6_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(6)" class="card-box hover-pc "
                     :class="btn_status.btn_b6_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b6_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian hoạt động: 8:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b6_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b7_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(7)" class="card-box hover-pc "
                     :class="btn_status.btn_b7_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b7_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian ngưng hoạt động: 5:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b7_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->


            <div v-if="btn_name.btn_b8_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(8)" class="card-box hover-pc "
                     :class="btn_status.btn_b8_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b8_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian hoạt động: 8:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b8_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b9_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(9)" class="card-box hover-pc "
                     :class="btn_status.btn_b9_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b9_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian ngưng hoạt động: 5:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b9_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b10_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(10)" class="card-box hover-pc "
                     :class="btn_status.btn_b10_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b10_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian hoạt động: 8:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b10_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b11_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(11)" class="card-box hover-pc "
                     :class="btn_status.btn_b11_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b11_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian ngưng hoạt động: 5:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b11_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b12_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(12)" class="card-box hover-pc "
                     :class="btn_status.btn_b12_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b12_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian hoạt động: 8:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b12_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

            <div v-if="btn_name.btn_b13_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(13)" class="card-box hover-pc "
                     :class="btn_status.btn_b13_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b13_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian ngưng hoạt động: 5:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b13_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->
            <div v-if="btn_name.btn_b14_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(14)" class="card-box hover-pc "
                     :class="btn_status.btn_b14_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b14_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian ngưng hoạt động: 5:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b14_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->
            <div v-if="btn_name.btn_b15_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(15)" class="card-box hover-pc "
                     :class="btn_status.btn_b15_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b15_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian ngưng hoạt động: 5:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b15_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->
            <div v-if="btn_name.btn_b16_name != 'disable'" class="col-xl-2 col-md-4 max-width ">
                <div @click="handleButton(16)" class="card-box hover-pc "
                     :class="btn_status.btn_b16_status ? 'out-on' : ''">
                    <h4 class="header-title mt-0 m-b-30">{{btn_name.btn_b16_name}}</h4>
                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            Thời gian ngưng hoạt động: 5:30
                        </div>
                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> {{btn_status.btn_b16_status ? 'Bật' : 'Tắt'}} </h2>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->

        </div>
    </div>
</template>

<script>
    import Loading from '../../Layouts/Loading'

    export default {
        name: "AController",
        components: {Loading},

        data() {
            return {
                loading: true,
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

            this.$socket.emit('client_clear_time');
            this.$socket.on("init_controller_server", function (data) {
                // _this.mappingResource(_this.btn_status, data.status);
                _this.mappingResource(_this.btn_name, data.name);

            });
            this.$socket.on("btn_change_status_server", function (data) {
                _this.mappingResource(_this.btn_status, data);
                _this.mappingResource(_this.btn_name, data);

            });
            this.$socket.on("status_button_server", function (data) {
                _this.mappingResource(_this.btn_status, data.status);
            })

        }, mounted() {

            this.$socket.emit("status_button_client",{user:this.getStoreUser()});
            this.$socket.emit("init_controller_client", this.$store.state.user);
        },

        methods: {
            mappingResource(res, resources) {
                Object.keys(res).forEach(function (key) {
                    if (resources.hasOwnProperty(key)) {
                        res[key] = resources[key];
                    }
                });
            },
            handleButton(number) {
                switch (number) {
                    case 2:
                        //this.btn_status.btn_b2_status  = !this.btn_status.btn_b2_status;
                        this.emitButton(number);
                        break;
                    case 3:

                        this.emitButton(number);

                        break;
                    case 4:
                        this.emitButton(number);
                        break;
                    case 5:
                        this.emitButton(number);
                        break;
                    case 6:
                        this.emitButton(number);
                        break;
                    case 7:
                        this.emitButton(number);
                        break;
                    case 8:
                        this.emitButton(number);
                        break;
                    case 9:
                        this.emitButton(number);
                        break;
                    case 10:
                        this.emitButton(number);
                        break;
                    case 11:
                        this.emitButton(number);
                        break;
                    case 12:
                        this.emitButton(number);
                        break;
                    case 13:
                        this.emitButton(number);
                        break;
                    case 14:
                        this.emitButton(number);
                        break;
                    case 15:
                        this.emitButton(number);
                    case 16:
                        this.emitButton(number);
                    default:
                        return;

                }
            },
            getStoreUser() {
                return this.$store.state.user;
            },
            emitButton(number) {
                this.btn_status['btn_b' + number + '_status'] ?
                    this.$socket.emit('btn_change_status_client',
                        {
                            name: 'btn_b' + number + '_name',
                            status: true,
                            user: this.getStoreUser(),
                            number:number
                        }
                    ) :
                    this.$socket.emit('btn_change_status_client',
                        {
                            name: 'btn_b' + number + '_name',
                            status: false,
                            user: this.getStoreUser(),
                            number:number
                        }
                    );
                this.$socket.emit("status_button_client",{user:this.getStoreUser()});

            }


        }
    }
</script>

<style scoped>

</style>