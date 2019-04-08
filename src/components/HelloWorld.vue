<template>
  <div class="hello">
    <h1>{{ total_enrolled | currency }}</h1>
    <ul>
      <button v-on:click="addNumbers">Add</button>
    </ul>
  </div>
</template>

<script>
import Vue2Filters from 'vue2-filters'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      total_enrolled: 0,
      average_cost: 0,
      removed: 0,
      savings: 0
    }
  },
  methods: {
    calculate: function() {
      removed = total_enrolled * .02
      savings = removed * average_cost
      // this.total_enrolled = 54321
      console.log("add numbers")
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
