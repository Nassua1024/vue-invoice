import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import SelectContract from '@/views/selectContract/Index'
import PlainInvoice from '@/views/plainInvoice/Index'
import SpecialInvoice from '@/views/specialInvoice/Index'
import Success from '@/views/success/Index'
import InvoiceList from '@/views/invoiceList/Index'
import ChangeInvoice from '@/views/changeInvoice/Index'
import CheckInfo from '@/views/checkInfo/Index'
import MailInfo from '@/views/mailInfo/Index'

Vue.use(Router);

var routes = [
	{
  		path: '/',
  		name: 'Index',
  		component: Index
	}, {
		path: '/selectcontract',
		name: 'SelectContract',
		component: SelectContract
	}, {
		path: '/plaininvoice',
		name: 'PlainInvoice',
		component: PlainInvoice
	}, {
		path: '/specialInvoice',
		name: 'SpecialInvoice',
		component: SpecialInvoice
	}, {
		path: '/success',
		name: 'Success',
		component: Success
	}, {
		path: '/invoicelist',
		name: 'InvoiceList',
		component: InvoiceList
	}, {
		path: '/changeinvoice',
		name: 'ChangeInvoice',
		component: ChangeInvoice
	}, {
		path: '/checkinfo',
		name: 'ChaeckInfo',
		component: CheckInfo
	}, {
		path: '/mailinfo',
		name: 'MailInfo',
		component: MailInfo
	}
]

export default new Router({ routes })
