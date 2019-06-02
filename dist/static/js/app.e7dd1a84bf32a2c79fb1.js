webpackJsonp([1],{IcIU:function(t,e){},KLW6:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=(a("K3J8"),a("mtWM")),n=a.n(i),r=a("Rf8U"),c=a.n(r),o={props:{weatherData:{type:Object}},data:function(){return{forecastData:{}}},methods:{getForecast:function(){console.log(1);var t=this,e="https://api.openweathermap.org/data/2.5/forecast?appid=4b919e73866b859d9ae7d061d939611d&cnt=6&q="+this.weatherData.name;this.$http.get(e).then(function(e){t.forecastData=e.data})},weatherDesc:function(t){var e=t;return"clear sky"===e?"day-sunny":"scattered clouds"===e?"cloud":"broken clouds"===e||"overcast clouds"===e?"cloudy":"light rain"===e?"showers":e.indexOf("snow")>=0?"snow":"few clouds"===e?"day-cloudy":"moderate rain"===e||"heavy intensity rain"===e?"rain":""===e?"":void 0},windDirection:function(t){return t>=348.75||t<11.25?"n":t>=11.25||t<33.75?"nne":t>=33.75||t<56.25?"ne":t>=56.25||t<78.75?"ene":t>=78.75||t<101.25?"e":t>=101.25||t<123.75?"ese":t>=123.75||t<146.25?"se":t>=146.25||t<168.75?"sse":t>=168.75||t<191.25?"s":t>=191.25||t<213.75?"ssw":t>=213.75||t<236.25?"sw":t>=236.25||t<258.75?"wsw":t>=258.75||t<281.25?"w":t>=281.25||t<303.75?"wnw":t>=303.75||t<326.25?"nw":"nnw"}},watch:{weatherData:function(){this.getForecast()}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"window container text-dark"},[a("h2",[t._v(t._s(t.weatherData.name))]),t._v(" "),a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-6 col-md-5 align-self-center"},[a("p",{staticClass:"weather-icon mb-1"},[a("i",{staticClass:"wi",class:"wi-"+t.weatherDesc(t.weatherData.weather[0].description)})]),t._v(" "),a("p",{staticClass:"temp-range"},[t._v("\n        "+t._s(t._f("degreeFilter")(t.weatherData.main.temp_min))+"\n        "+t._s(" ~ ")+"\n        "+t._s(t._f("degreeFilter")(t.weatherData.main.temp_max))+"\n      ")])]),t._v(" "),a("div",{staticClass:"col-6 col-md-5 align-self-center"},[a("p",{staticClass:"temp"},[t._v("\n        "+t._s(t._f("degreeFilter")(t.weatherData.main.temp))+"\n      ")]),t._v(" "),a("p",{staticClass:"description"},[t._v("\n        "+t._s(t.weatherData.weather[0].description)+"\n      ")]),t._v(" "),a("div",{staticClass:"info row justify-content-center"},[a("div",{staticClass:"col-6 col-md-5"},[a("i",{staticClass:"wi wi-humidity"}),t._v(" "),a("span",[t._v(t._s(" "+t.weatherData.main.humidity+" %"))])]),t._v(" "),a("div",{staticClass:"col-6"},[a("i",{staticClass:"wi wi-wind wi-from-e",class:"wi-towards-"+t.windDirection(t.weatherData.wind.deg)}),t._v(" "),a("span",[t._v(t._s(" "+t.weatherData.wind.speed+" m/s"))])])])])]),t._v(" "),a("hr"),t._v(" "),a("h5",{staticClass:"mt-4 mb-3"},[t._v("逐三小時預測")]),t._v(" "),a("div",{staticClass:"threeH row"},t._l(t.forecastData.list,function(e){return a("div",{key:e.dt,staticClass:"col-2"},[a("i",{staticClass:"wi mb-2",class:"wi-"+t.weatherDesc(e.weather[0].description)}),t._v(" "),a("p",[t._v("\n        "+t._s(t._f("degreeFilter")(e.main.temp))+"\n      ")]),t._v(" "),a("p",{staticClass:"time"},[t._v("\n        "+t._s(t._f("timeFilter")(e.dt))+"\n      ")])])}),0)])},staticRenderFns:[]};var d={data:function(){return{isNoCity:!1,isFail:!1,showWeather:!1,city:"",backgroundImg:"../static/img/background.jpg",weatherData:{}}},methods:{getWeather:function(t){var e=this,a=this,s="https://api.openweathermap.org/data/2.5/weather?appid=4b919e73866b859d9ae7d061d939611d&q="+t;this.$http.get(s).then(function(t){a.weatherData=t.data,a.showWeather=!0,a.isFail=!1,a.isNoCity=!1,localStorage.setItem("city",a.city)}).catch(function(){e.isFail=!0,e.isNoCity=!1,e.showWeather=!1})},search:function(){""===this.city?(this.isNoCity=!0,this.isFail=!1,this.showWeather=!1):this.getWeather(this.city)}},created:function(){this.city=localStorage.getItem("city"),null!=this.city&&this.getWeather(this.city)},components:{Window:a("VU/8")(o,l,!1,function(t){a("IcIU")},"data-v-05fe5e9d",null).exports}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container text-center text-light"},[a("div",{staticClass:"background",style:{"background-image":"url("+t.backgroundImg+")"}}),t._v(" "),a("h1",{staticClass:"display-4 pt-5"},[t._v("天氣預報")]),t._v(" "),a("div",{staticClass:"form-group mt-4 mb-1"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control col-10 col-md-6 mx-auto",attrs:{neme:"cuty",id:"city",type:"text",placeholder:"London, New York, Paris..."},domProps:{value:t.city},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.city=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-light mt-3",attrs:{type:"submit",id:"submitCity"},on:{click:t.search}},[t._v("查  詢")])]),t._v(" "),a("div",{staticClass:"hint"},[a("p",{staticClass:"transition text-danger",class:{hide:!t.isNoCity}},[t._v("請輸入城市名稱")]),t._v(" "),a("p",{staticClass:"transition text-danger",class:{hide:!t.isFail}},[t._v("沒有您所查詢城市的資料")])]),t._v(" "),a("Window",{staticClass:"transition col-12 col-md-8 mb-5",class:{hide:!t.showWeather},attrs:{weatherData:t.weatherData}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"city"}},[this._v("請輸入愈查詢的"),e("strong",[this._v("城市名稱")])])}]};var u={name:"App",components:{Forecast:a("VU/8")(d,h,!1,function(t){a("KLW6")},"data-v-94a06044",null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Forecast")],1)},staticRenderFns:[]};var m=a("VU/8")(u,p,!1,function(t){a("V8mq")},null,null).exports;s.a.use(c.a,n.a),s.a.filter("degreeFilter",function(t){return(Number(t)-273.15).toFixed(1)+" °C"}),s.a.filter("timeFilter",function(t){return((t=new Date(1e3*t)).getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())}),s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:m},template:"<App/>"})},V8mq:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e7dd1a84bf32a2c79fb1.js.map