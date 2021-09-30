<template>
  <div class="container">
    <div class="boxAvatar">
      <img class="avatar" src="https://avatars.githubusercontent.com/u/59570112?v=4" />
    </div>
    <div class="about">
      <p>Olá, meu nome é Lucas Meyble e sou apaixonado por tecnologia kk. Amo jogar vôlei 
        e basquete 🏀🏐 no meu tempo livre e este é meu blog onde tenho o intuito de postar
        alguns tutorias e artigos de coisas que sejam do meu interesse.
      </p>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'about',
  components: {

  }
}
</script>

<style scoped>
.container{
  background: rgb(24, 24, 24);
  display: flex;
  height: 50vh;
  margin: 20vh 40vh;
  padding: 0 60px;
  align-items: center;
  border-radius: 10px;
}

.about{
  font-size: 18px;
}

.boxAvatar{
  margin-right: 10vh;
}

.avatar{
  width: 30vh;
  border-radius: 50%;
  border: 1px solid rgb(240 246 252 / 10%);
  box-shadow: 0 0 0 1px rgb(240 246 252 / 10%);
}


</style>

