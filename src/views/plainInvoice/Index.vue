<template>
    <div class="plain-invoice">
        <p>经系统检测最近180天新签合同如，请确认并选择需要开发票的合同</p>
        <invoice-content ref="contents" />
        <invoice-receipt ref="receipts" />
        <div class='commit' @click="commit"><el-button>确认提交</el-button></div>
    </div>
</template>

<script>
    
    import InvoiceContent from '@/components/InvoiceContent';
    import InvoiceReceipt from '@/components/InvoiceReceipt';
    import { URL } from '@/api/index';
    
    export default {
        methods: {
         
            // 确认提交
            commit() {

                const contents = this.$refs.contents;
                const receipts = this.$refs.receipts;

                if (contents.verify() && receipts.verify()) {
                    
                    const { isGw, context, checked, taxpayerNum, applyPrice, applyPriceList, title } = contents;
                    const { invoiceDetail } = receipts;
                    const params = {
                        method: 'POST',
                        data: {
                            type: 'NORMAL',  
                            contractId: this.$route.query.id,
                            isGw,
                            context,
                            applyPrice,
                            applyPriceList,
                            title,
                            recipientName: invoiceDetail[0].value,
                            recipientPhone: invoiceDetail[1].value,
                            recipientArea: invoiceDetail[2].value,
                            recipientAddress: invoiceDetail[3].value,
                        }
                    };
                    
                    checked && (params.data.taxpayerNum = taxpayerNum);

                    this.$axios(URL.add_invoice, params).then(res => {
                        if (res && res.code == 0) this.$router.push('/success');
                    })
                }
            }
        },
        components: {
            'invoice-content': InvoiceContent,
            'invoice-receipt': InvoiceReceipt
        },
    }
</script>

<style lang="less" scoped>
    .plain-invoice {
        min-height: 100%;
        background: #f5f5f5;
        p {
            width: 100%;
            height: 90px;
            box-sizing: border-box;
            padding: 10px 40px;
            margin-bottom: 30px;
            background: url(../../assets/head-bg.jpg) no-repeat center center;
            background-size: 100% 100%;
            font-size: 26px;
            color: #fff;
        }
        .commit {
            background: #f5f5f5;
        }
    }
</style>