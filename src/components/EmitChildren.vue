<template>
  <div>
    <button @click="logCount">자식에서 숫자를 증가시킵니다.</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component
export default class EmitChildren extends Vue {
  @Emit('counter')
  logCount() {
    console.log('count');
  }
}
</script>
