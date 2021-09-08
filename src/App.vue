<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <CardsTable />
</template>

<script>
import CardsTable from './components/CardsTable.vue'

export default {
  name: 'App',
  components: {
    CardsTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
