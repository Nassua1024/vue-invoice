<template>
    <div class="plain-invoice">
        <p>经系统检测最近180天新签合同如，请确认并选择需要开发票的合同</p>
        <div class="content">
            <el-row>
                <el-col :span="12">发票内容</el-col>
                <el-col :span="12">培训费</el-col>
            </el-row>
            <el-row>
                <el-col :span="12">发票类型</el-col>
                <el-col :span="12">
                    <el-switch
                        v-model="checked"
                        :width=40
                        active-text="企业"
                        inactive-text="个人"
                    />
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">发票抬头</el-col>
                <el-col :span="12">
                    <el-input
                        placeholder="请填写发票抬头"
                        clearable
                    />
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">发票金额</el-col>
                <el-col :span="6">2500元</el-col>
                <el-col :span="6">
                   <el-button type="primary">申请多张</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">开票金额</el-col>
                <el-col :span="12">
                    <el-input
                        placeholder="请输入大于1500元金额"
                        clearable
                    />
                </el-col>
            </el-row>
            <div class="title">发票收件信息</div>
            <el-row>
                <el-col :span="12">收件人姓名</el-col>
                <el-col :span="12">
                    <el-input
                        placeholder="请输入收件人姓名"
                        clearable
                    />
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">联系方式</el-col>
                <el-col :span="12">
                    <el-input
                        placeholder="请输入联系方式"
                        clearable
                    />
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">所在区域</el-col>
                <el-col :span="12">
                    <el-input
                        placeholder="请输入详细地址"
                        clearable
                    />
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">详细地址</el-col>
                <el-col :span="12">
                    <el-input
                        placeholder="请输入详细地址"
                        clearable
                    />
                </el-col>
            </el-row>
        </div>
        <div class='commit'><el-button>确认提交</el-button></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked: false
            }
        }
    }
</script>

<style lang="less">
    .plain-invoice {
        min-height: 100%;
        background: #f5f5f5;
        p {
            width: 100%;
            height: 90px;
            box-sizing: border-box;
            padding: 10px 40px;
            background: url(../../assets/head-bg.jpg) no-repeat center center;
            background-size: 100% 100%;
            font-size: 26px;
            color: #fff;
        }
        .content {
            width: 100%;
            box-sizing: border-box;
            padding: 30px;
            .el-row {
                height: 80px;
                background: #fff;
                border-bottom: 1px solid #ddd;
                line-height: 80px;
                font-size: 26px;
                color: #333;
                .el-col:first-child {
                    text-indent: 50px;
                } 
            }
            .el-switch {
                height: 30px;
            }
            .el-switch__label {
                height: 30px;
                span {
                    line-height: 30px;
                    font-size: 26px;
                }
            } 
            .el-switch__core {
                height: 30px;
                border-radius: 16px;
            }
            .el-switch__button {
                top: 50%;
                transform: translateY(-50%);
            }
            .is-checked .el-switch__button {
                transform: translate3d(56px, -50%, 0) !important;
            }
            .el-button {
                letter-spacing: 2px;
            } 
            .el-input {
                vertical-align: top;
                input {
                    box-sizing: border-box;
                    padding: 0 100px 0 0;
                    border: none;
                    font-size: 24px;
                }
                .el-input__suffix {
                    right: 0;
                }
                .el-input__suffix-inner {
                    display: inline-block;
                }
                .el-input__icon {
                    width: 100px;
                    height: 80px;
                    &:before {
                        font-size: 32px;
                        vertical-align: middle;
                    }
                }
            }
            .title {
                height: 100px;
                line-height: 100px;
                font-size: 28px;
                color: #333;
                text-indent: 50px;
            }
        }
        .commit {
            background: #f5f5f5;
        }
    }
</style>