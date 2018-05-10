<template>
    <div class="success">
        <img src="../../assets/images/success.png" alt="" />
        <router-link to="/">查看已申请发票</router-link>
    </div>
</template>

<style lang="less">
    .success {
        width: 100%;
        height: 100%;
        img {
            display: inline-block;
            width: 100%;
            height: 600px;
        }
        a {
            position: absolute;
            left: 50%;
            bottom: 30px;
            width: 650px;
            height: 80px;
            margin-left: -325px;
            background: #3a8ee6;
            text-align: center;
            line-height: 80px;
            font-size: 28px;
            color: #fff;
        }
    }
</style>