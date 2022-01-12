<template>
    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>

export default {

    props: {
        tipo: {
            required: true,
            type: String
        }, 
        rotulo: {
            required: true,
            type: String
        }, 
        confirmacao: Boolean, 
        estilo: String
        
    },

    methods: {

        disparaAcao(){
            if(this.confirmacao){
                if(confirm('Confirma operação?')) {
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
            
        }
    },

    computed: {

        estiloDoBotao() {

            if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
            if(this.estilo == 'perigo') return 'botao-perigo';
            if(this.estilo == 'alterar') return 'botao-alterar';
            if(this.estilo == 'gravar') return 'botao-gravar';
        }
    }
}
</script>

<style>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
    .botao-alterar {
        background: #ffc107;
        color: black;
    }
    .botao-gravar {
        background: #28a745;
        color: white;
    }
</style>
