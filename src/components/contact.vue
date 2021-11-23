<template>
  <div class="hello">
  </div>
 
     <div style="text-align:center">
      
   <div class="container text-center">
    <h1>CONTACT</h1>
    <p>Address : 255/44 M.6 Thasa-an,
        Bangpakong Chachoengsao</p>
    <p>Tel : 098-397-1070</p>
    <p>Email : inattamon4@gmail.com</p>
    <p>FB : Nattamon Jaroensirisombat</p>
    <p>Line : inattamon</p>
    </div> 
    <br>
</template>

<script>
import contact from './components/contact.vue';
export default  {
  name: 'contact',
  props: {
    msg: String
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

