import Vue from 'vue'

// plugins
import Multiselect from 'vue-multiselect'
import Loading from 'vue-loading-overlay'
import VueSwal from 'vue-swal'
import VueContentPlaceholders from 'vue-content-placeholders'
import VueToast from 'vue-toast-notification'

// stylesheets
import 'vue-multiselect/dist/vue-multiselect.min.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'vue-toast-notification/dist/theme-default.css'

Vue.prototype.$eventBus = new Vue()

// usage/registration
Vue.component('multiselect', Multiselect)
Vue.component('loading', Loading)
Vue.use(VueContentPlaceholders)
Vue.use(VueSwal)
Vue.use(VueToast)
