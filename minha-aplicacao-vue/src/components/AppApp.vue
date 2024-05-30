<!-- App.vue -->

<template>
    <div id="app">
      <router-link to="/home">Home</router-link>
      <router-link to="/contato">Contato</router-link>
      <router-link to="/sobre">Sobre</router-link>
      
      <!-- Roteiro de visualização -->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppApp'
  }
  </script>
  
  <style>
  /* Estilos */
  </style>
  