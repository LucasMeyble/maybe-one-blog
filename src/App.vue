<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  
  components: {
    NavBar,
  }

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

*,  *::before, *::after{
  font-family: 'Fira Code', monospace;
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

#app {
  background-color: #131313;
  color: #FFF;
  height: 100vh;
}


</style>
