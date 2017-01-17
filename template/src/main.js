{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import Home from './components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import About from './components/About'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Contact from './components/Contact'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [
  { path: '/home', component: Home, alias: '/' },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
