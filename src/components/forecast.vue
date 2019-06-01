<template>
  <div class="container text-center text-light">
    <div class="background" :style="{'background-image': 'url(' + backgroundImg + ')'}"></div>
    <h1 class="display-4 pt-5">天氣預報</h1>
    <div class="form-group mt-4 mb-1">
      <label for="city">請輸入愈查詢的<strong>城市名稱</strong></label>
      <input neme="cuty" id="city" type="text" class="form-control col-10 col-md-6 mx-auto" placeholder="London, New York, Paris..."
      v-model="city" @keyup.enter="search">
      <button type="submit" id="submitCity" class="btn btn-light mt-3"
      @click="search">查  詢</button>
    </div>
    <div class="hint">
      <p class="transition text-danger"
      :class="{'hide': !isNoCity}">請輸入城市名稱</p>
      <p class="transition text-danger"
      :class="{'hide': !isFail}">沒有您所查詢城市的資料</p>
    </div>
    <Window class="transition col-12 col-md-8 mb-5"
    :class="{'hide': !showWeather}" :weatherData="weatherData"/>
  </div>
</template>

<script>
import Window from './forecast-window'

export default {
  data () {
    return {
      isNoCity: false,
      isFail: false,
      showWeather: false,
      city: '',
      backgroundImg: '../static/img/background.jpg',
      weatherData: {}
    }
  },
  methods: {
    getWeather (city) {
      const vm = this
      const api = `${process.env.APIPATH}&q=${city}`
      this.$http.get(api).then(response => {
        vm.weatherData = response.data
        vm.showWeather = true
        vm.isFail = false
        vm.isNoCity = false
        localStorage.setItem('city', vm.city)
      }).catch(() => {
        this.isFail = true
        this.isNoCity = false
        this.showWeather = false
      })
    },
    search () {
      if (this.city === '') {
        this.isNoCity = true
        this.isFail = false
        this.showWeather = false
      } else {
        this.getWeather(this.city)
      }
    }
  },
  created () {
    this.city = localStorage.getItem('city')
    if (this.city != null) {
      this.getWeather(this.city)
    }
  },
  components: {
    Window
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/all';

.transition {
  transition: all 1s;
}
.hide {
  opacity: 0
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -5;
  width: 100%;
  height: 100vh;
  @include bg-cover;
}
.btn {
  font-weight: 600;
}
.hint {
  position: relative;
  p:nth-child(2) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
