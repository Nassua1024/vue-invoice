
<template>
    <div class="invoice-list">
        <div class="invoice" v-for="item in invoiceList" :key="item.id">
            <el-row>
                <el-col :span="10">申请时间</el-col>
                <el-col :span="10">{{ new Date(item.createDate).Format('yyyy-MM-dd hh:mm') }}</el-col>
                <el-col :span="4" class="state">{{ item.status }}</el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票类型</el-col>
                <el-col :span="14">{{ item.type }}</el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票内容</el-col>
                <el-col :span="14">{{ item.content }}</el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票抬头</el-col>
                <el-col :span="14">{{ item.title }}</el-col>
            </el-row>
            <el-row>
                <el-col :span="10">发票金额</el-col>
                <el-col :span="14">{{ item.applyprice }}元</el-col>
            </el-row>
            <el-row class="price" v-for="(price, index) in item.prices" :key="index">
                <el-col :span="10">发票金额1</el-col>
                <el-col :span="14">{{ price }}元</el-col>
            </el-row>
            <el-row class="note" v-if="item.note">
                <el-col :span="10">备注</el-col>
                <el-col :span="14">{{ item.note }}</el-col>
            </el-row>
            <el-row class="btn">
                <el-col 
                    :span="item.btnType.length > 1 ? 12 : 24" 
                    v-for="(btn,index) in item.btnType" 
                    :key="index"
                >
                    <el-button 
                        @click="redirctTo"
                        :class="item.btnType.length == 1 ? 'large' : ''" 
                        :type="btn.type" 
                        plain
                    >
                        {{ btn.txt }}
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

    import { URL } from '@/api/index'

    export default {
        data() {
            return {
                invoiceList: []
            }
        },
        created() {
            this.$axios(URL.invoice_list).then(res => {
                if (res && res.code == 0) {
                    this.invoiceList = res.data.list.map(item => {
                        
                        let btnType = []
                        const { id, createDate, status, type, content, title, applyprice, prices, note } = item
                        
                        if (item.invoiceStatus == 'NO_PAY') {
                            btnType = [{ txt: '放弃申请', type: 'warning' }, { txt: '去支付', type: 'success'}]
                        }
                        
                        if (item.invoiceStatus == 'WAIT' && !(item.fromInvoiceId == 0 && item.type == 'NORMAL')) {
                            btnType = [{ txt: '查看快递信息', type: 'info' }]
                        }
                        
                        if (item.invoiceStatus == 'OPENED_REPLACE' || item.invoiceStatus == 'FAIL') {
                           btnType = [{ txt: '查看快递信息', type: 'info' }]
                        }

                        if (item.invoiceStatus == 'OPENED') {
                            const time = (new Date().getTime() - new Date(_receipts[i].createDate).getTime()) / (24*60*60*1000)
                            if (item.fromInvoiceId != 0 || _time > 30 || (item.invoiceType == 'NORMAL' && !item.reopenSpecial)) {
                                btnType = [{ txt: '查看快递信息', type: 'info' }]
                            } else {
                                btnType = [{ txt: '查看快递信息', type: 'info' }, { txt: '查看快递信息', type: 'primary' }]
                            }
                        }

                        return { id, createDate, status, type, content, title, applyprice, prices, note, btnType }
                    })
                }
            })
        }, 
        methods: {
            redirctTo() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .invoice-list {
        min-height: 100%;
        box-sizing: border-box;
        padding: 40px;
        background: #f5f5f5;
        .invoice {
            box-sizing: border-box;
            padding: 20px 20px 30px;
            margin-bottom: 40px;
            background: #fff;
            border-radius: 10px;
            .el-row {
                box-sizing: border-box;
                padding-left: 30px;
                line-height: 60px;
                font-size: 26px;
            }
            .state {
                color: #f87f4a;
            }
            .price {
                font-size: 22px;
                height: 40px;
                line-height: 40px;
            }
            .note {
                padding: 15px 0 15px 30px;
                line-height: 1.5;
            }
            .btn {
                margin-top: 10px;
                padding-left: 0;
                padding-top: 30px;
                border-top: 1px solid #ddd;
                text-align: center;
                button {
                    width: 260px;
                    height: 100%;
                    text-align: center;
                    line-height: 40px;
                }
                .large {
                    width: 520px;
                }
            }
        }
    }
</style>