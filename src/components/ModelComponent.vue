<template>
  <div class="model-component">
    <h4>Model Component</h4>
    <p>Vue와 TypeScript를 공부하는것에 동의하시겠습니까?</p>
    <input type="checkbox" :checked="checked" @change="changeChecked" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit } from 'vue-property-decorator';

@Component
export default class ModelComponents extends Vue {
  @Model('changeAgree', { type: Boolean }) readonly checked!: boolean;

  @Emit('change')
  private changeChecked(event: Event) {
    return (event.target as HTMLInputElement).checked;
  }
}
</script>

<style scoped>
div {
  display: line-block;
}
</style>
