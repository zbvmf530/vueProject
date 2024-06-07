import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
// 전역 컴포넌트 등록
//.component(PageTitle)
.mount('#app')
