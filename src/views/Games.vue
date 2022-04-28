<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" width="60" /> Kyla's Games :)
    <hr />
    <div class="home">
      <GamesHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GamesHeader from '@/components/GamesComponents/GamesHeader.vue';

@Component({
  components: {
    GamesHeader,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  padding: 100px;
}
</style>
