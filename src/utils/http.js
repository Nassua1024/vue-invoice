
import axios from 'axios';
import { encode } from './base';

axios.defaults.baseURL = 'http://invoice.test.shbaoyuantech.com/';
axios.defaults.headers['Authorization'] = 'Bearer ' + encode('2c67c71a-dc7e-4061-80bc-af3d4995abf1');
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