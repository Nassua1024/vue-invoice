<template>
    <div class="invoice-content">
        <el-row>
            <el-col :span="10">发票内容</el-col>
            <el-col :span="14">{{ handleContext }}</el-col>
        </el-row>
        <el-row v-if="!this.special">
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
                    :value="title"
                    @change="e => title = e"
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
                <el-button type="primary" @click="applyPriceList.push(0)">申请多张</el-button>
            </el-col>
        </el-row>
        <el-row v-for="(item, index) in applyPriceList" :key="index">
            <el-col :span="10">开票金额{{ index + 1 }}</el-col>
            <el-col :span="applyPriceList.length > 1 ? 10 : 14" class="iput">
                <el-input
                    clearable
                    type="Number"
                    placeholder="请输入大于1500元金额"
                    :value="item == 0 ? '' : item"
                    @change="e => applyPriceList[index] = Number(e)"
                    @blur="e => handleBlur(e)"
                />
            </el-col>
            <el-col :span="4" class="btn" v-if="applyPriceList.length > 1">
                <el-button type="primary" @click="applyPriceList.splice(index, 1)">删除</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    import { URL } from '@/api/index';
    
    export default {
        props: ['special'],
        data() {
            return {
                isGw: this.$route.query.isGw,
                context: '',
                checked: this.special ? true : false, // 是否选中企业
                taxpayerNum: '', // 纳税人识别号
                priceTotal: this.$route.query.num, // 可开金额
                title: '', // 发票抬头
                applyPrice: 0, // 开票总金额
                applyPriceList: [0], // 开票金额
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
                this.applyPriceList.map(item => { applyPrice += item; });
                this.applyPrice = applyPrice;

                if (e.target.value && e.target.value < 1500) {
                    this.waring('开票金额低于1500元');
                    return;
                }

                if (applyPrice > this.priceTotal) {
                    this.waring('开票金额大于可开金额');
                    return;
                }
            },

            // 校验
            verify() {
                
                let applyPrice = 0;
                const { title, checked, taxpayerNum, applyPriceList } = this; 

                if (title == '') {
                    this.waring('请填写发票抬头');
                    return;
                }

                if (checked && taxpayerNum == '') {
                    this.waring('请填写纳税人识别号');
                    return;
                }

                for (let i=0; i< applyPriceList.length; i++) {
                    if (applyPriceList[i] < 1500) {
                        this.waring(`开票金额${i+1}低于1500元`);
                        return;
                    }
                    applyPrice += applyPriceList[i];
                }

                return true;
            }
        },
    }
</script>

<style lang="less">
    .invoice-content {
        .el-row .btn {
            padding-right: 30px;
            text-align: right;
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
    }
</style>