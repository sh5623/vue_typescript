<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"
    />
    <Item
      v-for="item in items"
      v-bind:key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
      @change="renderItems"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Item from '@/components/TodoComponents/Item.vue';
import { TodoStore } from '@/store/module/todo/TodoStore';

@Component({
  components: {
    Item,
  },
})
export default class ItemList extends Vue {
  public items: any[] = [];

  get todoList() {
    return TodoStore.todoList;
  }

  created() {
    this.initRenderTodoList(this.$route.params.status);
  }

  private async initRenderTodoList(status: string) {
    if (!status) {
      this.items = await TodoStore.allTodoList;
    } else if (status === 'active') {
      this.items = await TodoStore.activeTodoList;
    } else if (status === 'clear') {
      this.items = await TodoStore.clearTodoList;
    }
  }

  public renderItems() {
    if (this.$route.params.status === 'active') {
      this.items = TodoStore.activeTodoList;
    } else if (this.$route.params.status === 'clear') {
      this.items = TodoStore.clearTodoList;
    } else {
      this.items = TodoStore.allTodoList;
    }
  }

  @Watch('$route.params.status')
  private routeUpdate(newValue: string) {
    this.initRenderTodoList(newValue);
  }

  @Watch('todoList')
  private changeTodoList() {
    this.renderItems();
  }
}
</script>

<style lang="scss" scoped></style>
