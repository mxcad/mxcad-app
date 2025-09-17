import { createApp } from 'vue'
import "./draw"
import { mxcadApp } from "mxcad-app"

import App from './App.vue'

import "mxcad-app/style"

const app = createApp(App)

mxcadApp.getVuetify().then((vuetify) => {
    app.use(vuetify).mount("#app")
})






