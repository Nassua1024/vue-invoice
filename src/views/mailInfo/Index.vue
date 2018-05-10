<template>
    <div class="invoice-content mail-info">
        <div class="title">原文件邮寄信息</div>
        <el-row v-for="(item, index) in mailDetail" :key="index">
            <el-col :span="10">{{ item.label }}</el-col>
            <el-col :span="14">{{ item.value }}</el-col>
        </el-row>
        <el-row>
            <el-col :span="10">快递公司</el-col>
            <el-col :span="14">
                <el-select v-model="expressName" placeholder="请选择快递公司">
                    <el-option
                        v-for="item in expressList"
                        :key="item.label"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">快递单号</el-col>
            <el-col :span="14">
                <el-input 
                    clearable 
                    placeholder="请填写快递单号"
                    v-model="expressCode"
                />
            </el-col>
        </el-row>
        <div class="commit">
            <el-button type="primary" @click="commit">确认提交</el-button>
        </div>
    </div>
</template>

<script>

    import { URL } from '@/api/index'

    export default {
        data() {
            return {
                mailDetail: [
                    {
                        label: '收件人公司',
                        value: 'aaa'
                    }, {
                        label: '收件人姓名',
                        value: 'aaa'
                    }, {
                        label: '联系方式',
                        value: 'aaa'
                    }, {
                        label: '所在地区',
                        value: 'aaa'
                    }, {
                        label: '详细地址',
                        value: 'aaa'
                    }
                ],
                expressList: [],
                expressName: '', // 选中快递公司
                expressCode: '' // 快递单号
            }
        },
        created() {

            // 获取快递单号
            this.$axios(URL.select_express).then(res => {
                if (res && res.code == 0) 
                    this.expressList = res.data.list.map(({ name: label, shortName: value }) => ({ label, value }))
            })
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

            // 确认提交
            commit() {
                
                const { expressName, expressCode } = this

                if (expressName == '') {
                    this.waring('请选择快递公司')
                    return
                }

                if (expressCode == '') {
                    this.waring('请填写快递单号')
                    return
                }
            }
        }
    }
</script>

<style lang="less">
    .mail-info {
        height: 100%;
        background: #f5f5f5;
        .el-select {
            width: 100%;
        }
    }
</style>