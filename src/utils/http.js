
import axios from 'axios';
import { encode } from './base';

<<<<<<< Updated upstream
axios.defaults.baseURL = 'http://invoice.test.shbaoyuantech.com/';
<<<<<<< HEAD
axios.defaults.headers['Authorization'] = 'Bearer ' + encode('2242ab11-2d4a-4a5b-88ef-3fcb2c0dbf29');
=======
axios.defaults.headers['Authorization'] = 'Bearer ' + encode('2c67c71a-dc7e-4061-80bc-af3d4995abf1');
>>>>>>> d861d062dc6b953f736a3bc49c0dc1e5797bfd74
axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8';
=======
if (window.location.hostname.includes('localhost')) 
	axios.defaults.baseURL = 'http://invoice.test.shbaoyuantech.com/';
else 
	axios.defaults.baseURL = settings.MOCK_URL;
>>>>>>> Stashed changes

export function ajax(url, options) {

	let { data } = options;
	const { formData, method, params, responsetype } = options;
	const instance = { url, headers: { 'Content-Type': 'application/json chartset=UTF-8' } };
	
	instance.headers['Content-Type'] = formData ? 'application/x-www-form-urlencode' : 'application/json chartset=UTF-8';
	instance.headers['Authorization'] = 'Bearer ' + encode('2c67c71a-dc7e-4061-80bc-af3d4995abf1');
	instance.method = method ? method : 'GET';
	
	data = formData ? formJsonData(data) : JSON.stringify(data);

	console.log(data)
  	axios({
		instance,
   	 	responsetype: responsetype ? responsetype : 'json',
    	data: data
	})
	.then(response => {
    	if (response.code == 0) {
    		options.callback && options.callback(response);
    	}
      	options.completed && options.completed();
    })
    .catch(error => {
      	options.completed && options.completed();
      	throw new Error(error);
    })
}

function formJsonData(data) {
	let str = '';
	for (let i in data) {
		if (data.hasOwnProperty(i)) {
			str = str + i + "=" + data[i] + '&';
		}
	}
	return (str ? str.substring(0, str.length - 1) : '');
};