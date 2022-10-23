<template>
  <div id="app">
    <!-- <login /> -->
    <router-view></router-view>
  </div>
</template>

<script>
/* import login from './views/login.vue'
import home from './views/home.vue'
import main from './views/guanli.vue' */

export default {
  name: 'app'
  /* components: {
    'login': () => import('@/views/login.vue'),
    'home': () => import('@/views/home.vue'),
    'register': () => import('@/views/register.vue')
  } */
}
</script>

<style>

</style>
