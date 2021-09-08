<template>
  <div id="nav">
    <div class="title" >
      <router-link to="/">Maybe one blog</router-link>
    </div>
    <div class="options">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Sobre</router-link>
    </div>
  </div>
</template>

<style scoped>

#nav {
  padding: 30px;
  align-items: center;
  text-align: left;
  display: flex;
  flex-direction: row;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.title{
  font-weight: bold;
  font-size: 24px;
}

.options{
  font-size: 18;
}


</style>