<template>
    <div class="btn-wrap">
        <a href="javascript: " @click="redirctTo('NORMAL')"></a>
        <a href="javascript: " @click="redirctTo('SPECIAL')"></a>
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
        },
        created() {
            console.log(++this.$store.state.count);
        }
    }
</script>

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
            background: url(../assets/images/ordinary.png) no-repeat center center;
            background-size: 100%;
            background-size: 100% 100%;
        }
        a:nth-child(2) {
            background: url(../assets/images/special.png) no-repeat center center;
            background-size: 100% 100%;
        }
        a:nth-child(3) {
            background: url(../assets/images/change.png) no-repeat center center;
            background-size: 100% 100%;
        }
        a:nth-child(4) {
            background: url(../assets/images/my.png) no-repeat center center;
            background-size: 100%;
            background-size: 100% 100%;
        }
    }
</style>