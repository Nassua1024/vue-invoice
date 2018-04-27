<template>
    <div class="btn-wrap">
        <el-button @click="redirctTo('NORMAL')"></el-button>
        <el-button @click="redirctTo('SPECIAL')"></el-button>
        <router-link to="/changeinvoice"></router-link>
        <router-link to="/invoicelist"></router-link>
    </div>
</template>

<script>
    export default {
        methods: {
            redirctTo(type) {
                this.$router.push({ path: '/selectcontract', query: { type } });
            }
        }
    }
</script>

<style lang="less" scope>
    .btn-wrap {
        width: 100%;
        box-sizing: border-box;
        padding: 60px 40px;
        a, button {
            display: block;
            width: 100%;
            height: 180px;
            margin-bottom: 20px;
        }
        button:nth-child(1) {
            background: url(../assets/ordinary.png) no-repeat center center;
            background-size: 100%;
            background-size: 100% 100%;
        }
        button:nth-child(2) {
            background: url(../assets/special.png) no-repeat center center;
            background-size: 100% 100%;
        }
        a:nth-child(3) {
            background: url(../assets/change.png) no-repeat center center;
            background-size: 100% 100%;
        }
        a:nth-child(4) {
            background: url(../assets/my.png) no-repeat center center;
            background-size: 100%;
            background-size: 100% 100%;
        }
        a:nth-child(2) {
            background: url(../assets/special.png) no-repeat center center;
            background-size: 100% 100%;
        }
        a:nth-child(3) {
            background: url(../assets/change.png) no-repeat center center;
            background-size: 100% 100%;
        }
        a:nth-child(4) {
            background: url(../assets/my.png) no-repeat center center;
            background-size: 100% 100%;
            background-size: 100% 100%;
        }
    }
</style>