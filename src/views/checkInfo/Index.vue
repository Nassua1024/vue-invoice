<template>
    <div class="check-info">
        <h3>发票申请准备流程</h3>
        <el-row class="email">
            <el-col :span="20">
                <el-input 
                    type="email" 
                    placeholder="请输入email地址获取专票合同模板" 
                    v-model="email"
                    @blur="handleInput"
                />
            </el-col>
            <el-col :span="4">
                <el-button 
                    type="primary" 
                    @click="handleSend"
                    v-loading.fullscreen.lock="loading"
                    element-loading-text="邮件发送中~"
                >
                    发送
                </el-button>
            </el-col>
        </el-row>
        <div class="step-wrap">
            <el-row 
                class="step"
                v-for="(item, index) in stepList" 
                :key="index" 
                :class="item.active ? 'active' : ''"
                @click.native="index == 2 ? dialogVisible = true : ''"
            >
                <i v-if="index % 3 == 0" :class="`label${index+1}`" />
                <label v-html="item.active ? '' : index+1" :class="item.active ? '' : 'active'" />
                <el-col :span="24" v-if="index != 2">{{ item.txt }}</el-col>
                <el-col :span="24" v-else>
                    <p v-for="(txt, i) in item.txt" :key="i">{{ txt }}</p>
                </el-col>
            </el-row>
        </div>
        <div class="commit">
            <el-button type="primary" @click="redirctTo">下一步</el-button>
        </div>
        <el-dialog
            center
            title="邮寄信息"
            class="dialog"
            :show-close="false"
            :visible.sync="dialogVisible"
        >
            <div class="dialog-content">
                <div class="city">{{ city }}</div>
                <el-row v-for="item in addressList" :key="item.label">
                    <el-col :span="8">{{ item.label }}</el-col>
                    <el-col :span="16">{{ item.text }}</el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleAdress">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

    import { URL } from '@/api/index';

    export default {
        data() {
            return {
                loading: false,
                email: '',
                REG: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                stepList: [ 
                    {
                        active: false, 
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
                ],
                city: '',
                addressList: [
                    {
                        label: '收件地址：',
                        text: ''
                    }, {
                        label: '收件人：',
                        text: ''
                    }, {
                        label: '联系电话：',
                        text: ''
                    }
                ],
                dialogVisible: false
            }
        },
        created() {
            
            const params = { data: { storeId: this.$route.query.storeId } }
            
            this.$axios(URL.check_address, params).then(res => {
                if (res && res.code == 0) {
                    const data = res.data.detail
                    this.city = data.receiverProvinceName
                    this.addressList[0].text = data.receiverAddress
                    this.addressList[1].text = data.receiverName
                    this.addressList[2].text = data.receiverPhone
                }
            })
        },
        methods: {

            // warnig
            warning(txt) {
                this.$message({
                    message: txt,
                    type: 'warning',
                    duration: 1500
                })
            },

            // 输入email
            handleInput() {
                (this.email && !this.email.match(this.REG)) && this.warning('邮箱格式有误')
            },

            // 发送email
            handleSend() {

                const { email, REG } = this

                if (email == '') {
                    this.warning('请输入邮箱地址')
                    return
                }

                if (!email.match(REG)) {
                    this.warning('邮箱格式有误')
                    return
                }

                const params = {
				    method: 'POST',
				    data: {
					    contractId: this.$route.query.id,
					    isGw: this.$route.query.isGw,
					    mailTo: email
				    }
			    }
                
                this.loading = true

                this.$axios(URL.send_email, params).then(res => {
                    if (res && res.code == 0) {
                        this.loading = false
                        this.warning('邮件已发送，请查收~')
                        this.stepList[0].active = true
                    }
                })
            },

            // 确认邮寄地址
            handleAdress() {
                this.dialogVisible = false
                this.stepList[1].active = true
                this.stepList[2].active = true
            },

            // 下一步
            redirctTo() {

                if (this.stepList[0].active == false) {
                    this.warning('请先获取合同模板')
                    return
                }

                const { isGw, num, id } = this.$route.query

                this.$router.push({ path: '/specialinvoice', query:{ isGw, num, id, } })
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
                background: url(../../assets/images/initbg.png) no-repeat left center;
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
                background: url(../../assets/images/check.png) no-repeat center center;
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
            background: url(../../assets/images/bg.png) no-repeat center center;
            background-size: 100% 100%;
        }
        .step:nth-child(3) .el-col {
            box-sizing: border-box;
            padding-top: 50px;
            line-height: 1.5 !important;
            p:last-child {
                font-size: 24px;
                color: #409EFF;
            }
        }
        .dialog .el-dialog {
            width: 600px;
            box-sizing: border-box;
            padding: 0 40px;
            background: #f5f5f5;
            border-radius: 10px;
            .el-dialog__title {
                line-height: 90px;
                font-size: 32px;
                color: #409EFF;
            }
            .el-dialog__body {
                position: relative;
                background: #fff;
            }
            .city {
                position: absolute;
                left: 0;
                top: -40px;
                width: 144px;
                height: 80px;
                background: url(../../assets/images/city.png) no-repeat center center;
                background-size: 100%;
                text-align: center;
                line-height: 80px;
            }
            .el-row {
                padding: 10px 0;
                font-size: 26px;
                line-height: 1.5;
                .el-col:first-child {
                    text-align: right;
                }
            }
            button {
                width: 360px;
                height: 60px;
                margin-top: 30px;
            }
        }
    }
</style>