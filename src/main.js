import { createApp } from 'vue'
import App from './App.vue'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'


import 'v-tooltip/dist/v-tooltip.css'

const app = createApp(App)
app.directive('tooltip', VTooltip)
app.directive('close-popover', VClosePopover)
app.component('v-popover', VPopover)

app.mount('#app')
