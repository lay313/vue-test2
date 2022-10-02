<script>
export default {
  components: {
    'login': () => import('@/views/login/Login.vue')
  }
}
</script>

<template>
  <div id="app">
    <login />
  </div>
</template>

<style>

</style>
