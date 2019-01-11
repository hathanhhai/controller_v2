<template>
    <div>
        <template v-if="this.$store.state.user.area == 'A'">
            <ACamera></ACamera>
        </template>
    </div>

</template>

<script>
    import ACamera from '../Areas/A/ACamera'
    export default {
        name: "Camera",
        components:{ACamera}
    }
</script>

<style scoped>

</style>