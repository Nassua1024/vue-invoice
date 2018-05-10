<template>
    <div class="invoice-content">
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
</template>

<script>
    export default {
        data() {
            return {
                invoiceDetail: [ 
                    { 
                        label: '收件人姓名', 
                        value: '' 
                    }, { 
                        label: '联系方式', 
                        value: '' 
                    }, { 
                        label: '所在区域', 
                        value: '' 
                    }, { 
                        label: '详细地址', 
                        value: '' 
                    }
                ]
            }
        },
        methods: {

            // message 警告
            waring(txt) {
                this.$message({
                    message: txt,
                    type: 'warning',
                    duration: 1500
                })
            },

            // 校验
            verify() {
                
                const { invoiceDetail } = this
                
                for (let i = 0; i < invoiceDetail.length; i++) {
                    if (invoiceDetail[i].value == '') {
                        this.waring(`请填写${invoiceDetail[i].label}`)
                        return
                    }
                }

                return true;
            }
        }
    }
</script>