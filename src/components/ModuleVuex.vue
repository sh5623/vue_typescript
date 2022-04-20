<template>
  <div>
    <h4>Module Vuex</h4>
    Module Data : {{ moduleData }}
    <br />
    ModuleA Data : {{ moduleAData }}
    <br />
    ModuleB Data : {{ moduleBData }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModuleStore from '@/store/module/common/ModuleStore';

@Component
export default class BasicVuex extends Vue {
  get moduleData() {
    return ModuleStore.state.data;
  }

  get moduleAData() {
    return ModuleStore.state.moduleA.data;
  }

  get moduleBData() {
    return ModuleStore.state.moduleB.data;
  }

  created() {
    ModuleStore.dispatch('setRootData', 'change module data');
    ModuleStore.dispatch('moduleB/setRootData', 'This is module B');
    console.log(ModuleStore.state);
  }
}
</script>
