<template>
  <div id="nav">
    <div class="options">
      <router-link @click="closeMenu" class="link" to="/">Inicio </router-link> 
      <router-link @click="closeMenu" class="link" to="/about">Sobre</router-link> 
    </div>

    <div class="title-container" >
      <router-link class="title" to="/">Maybe One Blog</router-link>
    </div>

    <button @click="click" id="btn-mobile"><font-awesome-icon :icon="['fas', 'align-right']"/></button>

    <div class="social-networks">
      <a href="https://github.com/LucasMeyble" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/></a> |
      <a href="https://www.instagram.com/lucas_meyble/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a> |
      <a href="https://www.linkedin.com/in/lucas-meyble-67b0591bb/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
    data(){
        return{
            
        }
    },
    methods: {
        click(){
          const nav = document.getElementById('nav');
          nav.classList.toggle('active');
        },
        closeMenu(){
          const nav = document.getElementById('nav');
          nav.classList.remove('active');
        }
    }
}
</script>

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
  color: rgb(87, 87, 87);
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

#btn-mobile{
  display: none;
}

/* ------------------------------------------ */
/* mobile */

@media (max-width: 720px){
  #btn-mobile {
    padding: 10px 10px;
    display: block;
    color: #FFF;
    background: #000;
    cursor: pointer;
  }
  
  #btn-mobile :hover{
    color: rgb(160, 245, 245)
  }

  /* #nav {
      border-bottom: p solid rgb(36, 36, 36);

  } */

  .options{
    /* display: flex; */
    display: none;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 8vh;
    padding-left: 60px;
    background: #000000; 
    right: 0px;
    height: 0vh;
    z-index: 1000;
  }

  #nav.active .options{
    height: 92vh;
    display: flex;
  }

  .options a{
    background-image: linear-gradient(100deg,rgb(24, 24, 24) 20%, rgb(0, 0, 0) 96%);
    border: 1px solid #000;
    border-radius: 5px;
    margin: 0.5vh 0; 
    padding: 2vh 0;
    padding-left: 3vh;
  }

  .options :hover{
    /* background: rgb(15, 15, 15); */
    background-image: linear-gradient(100deg,rgb(7, 7, 7) 20%, rgb(0, 0, 0) 96%);
    border-left: 2px solid rgb(160, 245, 245);
  }

  .title{
    font-size: 16px;
  }


  .social-networks{
    display: none;
  }
}


</style>