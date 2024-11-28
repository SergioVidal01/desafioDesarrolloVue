<template>
    <div>
      <p>Contador: {{ contador }}</p>
      <button @click="incrementar">Incrementar</button>
      <button @click="decrementar">Decrementar</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['contador'])
    },
    methods: {
      ...mapMutations(['incrementar', 'decrementar'])
    }
  };
  </script>
  