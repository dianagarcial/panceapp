import axios from "axios";
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)


const PanceApi = axios.create({

    baseURL:'http://localhost:4000/api'
    
});

PanceApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    }

    return config;

})


export default PanceApi;
