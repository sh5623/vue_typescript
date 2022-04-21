<template>
  <div>
    <h4>Module Vuex</h4>
    Module Data : {{ moduleData }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ModuleStore } from '@/store/module/common/ModuleStore';

@Component
export default class BasicVuex extends Vue {
  get moduleData() {
    return ModuleStore.moduleData;
  }

  created() {
    setTimeout(() => {
      ModuleStore.setRootData('This is Module A');
    }, 3 * 1000);
  }
}
</script>
