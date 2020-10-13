import Vue from 'vue'

const client = {
  name: 'client',
  render() { return null },
  components: {},
  data() { return {
    connected: false
  } },
  created() {
      alert('created')
  }
}

export default new Vue(client)