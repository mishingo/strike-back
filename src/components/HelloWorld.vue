<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> Total Participants {{voteTotal}} </h2>
    <button @click="addAddress" class="btn"> Register for the Union </button>
    <button @click="increaseVote" class="btn"> Vote for Strike </button>
    <button @click="decreaseVote" class="btn"> Vote against Strike </button>
    <button @click="getTotal" class="btn"> Get Total Votes for Strike </button>
  </div>
</template>

<script>
const StrikeContract = require('../../dapp-module/StrikeContract')
let strikeContract = new StrikeContract()
console.log(strikeContract)
strikeContract.helloWorld()

export default {
  name: 'App',
  data () {
    return {
      vote: 1,
      voteTotal: '',
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
    },
    decreaseVote () {
      return strikeContract.decreaseVote().then((vote) => {
        return this.getTotal()
      })
    },
    addAddress () {
      return strikeContract.addAddress().then((vote) => {
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
