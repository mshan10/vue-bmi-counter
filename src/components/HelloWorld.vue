<template>
  <div class="calculator">
    <!-- Potential annual savings -->
    <mdc-layout-grid class="report">
      <mdc-layout-cell span=6>
        <mdc-display>{{ savings1 | currency }} <span v-if="mode"> - {{ savings2 | currency }}</span></mdc-display>
      </mdc-layout-cell>
      <mdc-layout-cell span=6>
        <mdc-headline>Average Potential Annual Savings</mdc-headline>
      </mdc-layout-cell>
    </mdc-layout-grid>
    <!-- Ineligible dependents -->
    <mdc-layout-grid class="report">
      <mdc-layout-cell span=6>
        <mdc-display>{{ removed1.toFixed() }} <span v-if="mode"> - {{ removed2.toFixed() }}</span></mdc-display>
      </mdc-layout-cell>
      <mdc-layout-cell span=6>
        <mdc-headline>Average Ineligile Dependents</mdc-headline>
      </mdc-layout-cell>
    </mdc-layout-grid>
    <!-- Enter details -->
    <h3 >Enter benefit details</h3>
    <mdc-layout-grid>
      <mdc-layout-cell span=6>
        <mdc-textfield v-model="total_enrolled" v-on:input="calculateBA" outline/>
      </mdc-layout-cell>
      <mdc-layout-cell span=6>
        <mdc-textfield v-model="average_cost" v-on:input="calculateBA" outline/>
      </mdc-layout-cell>
    </mdc-layout-grid>
    <!-- Button choices -->
    <mdc-layout-grid>
      <mdc-layout-cell>
        <mdc-button raised v-on:click="changeMode(0)">Below Average</mdc-button>
      </mdc-layout-cell>
      <mdc-layout-cell>
        <mdc-button raised v-on:click="changeMode(1)">Average</mdc-button>
      </mdc-layout-cell>
      <mdc-layout-cell>
        <mdc-button raised v-on:click="changeMode(2)">Above Average</mdc-button>
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
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
  margin: 0;
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
.calculator {
  padding: 50px 200px;
  /* color: blue; */
}
.report {
  text-align: left;
}
</style>
