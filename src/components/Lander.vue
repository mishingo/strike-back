<template>
  <div class="hello aligner">
    <div class="row">
        <img src="../assets/mountainlogo.svg" style="max-width:30%;">
        <h1> Thank You For Participating in this Strike: </h1>
        <h2> To Block Facebook </h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqpknJoxwNsuHJr-mxcvU25AmHDANKIiLCZor6KJrCFMAmYZU" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'lander',
  data () {
    return {
      msg: 'yo'
    }
  },
  methods: {
  },
  mounted () {
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
.row {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.btn {
  padding: 15px;
  font-size: 18px;
  background-color: #DFEDD1;
  color: #6B9542;
  font-weight: 900;
  border-radius: 4px;
  border: 0 solid;
  height: 20px;
  margin-top: 40px;
}
.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
