<template>
  <div id="nav">
    

    <div class="options">
      <router-link class="link" to="/">Inicio </router-link> 
      <router-link class="link" to="/about">Sobre</router-link> 
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
  background: rgb(0, 0, 0);
  height: 8vh;
  border-bottom: 0.5px solid rgb(36, 36, 36);
}

.options a {
  color: rgb(63, 63, 63);
  text-decoration: none;
  font-weight: bold;
}
.title, 
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

a :hover, .options :hover {
  color: rgb(160, 245, 245)
}


</style>