<template>
    <header class="header">
      <router-link :to="'/'">
        <img class="logo" src="/static/logo.png">
      </router-link>
      <ul class="ul">       
          <li class="li" v-for="rota in rotas" :key="rota.path">
            <router-link class="lista" :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
          </li>
      </ul>
    </header>
</template>

<script>

export default {

    props: {
        rotas: {
            type: Array,
            required: true
        }
    }
}
</script>
<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #32373f, #d8d8d8);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8vh;
        overflow: hidden;
    }

    .ul {
        display: flex;
        height: 50%;
        width: 50%;
    }

    .li {
        list-style: none;
        margin-top: 2px;
    }

    .lista, .lista:focus{
        color:black;
        text-decoration: none;
        padding: 12px 10px;
        font-size: 20px;
    }

    .lista:hover{
        text-decoration: none;
        color:white;
        background: #54575c;
        border-radius: 5px;
    }

    .logo {
        height: 100%;
        width: 8vh;
    }
</style>
