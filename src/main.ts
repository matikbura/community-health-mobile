import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from "~/router";
createApp(App).use(router).use(Vant).mount('#app')
