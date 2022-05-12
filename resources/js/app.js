import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import Layout from './shared/Layout'
import LitepieDatepicker from 'litepie-datepicker';
import { ZiggyVue } from 'ziggy';
import { Ziggy } from './ziggy';

createInertiaApp({
  resolve: name => {
    let page = require(`./Pages/${name}`).default
    
    if (!page.layout) {
      page.layout = Layout
    }
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .use(LitepieDatepicker)
      .component('Link', Link)
      .mount(el)
  },
})