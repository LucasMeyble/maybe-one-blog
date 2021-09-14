<template>
  <div id="nav">
    

    <div class="options">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Sobre</router-link> 
    </div>

    <div class="title-container" >
      <router-link class="title" to="/">Maybe One Blog</router-link>
    </div>

    <div class="social-networks">
      <a href="https://github.com/LucasMeyble" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/></a> |
      <a href="https://www.instagram.com/lucas_meyble/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a> |
      <a href="https://www.linkedin.com/in/lucas-meyble-67b0591bb/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></a>
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
.options a, 
.social-networks a{
  font-weight: bold;
  color: #FFF;
  text-decoration: none;
}

.title{
  font-size: 32px;
}

.social-networks ,
.social-networks a {
  font-size: 21px;
}


</style>