<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="getTotal"> Click Me to get total </button>
    <button @click="increaseVote"> Click Me to vote </button>
  </div>
</template>

<script>
const StrikeContract = require('../dapp-module/StrikeContract')
let strikeContract = new StrikeContract()
console.log(strikeContract)

export default {
  name: 'App',
  data () {
    return {
      vote: 1,
      voteTotal: 1
    }
  },
  methods: {
    getTotal () {
      return strikeContract.getVote().then((total) => {
        return this.total
      })
    },
    increaseVote () {
      return strikeContract.increaseVote().then((vote) => {
        return this.getTotal()
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
