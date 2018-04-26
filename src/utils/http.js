
import axios from 'axios';
import { encode, formJsonData } from './base';

axios.defaults.baseURL = 'http://invoice.test.shbaoyuantech.com/';

if(window.location.hostname.includes('localhost'))
	axios.defaults.headers['Authorization'] = 'Bearer ' + encode('2242ab11-2d4a-4a5b-88ef-3fcb2c0dbf29');

const ajax = (url, params = {}) => {

	let { method, formData, data } = params;
	let headers = { 'Content-type': 'application/json; chartset=UTF-8'};

	method = method ? method : 'GET';
	url = method == 'GET' ? url + (data ? '?' + formJsonData(data) : '') : url;
	data = method == 'GET' ? {} : JSON.stringify(data);
	headers['Content-type'] = formData ? 'application/x-www-form-urlencoded' : 'application/json; chartset-UTF-8';

	return new Promise((resolve, reject) => {
		axios({
			url,
			method,
			headers,
			data
		})
		.then(res => {
			resolve(res.data);
		})
	})
}

export { ajax };