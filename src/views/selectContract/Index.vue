
<template>
    <div class="contract-list" 
        v-loading.fullscreen.lock="loading"
        element-loading-text="数据加载中..."
    >
        <ul 
            v-for='item in contractList' 
            :key='item.contractId'
            :class='{ active: item.isSelect }'
            @click='handleSelect(item.contractId, item.lessPrice, item.isGw, item.storeId)'
        > 
            <li>[合同1]的总课时：{{ item.lessonCnt }}课时</li>
            <li>
                <label>报名上课的分馆</label>
                <span>{{ item.storeName }}</span>
            </li>
            <li>
                <label>合同的报名时间</label>
                <span>{{ new Date(item.contractDate).Format('yyyy-MM-dd') }}</span>
            </li>
            <li>
                <label>总学费</label>
                <span>{{ item.totalTuition }}</span>
            </li>
            <li>
                <label>实际学费</label>
                <span>{{ item.actualAmt }}</span>
            </li>
        </ul>
        <div class='commit'><el-button @click='redirctTo'>下一步</el-button></div>
    </div>
</template>

<script>

    import { URL } from '@/api/index';
    
    export default {
        data() {
            return {
                loading: true,
                contractList: [], // 合同列表
                isGw: false, // 是否属于国文
                selectId: null, // 合同Id
                storeId: null, // 分馆Id
                pricePrice: 0, // 价格
                type: this.$route.query.type
            };
        },
        created() {

            // 合同列表
            const params = { data: { invoiceType: this.type } };

            this.$axios(URL.contract_list, params).then(res => {
                if(res && res.code == 0) {
                    this.contractList = res.data.list.map(item => {
                        this.loading = false;
                        const isSelect = false;
                        const { lessonCnt, storeName, contractDate, totalTuition, actualAmt, contractId, lessPrice, company, storeId } = item;
                        let isGw = company == '国文' ? true : false;
                        return { lessonCnt, storeName, contractDate, totalTuition, actualAmt, contractId, lessPrice, isSelect, isGw, storeId };
                    })
                }
            });
        },
        methods: {

            // 选择合同
            handleSelect(id, price, isGw, storeId) {
                this.contractList.forEach(item => {
                    item.isSelect = id == item.contractId ? true : false;
                    this.isGw = isGw;
                    this.selectId = id;
                    this.storeId = storeId;
                    this.pricePrice = price;
                    return;
                })
            },

            // 确定
            redirctTo() {
                
                const { selectId, storeId, pricePrice, isGw, type } = this;

                if(selectId == null) {
                    this.$message({
                        message: '请选择合同',
                        type: 'warning',
                        duration: 1500
                    });
                    return;
                }
                
                const route = {
                    query: { 
                        isGw,
                        num: pricePrice, 
                        id: selectId 
                    }
                };

                if (type == 'NORMAL') {
                    route.path = '/plaininvoice';
                } else {
                    route.path = '/checkinfo';
                    route.query.storeId = storeId;
                }
                
                this.$router.push(route);
            }
        }
    };
</script>

<style lang="less" scoped>
    .contract-list {
        width: 100%;
        min-height: 100%;
        box-sizing: border-box;
        padding: 30px;
        background: #f5f5f5;
        ul {
            position: relative;
            box-sizing: border-box;
            margin-bottom: 30px;
            padding: 0 30px;
            background: #fff;
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