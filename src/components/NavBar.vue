<template>
  <div id="nav">
    

    <div class="options">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Sobre</router-link> 
    </div>

    <div class="title-container" >
      <router-link class="title" to="/">Maybe One Blog</router-link>
    </div>

    <div class="options">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Sobre</router-link>
    </div>
  </div>
</template>

<style scoped>

#nav {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 60px;
  align-items: center;
  background: rgba(26, 23, 23, 0.979);
  height: 8vh;
}

.title,
.options a{
  font-weight: bold;
  color: #FFF;
  text-decoration: none;
}

.title{
  font-size: 32px;
}

.options a {
  font-size: 16px;
}


</style>