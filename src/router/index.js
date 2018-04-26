
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import SelectContract from '@/views/selectContract/Index';
import PlainInvoice from '@/views/plainInvoice/Index';
import Success from '@/views/success/Index';
import InvoiceList from '@/views/invoiceList/Index';

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
		path: '/success',
		name: 'Success',
		component: Success
	}, {
		path: '/invoicelist',
		name: 'InvoiceList',
		component: InvoiceList
	}
];

export default new Router({ routes });