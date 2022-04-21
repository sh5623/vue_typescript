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
import { BasicStore } from '@/store/module/common/BasicStore';
import { ModuleStore } from '@/store/module/common/ModuleStore';

@Component
export default class BasicVuex extends Vue {
  get count() {
    return BasicStore.countData;
  }

  created() {
    console.log(ModuleStore);
  }

  private increase() {
    BasicStore.increase();
  }

  private decrease() {
    BasicStore.decrease();
  }
}
</script>
