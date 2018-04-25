
import axios from 'axios';
import { encode } from './base';

axios.defaults.baseURL = 'http://invoice.test.shbaoyuantech.com/';
<<<<<<< HEAD
axios.defaults.headers['Authorization'] = 'Bearer ' + encode('2242ab11-2d4a-4a5b-88ef-3fcb2c0dbf29');
=======
axios.defaults.headers['Authorization'] = 'Bearer ' + encode('2c67c71a-dc7e-4061-80bc-af3d4995abf1');
>>>>>>> d861d062dc6b953f736a3bc49c0dc1e5797bfd74
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