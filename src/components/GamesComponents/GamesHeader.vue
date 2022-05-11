<template>
  <div>
    <ol class="header">
      <li><router-link to="/games/baseball">BaseBall</router-link></li>
      /
      <li>
        <router-link to="/games/response-check">ResponseCheck</router-link>
      </li>
      /
      <li>
        <router-link to="/games/rock-paper-scissors"
          >Rock Paper Scissors</router-link
        >
      </li>
      /
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GamesHeader extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;

  li {
    display: inline-block;
  }

  a {
    color: #337ab7;
  }

  a.router-link-exact-active {
    color: #32c487;
  }
}
</style>
