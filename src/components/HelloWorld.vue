<template>
  <div class="hello">
    <div class="row">
      <div class="row">
              <img src="../assets/mountainlogo.svg" style="max-width:150px;">
            </div>
      <div class="container">
        <div class="row">
          <div class="col s12 m8">
            <div class="row left-align">
              <h1 class="tw-ultrabold" style="font-weight:900;font-size:4em;">{{ msg }}</h1>
              <p class="tw-normal" style="font-size:1.2em;">Users hate social media platforms, but they use them because they have no option. Facebook, Twitter, Reddit, and Youtube are how people communicate today. These platforms derive all of their power from the data and attention they harvest from users. Individually, every user is disposable, but collectively they are the true source of value. Leveraging this value would enable users to take collective action and bargain with social media platforms to push for changes to these align these platforms with the goals and values of the users.</p>
            </div>
            <div class="row mt-l--s left-align">
              <div class="row mt-m--s"><button @click="addAddress" class="btn-large tw-bold"> Register for the Union </button></div>
              <div class="row mt-m--s"><button @click="increaseVote" class="btn-large tw-bold"> Vote for Strike </button></div>
              <div class="row mt-m--s"><button @click="decreaseVote" class="btn-large tw-bold"> Vote against Strike </button></div>
              <div class="row mt-m--s"><button @click="getTotal" class="btn-large tw-bold"> Get Total Votes for Strike </button></div>
            </div>
          </div>
          <div class="col m4">
            <div class="row">
              <h2 style="font-weight:900;font-size:2.8em;" class="green-text"> Total Participants {{voteTotal}} </h2>
            </div>
          </div>
        </div>
        
      </div>
    </div>
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
      msg: 'Vote against FaceBook'
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
