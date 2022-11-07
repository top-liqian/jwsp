import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GSIcon from '@lego-service-packages/components/icon'

const plugins = [GSIcon]
const app = createApp(App)
plugins.forEach(comp => {
    app.use(comp)
})

app.mount('#app')
