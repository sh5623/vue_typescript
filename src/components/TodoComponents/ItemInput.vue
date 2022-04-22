<template>
  <div class="form-group">
    <input
      type="text"
      v-model="title"
      class="form-control"
      placeholder="할일을 입력해 주세요,"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TodoStore } from '@/store/module/todo/TodoStore';

@Component
export default class ItemInput extends Vue {
  private title: string = '';
  private addItem() {
    TodoStore.addItem({
      id: TodoStore.todoList.length,
      title: this.title,
      status: 'active',
    });

    this.title = '';
  }
}
</script>

<style lang="scss" scoped></style>
