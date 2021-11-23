<template>
  <div class="hello"></div>
   <img alt="Vue logo" src="https://reg.buu.ac.th/registrar/getstudentimage.asp?id=61160217">
  <h1>{{ msg }}</h1>
  <h2>PORTFOLIO <br>NATTAMON JAROENSIRISOMBAT</h2>
  <p>
    Hello My name is Nattamon Jaroensirisombat , you can call me Nat. I’m 21
    years old. <br />
    My birthday is the 4th of March 2000. I’m a student at Burapha University.
  </p>

  <h3>OBJECTIVE</h3>
  <p>
    I would like to expand my knowledge of programming and formally use my<br />
    programming skills as an employee of your company.
  </p>

  <h3>EDUCATION</h3>
  <p>
    <i>BURAPHA UNIVERSITY</i><br />
    JULY 2018 - PRESENT<br />
    B.Sc.(Information Technology) Faculty of Informatics<br /><br />
    <i>SAINT LOUIS SCHOOL CHACHOENGSAO</i><br />
    AUGUST 2007 - FEBRUARY 2017<br />
    Primary School - Senior High School Art - Mathematics<br />
  </p>

  <h3>COMPUTER SKILLS</h3>
  <p>HTML , Java , PHP , MS Office , Adobe Photoshop , Adobe Illustrator</p>

  <h3>HOBBY</h3>
  <p>Listen to music , Play games, Watch movies, series dramas</p>


  <router-link :to="{ name: 'contactt'}">
  <button>Other Contacts</button>
  </router-link>

</template>

<script>
export default {
  name: 'aboutme',
  props: {
    msg: String,
  },
};
</script>
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
