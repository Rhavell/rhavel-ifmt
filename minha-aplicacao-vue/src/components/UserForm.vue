<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="name">
      </div>
      <button type="submit">Enviar</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'UserForm',
    data() {
      return {
        name: ''
      }
    },
    methods: {
      handleSubmit() {
        alert(`Nome enviado: ${this.name}`);
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }
  
  div {
    margin-bottom: 1rem;
  }
  </style>
  