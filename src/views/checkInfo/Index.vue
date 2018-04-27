
<template>
    <div class="check-info">
        <h3>发票申请准备流程</h3>
        <el-row class="email">
            <el-col :span="20">
                <el-input type="text" placeholder="请输入email地址获取专票合同模板" />
            </el-col>
            <el-col :span="4">
                <el-button type="primary">发送</el-button>
            </el-col>
        </el-row>
        <div class="step-wrap">
            <!-- <el-row class="step active">
                <i class="top" />
                <label class="active">1</label>
                <el-col :span="24">专票合同模板模板已发送，请登录邮箱查收</el-col>
            </el-row>
            <el-row class="step">
                <label />
                <el-col :span="24">印4分合同模板并印公司印章</el-col>
            </el-row>
            <el-row class="step step3">
                <label />
                <el-col :span="24">
                    <p>将新的打印合同和原合同一并寄回</p>
                    <span>点击查看邮箱地址</span>
                </el-col>
            </el-row>
            <el-row class="step">
                <i class="bottom" />
                <label />
                <el-col :span="24">确认寄回资料的快递公司和快递单号</el-col>
            </el-row> -->

            <el-row 
                class="step"
                v-for="(item, index) in stepList" 
                :key="index" 
                :class="item.active ? 'active' : ''"
            >
                <i :class="`label${index+1}`" v-if="index % 3 == 0" />
                <label :class="item.active ? 'active' : ''">{{ index+1 }}</label>
                <el-col :span="24" v-if="index != 2">{{ item.txt }}</el-col>
                <el-col :span="24" v-else>
                    <p v-for="(txt, i) in item.txt" :key="i">{{ txt }}</p>
                </el-col>
            </el-row>

        </div>
        <div class="commit">
            <el-button type="primary">下一步</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stepList: [ 
                    {
                        active: true, 
                        txt: '专票合同模板模板已发送，请登录邮箱查收',
                    }, {
                        active: false, 
                        txt: '印4分合同模板并印公司印章',
                    }, {
                        active: false, 
                        txt: ['将新的打印合同和原合同一并寄回', '点击查看邮箱地址']
                    }, {
                        active: false, 
                        txt: '确认寄回资料的快递公司和快递单号'
                    }
                ]
            }
        }
    }
</script>

<style lang="less">
    .check-info {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        h3 {
            width: 100%;
            text-align: center;
            line-height: 140px;
            font-size: 34px;
        }
        .email {
            width: 100%;
            height: 100px;
            background: #fff;
            .el-col, .el-input {
                height: 100%;
            }
            .el-col:last-child {
                display: flex;
                align-items: center;
            }
        }
        input {
            height: 100px;
            font-size: 26px;
        }
        .step-wrap {
            width: 100%;
            box-sizing: border-box;
            padding: 80px 30px 0 60px;
        }
        .step {
            position: relative;
            box-sizing: border-box;
            padding-left: 30px;
            height: 166px;
            border-left: 4px solid #ddd;
            .el-col {
                height: 100%;
                text-align: center;
                line-height: 166px;
                background: url(../../assets/initbg.png) no-repeat left center;
                background-size: 100%;
                font-size: 26px;
            }
            p {
                width: 100%;
                text-align: center;
            }
            i {
                position: absolute;
                left: 0;
                width: 8px;
                height: 66px;
                margin-left: -4px;
                background: #f5f5f5;
            }
            label {
                position: absolute;
                left: -18px;
                top: 50%;
                width: 36px;
                height: 36px;
                margin-top: -16px;
                background: url(../../assets/dian.png) no-repeat center center;
                background-size: 100% 100%;
            }
            label.active {
                background: #409EFF;
                border-radius: 50%;
                text-align: center;
                line-height: 36px;
                font-size: 24px;
                color: #fff;
            }
            .label1 {
                top: 0;
            }
            .label4 {
                bottom: 0;
            }
        }
        .step.active .el-col {
            background: url(../../assets/bg.png) no-repeat center center;
            background-size: 100% 100%;
        }
        .step:nth-child(3) .el-col {
            box-sizing: border-box;
            padding-top: 50px;
            line-height: 1.5 !important;
            span {
                font-size: 24px;
                color: #409EFF;
            }
        }
    }
</style>