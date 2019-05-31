<template>
  <div id="app">
    <Forecast/>
  </div>
</template>

<script>
import Forecast from '@/components/forecast'

export default {
  name: 'App',
  components: {
    Forecast
  }
}
</script>

<style lang="scss">
@import './assets/all';
</style>
