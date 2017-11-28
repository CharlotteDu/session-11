var vm = new Vue({
  el: '#app',
  data: {
  	countInsultesMax: 27,
  	countInsultes: 0, 
  	interval: null
  },
  methods: {
  	visibilityCounterChanged: function visibilityCounterChanged(isVisible) {
  		if(isVisible === true) {
  			this.startCounter()
  		} else {
  			this.stopCounter()
  		}
  	},
  	startCounter: function startCounter() {
  		this.interval = setInterval(this.incrementCounter, 80)
  	},
  	stopCounter: function stopCounter() {
  		clearInterval(this.interval)
  		this.interval = null
  	},
  	incrementCounter: function incrementCounter() {
  		if(this.countInsultes >= this.countInsultesMax) {
  			this.stopCounter()
  		} else {
  			this.countInsultes++;
  		}
  	}
  }

})


