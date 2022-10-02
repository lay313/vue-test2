<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {}
  },
  methods: {
    async login() {
      const { data } = await axios.post('/api/authentication/login', {
        username: 'test',
        password: '123456'
      })
      console.log(data)
    }
  },
  mounted() {
    this.login();
  }
}
</script>

<template>
  <div>
    123
  </div>
</template>

<style>

</style>
