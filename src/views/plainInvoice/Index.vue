<template>
    <div class="plain-invoice">
        <p>经系统检测最近180天新签合同如，请确认并选择需要开发票的合同</p>
        <div class="content">
            <el-row>
                <el-col :span="10">发票内容</el-col>
                <el-col :span="14">{{ handleContext }}</el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票类型</el-col>
                <el-col :span="14">
                    <el-switch
                        v-model="checked"
                        :width="40"
                        active-text="企业"
                        inactive-text="个人"
                    />
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票抬头</el-col>
                <el-col :span="14">
                    <el-input
                        clearable
                        placeholder="请填写发票抬头"
                        :value="invoiceTitle"
                        @change="e => invoiceTitle = e"
                    />
                </el-col>
            </el-row>
            <el-row v-if="checked">
                <el-col :span="10">纳税人识别号</el-col>
                <el-col :span="14">
                    <el-input
                        clearable
                        type="Number"
                        placeholder="请填写纳税人识别号"
                        :value="taxpayerNum"
                        @change="e => taxpayerNum = e"
                    />
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票金额</el-col>
                <el-col :span="8">{{ priceTotal }}元</el-col>
                <el-col :span="6" class="btn"> 
                   <el-button type="primary" @click="priceList.push(0)">申请多张</el-button>
                </el-col>
            </el-row>
            <el-row v-for="(item, index) in priceList" :key="index">
                <el-col :span="10">开票金额{{ index + 1 }}</el-col>
                <el-col :span="priceList.length > 1 ? 10 : 14" class="iput">
                    <el-input
                        clearable
                        type="Number"
                        placeholder="请输入大于1500元金额"
                        :value="item == 0 ? '' : item"
                        @change="e => priceList[index] = Number(e)"
                        @blur="e => handleBlur(e)"
                    />
                </el-col>
                <el-col :span="4" class="btn" v-if="priceList.length > 1">
                    <el-button type="primary" @click="priceList.splice(index, 1)">删除</el-button>
                </el-col>
            </el-row>
            <div class="title">发票收件信息</div>
            <el-row v-for="item in invoiceDetail" :key="item.label">
                <el-col :span="10">{{ item.label }}</el-col>
                <el-col :span="14">
                    <el-input
                        clearable
                        :placeholder="'请输入' + item.label"
                        @change="e => item.value = e"
                    />
                </el-col>
            </el-row>
        </div>
        <div class='commit' @click="commit"><el-button>确认提交</el-button></div>
    </div>
</template>

<script>

    import { URL } from '@/api/index';
    
    export default {
        data() {
            return {
                isGw: this.$route.query.isGw,
                context: '',
                checked: false, // 是否选中企业
                taxpayerNum: '', // 纳税人识别号
                priceTotal: this.$route.query.num, // 可开金额
                invoiceTitle: '', // 发票抬头
                applyPrice: 0, // 开票总金额
                priceList: [0], // 开票金额
                invoiceDetail: [ 
                    { label: '收件人姓名', value: '' },
                    { label: '联系方式', value: '' },
                    { label: '所在区域', value: '' },
                    { label: '详细地址', value: '' },
                ]
            }
        },
        computed: {
            handleContext() {
                this.context = this.isGw ? '文化类培训费' : '艺术类培训费';
                return this.context;
            }
        },
        methods: {
            
            // message 警告
            waring(txt) {
                this.$message({
                    message: txt,
                    type: 'warning',
                    duration: 1500
                });
            },

            // 判断开票金额
            handleBlur(e) {

                let applyPrice = 0;
                this.priceList.map(item => { applyPrice += item; });
                this.applyPrice = applyPrice;

                if (e.target.value < 1500) {
                    this.waring('开票金额低于1500元');
                    return false;
                }

                if (applyPrice > this.priceTotal) {
                    this.waring('开票金额大于可开金额');
                    return;
                }
            },

            // 确认提交
            commit() {

                let applyPrice = 0;
                const { isGw, context, invoiceTitle, checked, taxpayerNum, priceList, invoiceDetail } = this;
                
                if (invoiceTitle == '') {
                    this.waring('请填写发票抬头');
                    return;
                }

                if (checked && taxpayerNum == '') {
                    this.waring('请填写纳税人识别号');
                    return;
                }

                for (let i=0; i< priceList.length; i++) {
                    if (priceList[i] < 1500) {
                        this.waring(`开票金额${i+1}低于1500元`);
                        return;
                    }
                    applyPrice += priceList[i];
                }

                for (let i=0; i<invoiceDetail.length; i++) {
                    if (invoiceDetail[i].value == '') {
                        this.waring(`请填写${invoiceDetail[i].label}`);
                        return;
                    }
                }
                
                const params = {
                    method: 'POST',
                    data: {
                        isGw,
                        type: this.$route.query.type,   
                        context,
                        contractId: this.$route.query.id,
                        applyPrice,
                        applyPriceList: priceList,
                        title: invoiceTitle,
                        recipientName: invoiceDetail[0].value,
                        recipientPhone: invoiceDetail[1].value,
                        recipientArea: invoiceDetail[2].value,
                        recipientAddress: invoiceDetail[3].value,
                    }
                };

                checked && (params.data.taxpayerNum = taxpayerNum);

                this.$axios(URL.add_invoice, params).then(res => {
                    if (res && res.code == 0) {
                        this.$router.push('/success');
                    }
                })
            }
        },
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
                .el-col {
                    height: 100%;
                }
                .el-col:first-child {
                    text-indent: 50px;
                }
                .btn {
                    padding-right: 30px;
                    text-align: right;
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
                    padding: 0;
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