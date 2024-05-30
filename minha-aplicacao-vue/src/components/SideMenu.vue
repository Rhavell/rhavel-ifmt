<template>
    <aside>
      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'SideMenu'
  }
  </script>
  
  <style scoped>
  aside {
    background-color: #343a40;
    color: white;
    padding: 1rem;
    width: 200px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 1rem 0;
  }
  </style>
  