import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueAxios from 'vue-axios';
axios.defaults.baseURL='http://localhost:4000/api'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
    .use(router)
    .use(store)
    .use(VueSweetalert2)
    .use(VueAxios, axios)
    .mount('#app')
