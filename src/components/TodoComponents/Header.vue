<template>
  <div>
    <ol class="breadcrumb">
      <li><router-link to="/todo/">All</router-link></li>
      <li><router-link to="/todo/active">Active</router-link></li>
      <li><router-link to="/todo/clear">Clear</router-link></li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.breadcrumb {
  a.router-link-exact-active {
    color: #32c487;
  }
}
</style>
