<template>
  <div>
    <img alt="Vue logo" src="../assets/vuex.png" width="60" /> Hello Kyla :)
    <hr />
    <div class="vuex">
      <BasicVuex />
      <ModuleVuex />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BasicVuex from '@/components/BasicVuex.vue';
import ModuleVuex from '@/components/ModuleVuex.vue';

@Component({
  components: {
    BasicVuex,
    ModuleVuex,
  },
})
export default class VuexView extends Vue {}
</script>

<style lang="scss" scoped>
.vuex {
  text-align: center;
}
</style>
