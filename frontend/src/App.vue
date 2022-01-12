<template>
  <div>

    <meu-menu :rotas="routes"/>

    <div class="corpo">

      <transition name="pagina">
        <router-view></router-view>
      </transition>

    </div>

  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue'

export default {

  components: {
    'meu-menu' : Menu
  },
  data() {
    return {
      routes : routes.filter(route => route.menu)
    }
  }

}
</script>

<style>
  .corpo{
    width: 96%;
    margin: 0 auto;
  }

  .pagina-enter, .pagina-leave{
    opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active{
    transition: opacity .8s;
  }

</style>
