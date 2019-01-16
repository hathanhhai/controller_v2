<template>
    <div>
        <div  style="margin-bottom: 10px">
            <button class="btn btn-success" @click="btnSteam">Phát</button>
            <button class="btn btn-primary" @click="btnClear"> Dừng</button>
        </div>
        <div class="row">

            <div class="col-md-6">
                <div class="card m-b-20 card-inverse text-white">
                    <img class="card-img img-fluid" :src="image_webcam" alt="Card image">

                </div>

            </div>
            <div class="col-md-6">
                <div class="card m-b-20 card-inverse text-white">
                    <img class="card-img img-fluid"/>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "ACamera",
        data() {
            return {
                image_webcam: '',

            }
        },
        created() {
            var _this = this;
            this.$socket.on('client_test_webcam', function (data) {
                _this.image_webcam = `data:image/jpeg;base64,${data.image}`
            });
            this.$socket.emit('client_clear_time');
            this.$socket.emit('client_btn_webcam', this.$store.state.user);
        },
        mounted() {
            var _this = this;


        },
        methods: {
            btnSteam() {
                this.$socket.emit('client_clear_time');
                // setInterval(()=>{
                    this.$socket.emit('client_btn_webcam');
                // },1000/10)

            },
            btnClear() {
                this.$socket.emit('client_clear_time');
            }
        }
    }
</script>

<style scoped>

</style>