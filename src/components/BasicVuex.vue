<template>
  <div>
    <h4>Basic Vuex</h4>
    {{ count }}
    <div>
      <button @click="increase">증가</button>
      <button @click="decrease">감소</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BasicStore from '@/store/module/common/BasicStore';
import ModuleStore from '@/store/module/common/ModuleStore';

@Component
export default class BasicVuex extends Vue {
  get count() {
    return BasicStore.state.count;
  }

  get moduleData() {
    return ModuleStore.state.data;
  }

  created() {
    console.log(ModuleStore.state.data);
    ModuleStore.dispatch('setRootData', 'test');
  }

  private increase() {
    BasicStore.dispatch('increase');
  }

  private decrease() {
    BasicStore.dispatch('decrease');
  }
}
</script>
