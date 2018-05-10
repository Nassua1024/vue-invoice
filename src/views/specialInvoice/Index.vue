<template>
	<div class="special-invoice">
		<header>
			<h3>专票申请须知</h3>
			<p>申请秦汉胡同增值税专用发票钱，必须先将专用发票下载打印后敲章，并伴随原合同一并寄回。</p>
			<el-button type="primary">查看详情</el-button>
		</header>
		<invoice-content :special="true" ref="contents" />
		<div class="invoice-content">
			<div class="title">开户行信息</div>
			<el-row v-for="item in accountDetail" :key="item.label">
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
		<invoice-receipt ref="receipts" />
		<div class="commit">
			<el-button @click="commit">下一步</el-button>
		</div>
	</div>
</template>

<script>

	import InvoiceContent from '@/components/InvoiceContent';
    import InvoiceReceipt from '@/components/InvoiceReceipt';
	
	export default {
		data() {
			return {
				accountDetail: [
					{
						label: '单位地址',
						value: ''
					}, {
						label: '单位电话',
						value: ''
					},  {
						label: '开户行名称',
						value: ''
					}, {
						label: '开户行账号',
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

			// 下一步
			commit() {
				
				const contents = this.$refs.contents
				const receipts = this.$refs.receipts

				if (contents.verify()) {
					
					const { accountDetail } = this
					
					for (let i = 0; i < accountDetail.length; i++) {
						if (accountDetail[i].value == '') {
							this.waring(`请填写${accountDetail[i].label}`)
							return
						}
					}

					if (receipts.verify()) {
						console.log(contents)
					}
				}
			}
		},
		components: {
			'invoice-content': InvoiceContent,
            'invoice-receipt': InvoiceReceipt
		}
	}

</script>

<style lang="less">
	.special-invoice {
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
		header {
			box-sizing: border-box;
			padding: 20px 30px;
			margin-bottom: 30px;
			text-align: center;
			color: #333;
			h3 {
				line-height: 100px;
				font-size: 30px;
			}
			p {
				margin-bottom: 30px;
				text-align: left;
				line-height: 1.5;
				font-size: 26px;
			}
		}
		.commit {
			position: static !important;
		}
	}
</style>