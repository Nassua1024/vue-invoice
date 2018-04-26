
<template>
    <div class="invoice-list">
        <div class="invoice">
            <el-row>
                <el-col :span="10">申请时间</el-col>
                <el-col :span="14"></el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票类型</el-col>
                <el-col :span="14"></el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票内容</el-col>
                <el-col :span="14"></el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票抬头</el-col>
                <el-col :span="14"></el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票金额</el-col>
                <el-col :span="14"></el-col>
            </el-row>
            <el-row class="price">
                <el-col :span="10">发票金额1</el-col>
                <el-col :span="14"></el-col>
            </el-row>
            <el-row class="price">
                <el-col :span="10">发票金额2</el-col>
                <el-col :span="14"></el-col>
            </el-row>
            <el-row>
                <el-col :span="10">备注</el-col>
                <el-col :span="14"></el-col>
            </el-row>
            <el-row>
            </el-row>
        </div>
    </div>
</template>

<style lang="less">
    .invoice-list {
        min-height: 100%;
        box-sizing: border-box;
        padding: 0 40px;
        background: #f5f5f5;
        .invoice {
            box-sizing: border-box;
            padding: 0 20px;
            background: #fff;
            .el-row {
                height: 60px;
                line-height: 60px;
                font-size: 24px;
            }
            .price {
                font-size: 22px;
                height: 40px;
                line-height: 40px;
            }
            
        }
    }
</style>