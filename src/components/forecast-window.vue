<template>
  <div class="window container text-dark">
    <h2>{{ weatherData.name }}</h2>
    <div class="row justify-content-center mb-5">
      <div class="col-6 col-md-5 align-self-center">
        <p class="weather-icon mb-1">
          <i class="wi"
          :class="'wi-' + weatherDesc(weatherData.weather[0].description)"></i>
        </p>
        <p class="temp-range">
          {{ weatherData.main.temp_min | degreeFilter }}
          {{ ' ~ ' }}
          {{ weatherData.main.temp_max | degreeFilter }}
        </p>
      </div>
      <div class="col-6 col-md-5 align-self-center">
        <p class="temp">
          {{ weatherData.main.temp | degreeFilter }}
        </p>
        <p class="description">
          {{ weatherData.weather[0].description }}
        </p>
        <div class="info row justify-content-center">
          <div class="col-6 col-md-5">
            <i class="wi wi-humidity"></i>
            <span>{{ ` ${weatherData.main.humidity} %` }}</span>
          </div>
          <div class="col-6">
            <i class="wi wi-wind wi-from-e" :class="'wi-towards-' + windDirection(weatherData.wind.deg)"></i>
            <span>{{ ` ${weatherData.wind.speed} m/s` }}</span>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <h5 class="mt-4 mb-3">逐三小時預測</h5>
    <canvas id="threeHChart"></canvas>
    <div class="three-h row">
      <div class="col-2" v-for="forecast in forecastData.list" :key="forecast.dt">
        <i class="wi mb-2"
          :class="'wi-' + weatherDesc(forecast.weather[0].description)"></i>
        <p>
          {{ forecast.main.temp | degreeFilter }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  props: {
    weatherData: {
      type: Object
    }
  },
  data () {
    return {
      forecastData: {}
    }
  },
  methods: {
    getForecast () {
      const vm = this
      const api = `${process.env.FORECASTAPIPATH}&q=${this.weatherData.name}`
      this.$http.get(api).then(response => {
        vm.forecastData = response.data
        vm.drawChart()
      })
    },
    weatherDesc (description) {
      const desc = description
      if (desc === 'clear sky') {
        return 'day-sunny'
      } else if (desc === 'scattered clouds') {
        return 'cloud'
      } else if (desc === 'broken clouds' || desc === 'overcast clouds') {
        return 'cloudy'
      } else if (desc === 'light rain') {
        return 'showers'
      } else if (desc.indexOf('snow') >= 0) {
        return 'snow'
      } else if (desc === 'few clouds') {
        return 'day-cloudy'
      } else if (desc === 'moderate rain' || desc === 'heavy intensity rain') {
        return 'rain'
      } else if (desc === '') {
        return ''
      }
    },
    windDirection (deg) {
      if (deg >= 348.75 || deg < 11.25) {
        return 'n'
      } else if (deg >= 11.25 || deg < 33.75) {
        return 'nne'
      } else if (deg >= 33.75 || deg < 56.25) {
        return 'ne'
      } else if (deg >= 56.25 || deg < 78.75) {
        return 'ene'
      } else if (deg >= 78.75 || deg < 101.25) {
        return 'e'
      } else if (deg >= 101.25 || deg < 123.75) {
        return 'ese'
      } else if (deg >= 123.75 || deg < 146.25) {
        return 'se'
      } else if (deg >= 146.25 || deg < 168.75) {
        return 'sse'
      } else if (deg >= 168.75 || deg < 191.25) {
        return 's'
      } else if (deg >= 191.25 || deg < 213.75) {
        return 'ssw'
      } else if (deg >= 213.75 || deg < 236.25) {
        return 'sw'
      } else if (deg >= 236.25 || deg < 258.75) {
        return 'wsw'
      } else if (deg >= 258.75 || deg < 281.25) {
        return 'w'
      } else if (deg >= 281.25 || deg < 303.75) {
        return 'wnw'
      } else if (deg >= 303.75 || deg < 326.25) {
        return 'nw'
      } else {
        return 'nnw'
      }
    },
    drawChart () {
      const ctx = document.getElementById('threeHChart')
      const labelData = this.forecastData.list.map(item => {
        const date = new Date(item.dt * 1000)
        const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
        const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
        return `${h}:${m}`
      })
      const chartData = this.forecastData.list.map(item => {
        return (item.main.temp - 273.15).toFixed(1)
      })
      var chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labelData,
          datasets: [{
            borderColor: '#343a40',
            borderWidth: 1.5,
            data: chartData,
            fill: false
          }]
        },
        options: {
          legend: {
            display: false
          }
        }
      })
    }
  },
  watch: {
    weatherData: function () {
      this.getForecast()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/weather-icons/css/weather-icons.min.css';
@import '../assets/weather-icons/css/weather-icons-wind.min.css';
@import '../assets/all';

p {
  margin-bottom: 0;
}
.window {
  padding: $spacer;
  background-color: rgba($light, .6);
  border-radius: $border-radius;
}
.weather-icon {
  font-size: 4rem;
  line-height: 1.25;
}
.temp-range {
  font-size: 1.125rem
}
.temp {
  font-size: 2.25rem;
}
.description {
  font-size: 1.375rem;
}
.info>div {
  padding: 0 !important;
}
hr {
  width: 100%;
  border-top: 2px solid rgba($dark, .5);
}
.three-h {
  i {
    font-size: 1.75rem;
  }
  .time {
    font-size: .75rem;
  }
}
@include md {
  .window {
    padding: $spacer-md;
  }
}
@include lg {
  .window {
    padding: $spacer-md 2*$spacer-md;
  }
}
</style>
