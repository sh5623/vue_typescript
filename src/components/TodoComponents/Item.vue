<template>
  <div class="input-group">
    <span class="input-group-addon">
      <input
        type="checkbox"
        :checked="status === 'clear'"
        @change="changeStatus"
      />
    </span>
    <input type="text" class="form-control" :value="title" />
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="removeItem">
        X
      </button>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { TodoStore } from '@/store/module/todo/TodoStore';

@Component
export default class Item extends Vue {
  @Prop() readonly id!: number;
  @Prop() readonly title!: string;
  @Prop() readonly status!: string;

  private changeStatus(event: Event) {
    const checked: boolean = (event.target as HTMLInputElement).checked;

    if (checked) {
      TodoStore.changeStatus({ id: this.id, status: 'clear' });
      this.$emit('change');
    } else {
      TodoStore.changeStatus({ id: this.id, status: 'active' });
      this.$emit('change');
    }
  }

  private removeItem() {
    TodoStore.removeItem(this.id);
    this.$emit('change');
  }
}
</script>

<style lang="scss" scoped></style>
