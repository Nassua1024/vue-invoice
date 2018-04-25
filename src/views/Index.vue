<template>
    <div class="btn-wrap">
        <router-link to="/selectcontract"></router-link>
        <router-link to="/"></router-link>
        <router-link to="/"></router-link>
        <router-link to="/"></router-link>
    </div>
</template>

<style lang="less" scope>
    .btn-wrap {
        width: 100%;
        box-sizing: border-box;
        padding: 60px 40px;
        a {
            display: block;
            width: 100%;
            height: 180px;
            margin-bottom: 20px;
        }
        a:nth-child(1) {
            background: url(../assets/ordinary.png) no-repeat center center;
            background-size: 100%;
        }
        a:nth-child(2) {
            background: url(../assets/special.png) no-repeat center center;
            background-size: 100%;
        }
        a:nth-child(3) {
            background: url(../assets/change.png) no-repeat center center;
            background-size: 100%;
        }
        a:nth-child(4) {
            background: url(../assets/my.png) no-repeat center center;
            background-size: 100%;
        }
    }
</style>

<script>
    export default {
        name: 'Index',
    };
</script>