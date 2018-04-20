
<template>
    <div class="select-wrap">
        <ul>
            <li>[合同1]的总课时：80课时</li>
            <li><label>报名上课的分馆</label><span>世界大道分馆</span></li>
            <li><label>合同的报名时间</label><span>2016/08/24</span></li>
            <li><label>总学费</label><span>18600元</span></li>
            <li><label>实际学费</label><span>14000元</span></li>
        </ul>
    </div>
</template>

<style lang="less">
    .select-wrap {
        width: 100%;
        box-sizing: border-box;
        padding: 30px;
        ul {
            position: relative;
            box-sizing: border-box;
            padding: 0 30px;
            border: 1px solid #DDD;
            &:after {
                position: absolute;
                right: 0;
                top: 0;
                display: block;
                width: 63px;
                height: 63px;
                background: url('../../assets/icon_weixuanzhong.png') no-repeat center center;
                background-size: cover;
                z-index: 9;
                content: '';
            }
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

<script>
    
    import { URL } from '@/api/index';
    
    export default {
        created() {
                        
            const params = { invoiceType: 'SPECIAL' };
            
            this.$get(URL.contract_list, params).then(res => {
                console.log(res);
            });
        }
    };
</script>