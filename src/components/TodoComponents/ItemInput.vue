<template>
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      placeholder="할일을 입력해 주세요,"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ItemInput extends Vue {
  private addItem() {
    console.log('addItem');
  }
}
</script>

<style lang="scss" scoped></style>
