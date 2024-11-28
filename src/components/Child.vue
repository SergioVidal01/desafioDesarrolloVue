<template>
    <div>
      <input v-model="inputTexto" />
      <button @click="enviarTexto">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputTexto: ''
      };
    },
    methods: {
      enviarTexto() {
        this.$emit('enviar', this.inputTexto);
      }
    }
  };
  </script>
  