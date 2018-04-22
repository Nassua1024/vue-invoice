
import axios from 'axios';
import { encode } from './base';

axios.defaults.baseURL = 'http://invoice.test.shbaoyuantech.com/';
axios.defaults.headers['Authorization'] = 'Bearer ' + encode('beadf8a8-2a38-4e46-8197-ed1896d75665');
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