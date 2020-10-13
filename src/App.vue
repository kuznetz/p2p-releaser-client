<template>
  <div id="app">
    <div v-if="!connected" class="loader">
      <div style="text-align: center;">
        <b-spinner label="Loading..." style="width: 3rem; height: 3rem;"></b-spinner><br>
        подключение
      </div>
    </div>
    <b-card v-else no-body style="flex: 1;">
      <b-tabs card>
        <b-tab title="Релизы">
          <h1>Релизы</h1>
        </b-tab>

        <b-tab title="Ноды">
          <h1>Ноды</h1>
        </b-tab>

        <b-tab title="Настройки"><!--  no-body !-->
          <h1>Настройки</h1>
        </b-tab>

      </b-tabs>
    </b-card>
  
  </div>
</template>

<script>
import client from './components/client'

export default {
  name: 'App',
  components: {
  },
  data() { return {
    //client: new Vue(client),
    connected: false
  } },
  computed: {
    client() {
      return client
    }
  }
}
</script>

<style lang="sass">
  #app  
    height: 100vh
    display: flex
    flex-direction: column
  .loader
    flex: 1
    display: flex
    align-items: center
    justify-content: center
  .tabs
    flex: 1 1 0%
    display: flex
    flex-direction: column
  .tab-content
    display: flex
    flex: 1
    flex-direction: column
  .tab-pane
    display: flex
    flex: 1
</style>