
import axios from 'axios';
import { encode } from './base';

axios.defaults.baseURL = 'http://invoice.test.shbaoyuantech.com/';
axios.defaults.headers['Authorization'] = 'Bearer ' + encode('2242ab11-2d4a-4a5b-88ef-3fcb2c0dbf29');
axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8';

const get = (url, params = {}) => {
	return new Promise((resolve, reject) => {
	  	axios.get(url, { params })
	  	.then(res => {
			resolve(res.data);
	  	})
	  	.catch(err => {
			reject(err);
	  	});
	});
};

export { get };