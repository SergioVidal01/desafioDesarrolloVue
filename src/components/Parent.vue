<template>
    <div>
      <Child @enviar="mostrarTexto" />
      <p>{{ texto }}</p>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: { Child },
    data() {
      return {
        texto: ''
      };
    },
    methods: {
      mostrarTexto(texto) {
        this.texto = texto;
      }
    }
  };
  </script>
  