<template>
  <div id="app">
    <AppHeader />
    <div class="main-content">
      <SideMenu />
      <div class="content">
        <UserForm />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import SideMenu from './components/SideMenu.vue'
import UserForm from './components/UserForm.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    SideMenu,
    UserForm,
    AppFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 1rem;
}
</style>
