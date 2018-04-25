
<template>
    <div class="select-wrap">
        <ul 
            v-for='item in contractList' 
            :key='item.contractId'
            :class='{ active: item.isSelect }'
            @click='handleSelect(item.contractId)'
        > 
            <li>[合同1]的总课时：{{ item.lessonCnt }}课时</li>
            <li><label>报名上课的分馆</label><span>{{ item.storeName }}</span></li>
            <li><label>合同的报名时间</label><span>{{ new Date(item.contractDate).Format('yyyy-MM-dd') }}</span></li>
            <li><label>总学费</label><span>{{ item.totalTuition }}</span></li>
            <li><label>实际学费</label><span>{{ item.actualAmt }}</span></li>
        </ul>
        <div class='commit'><el-button @click='redirctTo'>下一步</el-button></div>
    </div>
</template>

<script>

    import { URL } from '@/api/index';
    
    export default {
        data() {
            return {
                contractList: [],
                selectId: null
            };
        },
        created() {

            // 合同列表
            const params = { invoiceType: 'NORMAL' };

            this.$get(URL.contract_list, params).then(res => {
                if(res && res.code == 0) {
                    this.contractList = res.data.list.map(item => {
                        const { lessonCnt, storeName, contractDate, totalTuition, actualAmt, contractId } = item;
                        const isSelect = false;
                        return { lessonCnt, storeName, contractDate, totalTuition, actualAmt, contractId, isSelect };
                    })
                }
            });
        },
        methods: {
            handleSelect(id) {
                this.contractList.forEach(item => {
                    item.isSelect = id == item.contractId ? true : false;
                    this.selectId = id;
                    return; 
                })
            },

            redirctTo() {
                
                const { selectId } = this;

                if(selectId == null) {
                    this.$message({
                        message: '请选择合同',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }
                
                this.$router.push({path: '/plainInvoice', query: { id: selectId } });
            }
        }
    };
</script>

<style lang="less" scoped>
    .select-wrap {
        width: 100%;
        box-sizing: border-box;
        padding: 30px;
        ul {
            position: relative;
            box-sizing: border-box;
            padding: 0 30px;
            margin-bottom: 30px;
            border: 1px solid #DDD;
            &:after {
                position: absolute;
                right: 0;
                top: 0;
                display: block;
                width: 63px;
                height: 63px;
                background: url(../../assets/icon_weixuanzhong.png) no-repeat center center;
                background-size: cover;
                z-index: 9;
                content: '';
            }
            &.active:after {
                background: url(../../assets/icon_xuanzhong.png) no-repeat center center;
                background-size: cover;
            }
        }
        ul.active {
            border-color: #4e5d8c;
        }
        li {
            padding: 0 10px;
            height: 60px;
            line-height: 60px;
            font-size: 26px;
            color: #333;
            label {
                display: inline-block;
                width: 300px;
            }
        }
        li:nth-child(1) {
            height: 63px;
            border-bottom: 1px solid #ddd;
            line-height: 63px;
            font-size: 28px;
            font-weight: 700;
            color: #4e5d8c;
        }
    }
</style>