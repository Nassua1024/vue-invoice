
<template>
    <div class="change-invoice">
        <router-link to="/">
            <img src="../../assets/tonormal.png" alt="" />
        </router-link>
        <router-link to="/checkinfo">
            <img src="../../assets/tospecial.png" alt="" />
        </router-link>
    </div>
</template>

<style lang="less" scoped>
    .change-invoice {
        box-sizing: border-box;
        padding-top: 80px;
        a {
            display: block;
            width: 676px;
            height: 406px;
            margin: 40px auto 0;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>