<template>
  <div class="window container text-dark">
    <h2>{{ weatherData.city.name }}</h2>
    <div class="row justify-content-center">
      <div class="col-6 col-md-5 align-self-center">
        <p class="weather-icon mb-1">
          <i class="wi wi-day-sunny"
          :class="'wi-' + weatherDesc(weatherData.list[0].weather[0].description)"></i>
        </p>
        <p class="temp-range">
          {{ weatherData.list[0].main.temp_min | degreeFilter }}
          {{ ' ~ ' }}
          {{ weatherData.list[0].main.temp_max | degreeFilter }}
        </p>
      </div>
      <div class="col-6 col-md-5 align-self-center">
        <p class="temp">
          {{ weatherData.list[0].main.temp | degreeFilter }}
        </p>
        <p class="description">
          {{ weatherData.list[0].weather[0].description }}
        </p>
        <div class="info row justify-content-center">
          <div class="col-6 col-md-5">
            <i class="wi wi-humidity"></i>
            <span>{{ ` ${weatherData.list[0].main.humidity} %` }}</span>
          </div>
          <div class="col-6">
            <i class="wi wi-wind wi-from-e" :class="'wi-towards-' + windDirection(weatherData.list[0].wind.deg)"></i>
            <span>{{ ` ${weatherData.list[0].wind.speed} m/s` }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weatherData: {
      type: Object
    }
  },
  methods: {
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
      } else if (desc === 'light snow') {
        return 'snow'
      } else if (desc === 'few clouds') {
        return 'day-cloudy'
      } else if (desc === '') {
        return ''
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
