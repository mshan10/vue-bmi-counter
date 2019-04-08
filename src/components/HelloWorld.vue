<template>
  <div class="hello">
    <h1>{{ total_enrolled | currency }}</h1>
    <input v-model="total_enrolled" v-on:input="calculateBA">
    <input v-model="average_cost" v-on:input="calculateBA">
    <!-- <ul>
      <li>{{ total_enrolled }}</li>
      <li>{{ average_cost }}</li>
      <li>{{ mode }}</li>
    </ul> -->
    <ul>
      <li>{{ removed1 }} <span v-if="mode"> - {{ removed2 }}</span></li>
      <li>{{ savings1 | currency }} <span v-if="mode"> - {{ savings2 | currency }}</span></li>
    </ul>
    <ul>
      <mdc-button raised v-on:click="changeMode(0)">Below Average</mdc-button>
      <mdc-button raised v-on:click="changeMode(1)">Average</mdc-button>
      <mdc-button raised v-on:click="changeMode(2)">Above Average</mdc-button>
    </ul>
  </div>
</template>

<script>
// import VueMDCButton from 'vue-mdc-adapter/button'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      total_enrolled: 0,
      average_cost: 0,
      removed1: 0,
      removed2: 0,
      savings1: 0,
      savings2: 0,
      mode: 0
    }
  },
  methods: {
    calculateBA: function() {
      this.removed1 = (!this.mode) ? (this.total_enrolled * .02) : (this.total_enrolled * .03 * this.mode)
      this.removed2 = this.total_enrolled * .05 * this.mode
      this.savings1 = this.removed1 * this.average_cost
      this.savings2 = (!this.mode) ? 0 : (this.removed2 * this.average_cost)
      console.log("add numbers")
    },
    changeMode: function(num) {
      this.mode = num
      this.calculateBA()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
