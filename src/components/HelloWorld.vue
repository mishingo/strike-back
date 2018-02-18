<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> Total Participants {{voteTotal}} </h2>
    <button @click="getTotal"> Click Me to get total </button>
    <button @click="increaseVote" class="btn"> Click Me to vote </button>
  </div>
</template>

<script>
const StrikeContract = require('../../dapp-module/StrikeContract')
let strikeContract = new StrikeContract()
console.log(strikeContract)

export default {
  name: 'App',
  data () {
    return {
      vote: 1,
      voteTotal: '0',
      msg: 'Vote agains FB'
    }
  },
  methods: {
    getTotal () {
      return strikeContract.getVote().then((total) => {
        this.voteTotal = total
        console.log(strikeContract)
        // return this.total
      })
    },
    increaseVote () {
      return strikeContract.increaseVote().then((vote) => {
        return this.getTotal()
      })
    }
  },
  mounted () {
    var self = this
    setTimeout(function () {
      self.getTotal()
    }, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.btn {
  padding: 15px;
  font-size: 18px;
  background-color: #DFEDD1;
  color: #6B9542;
  font-weight: 900;
  border-radius: 4px;
  border: 0 solid;
}
</style>
