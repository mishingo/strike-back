<template>
  <div class="hello aligner">
    <div class="row">
      <img src="../assets/mountainlogo.svg">
    </div>
    <div class="row">
      <router-link to="/fbcampaign" class="btn">Start Now</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
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
