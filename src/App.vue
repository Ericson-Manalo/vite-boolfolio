<script setup>
import AppHeader from './components/AppHeader.vue';
// import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
<AppHeader/>
<!-- <AppMain/> -->
<router-view></router-view>
<AppFooter/>

</template>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
</style>
