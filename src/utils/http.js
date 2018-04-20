
import axios from 'axios';
import { encode } from './base';

axios.defaults.baseURL = 'http://invoice.test.shbaoyuantech.com/';
axios.defaults.headers['Authorization'] = 'Bearer ' + encode('b8343a96-d63c-436e-a85d-3e48cff280a9');
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